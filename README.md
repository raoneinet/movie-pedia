# 🎬 Moviepedia

**Moviepedia** é uma plataforma web para consulta de **informações sobre filmes e séries**, consumindo dados em tempo real da API pública do [TMDB](https://api.themoviedb.org/).

---

## 🚀 Iniciando o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/moviepedia.git
   cd moviepedia
   
Instale as dependências:

bash

npm install
# ou
yarn install

Inicie o servidor de desenvolvimento:

bash

npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev

Acesse no navegador:
http://localhost:3000

🌐 Fonte dos dados
Os dados são obtidos da API do TMDB (The Movie Database), que retorna um array de objetos com metadados sobre filmes, séries, popularidade, avaliações, entre outros.

Os resultados são acessados via:

response.data.results
Exemplo de estrutura de resposta:
[
  {
    "id": 950387,
    "title": "Um Filme Minecraft",
    "overview": "Quatro desajustados enfrentam problemas comuns do dia a dia...",
    "poster_path": "/4VtkIaj76TpQNfhDHXQDdT9uBN5.jpg",
    "backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    "release_date": "2025-03-31",
    "vote_average": 6.5,
    "vote_count": 1191,
    "genre_ids": [10751, 35, 12, 14],
    "original_language": "en",
    "popularity": 868.26
  }
]

🛠 Tecnologias utilizadas
React.js com Next.js

TypeScript

Tailwind CSS

Axios (para chamadas HTTP)

TMDB API (The Movie Database)

🔐 Configuração da API Key
Para consumir a API do TMDB, você precisa de uma chave de API:

Crie uma conta em https://www.themoviedb.org/.

Solicite sua API Key no painel de desenvolvedor.

Crie um arquivo .env.local na raiz do projeto e adicione:

📱 Responsividade
A interface da Moviepedia é totalmente responsiva e adaptada para celulares, tablets e desktops.

💡 Funcionalidades
🔎 Busca de filmes por título;

🗂️ Listagem por popularidade, lançamento ou avaliações;

🖼️ Exibição de cartaz, título, sinopse e nota de avaliação;

✅ Otimizada para desempenho com Next.js;

🎯 Design moderno com Tailwind CSS.

✍️ Autor
Desenvolvido por Raone Ferreira
