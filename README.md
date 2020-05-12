# Ángel Guerra

> Sitio personal de Ángel Guerra

## Desarrollo

¡Algún día rellenaré esto! Mientras...

```bash
# Dependencias Jekyll (Ruby)
bundle install
# Dependencias JS (Node)
npm install
# Que comience el juego
npm run start:dev
```

# Build

```bash
# Limpia los ficheros basura
npm run:clean
# Compila los assets
./node_modules/.bin/webpack --env=prod --progress --profile --colors --verbose --display-error-details
# Construye el sitio
JEKYLL_ENV=production jekyll build
# Purga el css
./node_modules/.bin/purgecss --css _site/assets/webpack/main.bundle.css --content _site/**/*.html,_site/**/*.js --output _site/assets/webpack/main.bundle.css
```