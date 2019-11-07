import { Provider } from 'react-redux'
import React from 'react'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'
import serialize from 'serialize-javascript'
import proxy from 'express-http-proxy'
import { Helmet } from 'react-helmet'

import configureStore from '../shared/redux/store/configureStore-server'
import Routes from '../shared/routes'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server
  .disable('x-powered-by')
  .use(
    '/api',
    proxy(process.env.API, {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = process.env.CURRENT_HOST
        return opts
      }
    })
  )
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    // Create a new Redux store instance
    const store = configureStore(req)

    const promises = matchRoutes(Routes, req.path)
      .map(({ route }) => {
        return route.loadData ? route.loadData(store) : null
      })
      .map(promise => {
        if (promise) {
          return new Promise((resolve, reject) => {
            promise.then(resolve).catch(resolve)
          })
        }
      })

    Promise.all(promises).then(() => {
      const context = {}

      // Render the component to a string
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      )

      const helmet = Helmet.renderStatic()

      // Grab the initial state from our Redux store
      const finalState = store.getState()

      if (context.url) {
        return res.redirect(301, context.url)
      }
      if (context.notFound) {
        res.status(404)
      }

      res.send(`<!doctype html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Razzle Redux Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
      </head>
      <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
      </body>
  </html>`)
    })
  })

export default server
