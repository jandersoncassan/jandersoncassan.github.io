# jandersoncassan.github.io

Portfólio estático de Janderson Cassan — Tech Manager & Arquiteto de Soluções em Pagamentos Digitais (PIX, Core Banking).

HTML/CSS/JS puro, sem build step. Bilíngue PT-BR/EN via toggle no topo da página.

## Rodar localmente

```
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicar no GitHub Pages

Este repositório deve se chamar exatamente `jandersoncassan.github.io`.

1. Crie o repositório vazio em https://github.com/new com o nome `jandersoncassan.github.io` (sem README, sem .gitignore).
2. No diretório do projeto:
   ```
   git remote add origin https://github.com/jandersoncassan/jandersoncassan.github.io.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages** e confirme que a fonte é a branch `main`, pasta `/ (root)`. Sites `usuario.github.io` costumam ficar disponíveis automaticamente em alguns minutos, sem passo extra.
4. O site ficará em `https://jandersoncassan.github.io`.

## Atualizar conteúdo

- Texto: edite `index.html` — cada elemento traduzível tem os atributos `data-pt` e `data-en`.
- Estilo: `assets/css/style.css`.
- Toggle de idioma: `assets/js/main.js`.
- Foto: `assets/img/janderson-cassan.jpg`.
