Plataforma de filmes

## Iniciando....

Primeiro, rode o seguindo comando para instalar as dependências Node:

```bash
npm install
```

Em seguinda, para iniciar a aplicação, rode um dos seguintes comandos:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra em seu navegador: [http://localhost:3000](http://localhost:3000) 

Neste projeto está sendo consumido dados da API da plataforma TMDB (sobre filmes, séries, etc) onde é retornado um Array de objetos.

Os resultados são recebidos no índice ```bash .data.results```

Api: https://api.themoviedb.org/

## API TMDB Metadata
```bash
[
  {
    adult: false,
    backdrop_path: "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    genre_ids: [10751, 35, 12, 14],
    length: 4,
    id: 950387,
    original_language: "en",
    original_title: "A Minecraft Movie",
    overview: "Quatro desajustados enfrentam problemas comuns do dia a dia quando, de repente, são sugados por um portal misterioso para o Overworld: uma terra fascinante e cúbica,                   movida pela imaginação. Para voltarem para casa, eles precisarão dominar esse novo mundo enquanto embarcam em uma jornada mágica ao lado de um crafter experiente e                     inesperado: Steve.",
    popularity: 868.2685,
    poster_path: "/4VtkIaj76TpQNfhDHXQDdT9uBN5.jpg",
    release_date: "2025-03-31",
    title: "Um Filme Minecraft",
    video: false,
    vote_average: 6.521,
    vote_count: 1191,
  {
]
```
