(() => {
  "use strict";

  const waLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const genericMsg = "Olá! Gostaria de conhecer melhor as peças da TendTudo.";
  const productMsg = (name) => `Olá! Vi a peça ${name} no mostruário da TendTudo e gostaria de saber mais.`;
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const norm = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();

  const toImg = (url) => {
    const value = String(url || "").trim();
    const match = value.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=view&)?id=)([\w-]+)/);
    return match ? `https://lh3.googleusercontent.com/d/${match[1]}` : value;
  };
  const fallbackImg = (category) => {
    const value = norm(category);
    if (value.startsWith("anel")) return "assets/img/anel.svg";
    if (value.startsWith("brinco")) return "assets/img/brinco.svg";
    if (value.startsWith("pulseira")) return "assets/img/pulseira.svg";
    return "assets/img/colar.svg";
  };

  function parseCSV(text) {
    const rows = []; let row = []; let field = ""; let quoted = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (quoted) {
        if (char === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else quoted = false;
        } else field += char;
      } else if (char === '"') quoted = true;
      else if (char === ",") { row.push(field); field = ""; }
      else if (char === "\n" || char === "\r") {
        if (char === "\r" && text[i + 1] === "\n") i++;
        row.push(field); rows.push(row); row = []; field = "";
      } else field += char;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  function fromSheet(rows) {
    if (!rows.length) return [];
    const headers = rows[0].map(norm);
    const index = (name) => headers.indexOf(name);
    const columns = { name: index("nome"), category: index("categoria"), price: index("preco"), badges: index("selos"), image: index("imagem"), featured: index("destaque"), active: index("ativo"), collection: index("colecao"), promo: index("promocao") };
    const get = (record, column) => column >= 0 && record[column] ? record[column].trim() : "";
    return rows.slice(1).map((record, i) => {
      const name = get(record, columns.name);
      const category = get(record, columns.category) || "Outros";
      let price = get(record, columns.price);
      if (/^[\d.,]+$/.test(price)) price = `R$ ${price}`;
      let promo = get(record, columns.promo);
      if (/^[\d.,]+$/.test(promo)) promo = `R$ ${promo}`;
      return {
        id: i + 1, name, category, price, promo, collection: get(record, columns.collection),
        badges: get(record, columns.badges).split(/[;|]/).map((item) => item.trim()).filter(Boolean),
        image: toImg(get(record, columns.image)) || fallbackImg(category),
        featured: /^(sim|s|yes|1|true)$/.test(norm(get(record, columns.featured))),
        hidden: /^(nao|n|no|0|false)$/.test(norm(get(record, columns.active)))
      };
    }).filter((product) => product.name && !product.hidden);
  }

  async function loadProducts() {
    if (!SHEET_CSV_URL) return PRODUCTS;
    try {
      const response = await fetch(SHEET_CSV_URL, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const list = fromSheet(parseCSV(await response.text()));
      return list.length ? list : PRODUCTS;
    } catch (error) {
      console.warn("Planilha indisponível; usando a lista de reserva.", error);
      return PRODUCTS;
    }
  }

  const imageMarkup = (product, extra = "") => {
    const image = esc(product.image || fallbackImg(product.category));
    const fallback = esc(fallbackImg(product.category));
    return `<img src="${image}" alt="${esc(product.name)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallback}'" ${extra}>`;
  };

  const productCard = (product, index = 0) => `
    <article class="product-card" style="animation-delay:${Math.min(index, 8) * 55}ms">
      <button class="product-card__photo js-lightbox" type="button" data-image="${esc(product.image || fallbackImg(product.category))}" data-title="${esc(product.name)}" aria-label="Ampliar foto: ${esc(product.name)}">
        ${imageMarkup(product)}<span class="product-card__zoom" aria-hidden="true">↗</span>
      </button>
      <div class="product-card__body">
        <div class="product-card__meta"><span>${esc(product.category)}</span><button type="button" class="js-product-contact" data-product="${esc(product.name)}">Saiba mais ↗</button></div>
        <h3>${esc(product.name)}</h3>
        <p class="product-card__price">${product.promo ? `<span class="price-old">${esc(product.price)}</span><span class="price-now">${esc(product.promo)}</span>` : esc(product.price || "Consulte pelo WhatsApp")}</p>
        ${product.badges?.length ? `<ul class="badges">${product.badges.map((badge) => `<li>${esc(badge)}</li>`).join("")}</ul>` : ""}
      </div>
    </article>`;

  const featuredGrid = document.getElementById("featured-grid");
  const catalogGrid = document.getElementById("catalog-grid");
  const filters = document.getElementById("filters");
  const lookbookGrid = document.getElementById("lookbook-grid");
  const mosaicGrid = document.getElementById("mosaic-grid");
  const instagramGrid = document.getElementById("instagram-grid");
  catalogGrid.innerHTML = '<p class="empty-state">Carregando mostruário...</p>';

  function renderLookbook(products) {
    const groups = new Map();
    products.forEach((product) => {
      const key = product.collection || product.category || "Seleção especial";
      if (!groups.has(key)) groups.set(key, product);
    });
    const entries = [...groups.entries()].slice(0, 3);
    while (entries.length < 3 && products[entries.length]) entries.push([products[entries.length].category, products[entries.length]]);
    if (!entries.length) { lookbookGrid.innerHTML = ""; return; }
    lookbookGrid.innerHTML = entries.map(([name, product], index) => `
      <a class="lookbook-card" href="#catalogo" style="animation-delay:${index * 100}ms">
        <div class="lookbook-card__image">${imageMarkup(product)}</div>
        <div class="lookbook-card__caption"><span>COLEÇÃO 0${index + 1}</span><h3>${esc(name)}</h3><p>Descubra a seleção ↗</p></div>
      </a>`).join("");
  }

  function renderVisualGalleries(products) {
    const selection = products.slice(0, 6);
    mosaicGrid.innerHTML = selection.map((product, index) => `
      <button class="mosaic-item js-lightbox" type="button" data-image="${esc(product.image || fallbackImg(product.category))}" data-title="${esc(product.name)}" aria-label="Ampliar foto: ${esc(product.name)}" style="animation-delay:${index * 65}ms">${imageMarkup(product)}</button>`).join("");

    instagramGrid.innerHTML = products.slice(0, 4).map((product, index) => `
      <a class="instagram-tile" href="${esc(INSTAGRAM_URL)}" target="_blank" rel="noopener" aria-label="Visite o Instagram da TendTudo" style="animation-delay:${index * 75}ms">
        ${imageMarkup(product)}<span aria-hidden="true">↗</span>
      </a>`).join("");
  }

  function renderFilters(products, renderCatalog) {
    const state = { type: "category", value: "Todos" };
    const sync = () => filters.querySelectorAll(".chip").forEach((chip) => {
      chip.setAttribute("aria-pressed", String(chip.dataset.type === state.type && chip.textContent === state.value));
    });
    const makeRow = (label, type, values) => {
      if (!values.length) return;
      const row = document.createElement("div");
      row.className = "filters__row";
      const title = document.createElement("span");
      title.className = "filters__label";
      title.textContent = label;
      row.appendChild(title);
      values.forEach((value) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "chip";
        button.dataset.type = type;
        button.textContent = value;
        button.addEventListener("click", () => { state.type = type; state.value = value; sync(); renderCatalog(state); });
        row.appendChild(button);
      });
      filters.appendChild(row);
    };
    makeRow("Categorias", "category", ["Todos", ...new Set(products.map((product) => product.category).filter(Boolean))]);
    const collections = [...new Set(products.map((product) => product.collection).filter(Boolean))];
    if (collections.length) makeRow("Coleções", "collection", collections);
    sync();
    renderCatalog(state);
  }

  loadProducts().then((products) => {
    const safeProducts = products.filter((product) => product && product.name);
    const featured = safeProducts.filter((product) => product.featured);
    const highlight = (featured.length ? featured : safeProducts).slice(0, 4);
    const heroImage = document.getElementById("hero-image");
    if (heroImage && safeProducts[0]) {
      heroImage.src = safeProducts[0].image || fallbackImg(safeProducts[0].category);
      heroImage.alt = safeProducts[0].name;
    }
    featuredGrid.innerHTML = highlight.map(productCard).join("");
    renderLookbook(safeProducts);
    renderVisualGalleries(safeProducts);

    const renderCatalog = (state) => {
      const visible = safeProducts.filter((product) => state.type === "category"
        ? state.value === "Todos" || product.category === state.value
        : product.collection === state.value);
      catalogGrid.innerHTML = visible.length
        ? visible.map(productCard).join("")
        : '<p class="empty-state">Nenhuma peça encontrada nesta seleção.</p>';
    };
    renderFilters(safeProducts, renderCatalog);
    observeReveals();
  }).catch((error) => {
    console.error("Não foi possível montar o mostruário.", error);
    catalogGrid.innerHTML = '<p class="empty-state">Não foi possível carregar as peças no momento.</p>';
  });

  /* WhatsApp e Instagram: contato, sem carrinho ou checkout. */
  document.querySelectorAll(".js-wa-generic").forEach((link) => {
    link.href = waLink(genericMsg);
    link.target = "_blank";
    link.rel = "noopener";
  });
  document.querySelectorAll(".js-ig").forEach((link) => {
    link.href = INSTAGRAM_URL;
    if (!link.textContent.trim() || link.textContent.includes("@tendtudo")) link.textContent = `${INSTAGRAM_HANDLE} ↗`;
  });
  document.addEventListener("click", (event) => {
    const contact = event.target.closest(".js-product-contact");
    if (!contact) return;
    const name = contact.dataset.product || "esta peça";
    window.open(waLink(productMsg(name)), "_blank", "noopener,noreferrer");
  });

  /* Informações da loja configuradas em products.js. */
  const info = STORE_INFO;
  const infoBlocks = [];
  if (info.about) infoBlocks.push(`<article><h3>Sobre a loja</h3><p>${esc(info.about)}</p></article>`);
  if (info.address || info.hours) {
    infoBlocks.push(`<article><h3>Onde estamos</h3>${info.address ? `<p>${esc(info.address)}</p>` : ""}${info.mapsUrl ? `<p><a href="${esc(info.mapsUrl)}" target="_blank" rel="noopener">Ver no mapa ↗</a></p>` : ""}${info.hours ? `<p>${esc(info.hours)}</p>` : ""}</article>`);
  }
  infoBlocks.push(`<article><h3>Contato</h3><p><a href="${waLink(genericMsg)}" target="_blank" rel="noopener">WhatsApp ${esc(WHATSAPP_DISPLAY)}</a></p><p><a href="${esc(INSTAGRAM_URL)}" target="_blank" rel="noopener">Instagram ${esc(INSTAGRAM_HANDLE)}</a></p>${info.email ? `<p><a href="mailto:${esc(info.email)}">${esc(info.email)}</a></p>` : ""}</article>`);
  document.getElementById("info-grid").innerHTML = infoBlocks.join("");
  document.getElementById("footer-hours").textContent = info.hours || "";

  /* Menu mobile. */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.getElementById("year").textContent = new Date().getFullYear();

  /* Lightbox compartilhado pelo catálogo, lookbook e mosaico. */
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeLightbox = () => { if (lightbox.open) lightbox.close(); };
  const getLightboxItems = () => [...document.querySelectorAll(".js-lightbox")];
  let activeImageIndex = 0;
  const showLightboxItem = (index) => {
    const items = getLightboxItems();
    if (!items.length) return;
    activeImageIndex = (index + items.length) % items.length;
    const item = items[activeImageIndex];
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.dataset.title || "Peça da TendTudo";
    lightboxCaption.textContent = item.dataset.title || "TendTudo";
  };
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".js-lightbox");
    if (!trigger) return;
    const items = getLightboxItems();
    activeImageIndex = items.indexOf(trigger);
    showLightboxItem(activeImageIndex);
    if (!lightbox.open) lightbox.showModal();
  });
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => showLightboxItem(activeImageIndex - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => showLightboxItem(activeImageIndex + 1));
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;
    if (event.key === "ArrowLeft") showLightboxItem(activeImageIndex - 1);
    if (event.key === "ArrowRight") showLightboxItem(activeImageIndex + 1);
  });

  /* Animações de entrada com respeito à preferência de movimento reduzido. */
  function observeReveals() {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
  }
  observeReveals();
})();
