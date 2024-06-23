const fs = require('fs')

// la variable process.env.API viene de Netlify ahora ahora
// estas variables se pueden definir en el servidor
// y Nodejs las accesa.
fs.writeFileSync('./.env', `API=%${process.env.API}\n`)