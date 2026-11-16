# TendTudo | Vitrine digital de joias (site estático)

## Estrutura
```
joias-catalogo/
├── index.html
├── vercel.json
├── css/styles.css
├── js/products.js   ← número do WhatsApp, link da planilha e lista de reserva
├── js/app.js        ← filtros, cards, links wa.me, menu
├── assets/img/      ← ilustrações padrão por categoria
├── modelo-planilha.csv  ← modelo para importar no Google Sheets
└── GUIA-CLIENTE.md  ← instruções para quem edita os produtos
```

## Personalizar
1. `js/products.js`: troque `WHATSAPP_NUMBER` (ex.: `5531987654321`) e cole o link da planilha em `SHEET_CSV_URL`.
2. Produtos: ficam numa planilha do Google, que a cliente edita sozinha. Passo a passo em `GUIA-CLIENTE.md`. A lista `PRODUCTS` é só reserva.
3. `js/products.js` (bloco `STORE_INFO`): sobre a loja, endereço, horário e e-mail.

## Deploy na Vercel via Git
1. `git init && git add . && git commit -m "Primeira versão"`
2. Crie um repositório no GitHub e rode `git remote add origin <url> && git push -u origin main`
3. Em vercel.com: **Add New → Project → Import** o repositório.
4. Framework Preset: **Other**. Build Command e Output Directory em branco. Clique em **Deploy**.
5. A cada `git push` na `main`, a Vercel publica de novo. Domínio próprio em **Settings → Domains**.
