# Como atualizar os produtos do site

Os produtos ficam numa planilha do Google. Você edita a planilha e o site se atualiza sozinho em até 5 minutos. Não precisa mexer em código.

## Adicionar uma peça
1. Abra a planilha e escreva uma nova linha no final, preenchendo as colunas:

| Coluna | O que escrever | Exemplo |
|---|---|---|
| nome | Nome da peça | Anel Solitário Lumière |
| categoria | Anéis, Colares, Brincos, Pulseiras ou outra | Anéis |
| preco | Só o valor | 189,90 |
| selos | Etiquetas da peça, separadas por ponto e vírgula | Banhado a Ouro 18k; Lançamento |
| imagem | Link da foto (veja abaixo) | |
| destaque | sim para aparecer em "Destaques da semana" | sim |
| promocao | Valor com desconto (opcional). Aparece ao lado do preço normal, que fica riscado | 17,00 |
| ativo | sim para mostrar, não para esconder | sim |
| colecao | Nome da coleção (opcional). Peças com o mesmo nome formam um grupo com botão próprio | Presentes |

2. Pronto. Se você escrever uma categoria nova (ex.: Tornozeleiras), o botão de filtro dela aparece sozinho.

## Mudar preço ou nome
Edite a célula na planilha.

## Tirar uma peça do ar
Troque `ativo` para **não**. Para voltar, troque para **sim**. A linha continua guardada na planilha.

## Colocar a foto
1. Suba a foto no Google Drive (de preferência quadrada, até 1 MB).
2. Clique com o botão direito na foto → **Compartilhar** → em "Acesso geral" escolha **Qualquer pessoa com o link**.
3. Clique em **Copiar link** e cole na coluna `imagem`.

Sem foto, o site mostra uma ilustração padrão da categoria.

## Cuidados
- Não mude os nomes das colunas da primeira linha nem a ordem delas.
- Não apague a primeira linha.
- Se a foto não aparecer, confira se o compartilhamento está como "Qualquer pessoa com o link".

---

## Endereço, horário e "Sobre a loja"
Esses textos ficam em `js/products.js`, no bloco `STORE_INFO`. O que estiver vazio não aparece no site. Peça para quem publica o site atualizar.

---

# Configuração inicial (feita uma vez por quem publica o site)

1. Crie uma planilha no Google Sheets e importe o arquivo `modelo-planilha.csv` (**Arquivo → Importar → Upload**, escolha "Substituir planilha").
2. Vá em **Arquivo → Compartilhar → Publicar na Web**. Escolha a aba, mude o formato para **Valores separados por vírgula (.csv)** e clique em **Publicar**.
3. Copie o link gerado e cole em `js/products.js`, na linha `const SHEET_CSV_URL = "..."`.
4. Faça `git commit` e `git push`. A Vercel publica de novo.
5. Compartilhe a planilha (modo edição) com a pessoa que vai cuidar do catálogo.

Se a planilha ficar fora do ar, o site mostra a lista de reserva que está em `js/products.js`.


## Fotos e preços do catálogo

As fotos enviadas foram incluídas localmente em `assets/products/` e os produtos estão cadastrados em `js/products.js`. Os preços atuais são provisórios, distribuídos a partir dos valores que já estavam no projeto. Antes de publicar, revise o campo `price` de cada produto. O preço aparece nos cards do mostruário e dos destaques.
