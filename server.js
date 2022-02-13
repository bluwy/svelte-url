const fs = require('fs')
const { URL } = require('url')
const sirv = require('sirv')
const polka = require('polka')
const App = require('./public/build/App').default

const baseHtml = fs.readFileSync('public/index.html', { encoding: 'utf-8' })

polka()
  .use(sirv('public', { extensions: [] }))
  .use((req, res) => {
    const { html } = App.render({
      props: {
        ssrUrl: new URL(req.url, `http://${req.headers.host}`).href
      }
    })

    const result = baseHtml.replace(
      '<div id="app"></div>',
      `<div id="app">${html}</div>`
    )

    res.write(result)
    res.end()
  })
  .listen(3001, (err) => {
    if (err) throw err
    console.log('Ready at http://localhost:3001')
  })
