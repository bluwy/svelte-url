const fs = require('fs')
const { URL } = require('url')
const sirv = require('sirv')
const polka = require('polka')
const { default: App, setSsrHref } = require('./public/build/App')

const baseHtml = fs.readFileSync('public/index.html', { encoding: 'utf-8' })

polka()
  .use(sirv('public', { extensions: [] }))
  .use((req, res) => {
    setSsrHref(new URL(req.url, `http://${req.headers.host}`).href)

    const { html } = App.render()

    const result = baseHtml.replace(
      '<div id="app"></div>',
      `<div id="app">${html}</div>`
    )

    res.write(result)
    res.end()
  })
  .listen(5001, (err) => {
    if (err) throw err
    console.log('Ready at http://localhost:5001')
  })
