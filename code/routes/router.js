const fs = require('fs')
const path = require('path')

class Router {
  constructor(req, res) {
    this.req = req
    this.res = res

    if (req.url.slice(0, 4) === '/api'){
      // logic
    } else if(req.url.slice(0, 6) === '/front'){
      console.log(req.url)
    } else {
      switch (req.url){
        // Статическая папка - так как у нас СинглПейдж - то всего три файла
        case '/css.css':
          this.sendFile(path.join(__dirname, `../front/${req.url}`), 'text/css')
          break
        case '/js.js':
          this.sendFile(path.join(__dirname, `../front/${req.url}`), 'text/javascript')
          break
        case '/favicon.ico':
          // stuped favicon
          this.sendFile(path.join(__dirname, `../front/${req.url}`), 'image/x-icon')
          break
        default:
          this.sendFile(path.join(__dirname, '../front/index.html'), 'text/html')
      }
    }
  }
  sendFile(path, type) {
    fs.readFile(path, 'utf8', (err, data) => {
      this.res.writeHead(200, {
       'Content-Type': type
      })
      this.res.write(data)
      this.res.end()
    })
  }
}

module.exports = Router