# Vue-Router-Tiny-Sitemap
A hassle-free way to generate a sitemap.xml for your Vue Single Page Application.

## Installation
```

npm i vue-router-sitemap

```

## Prerequisites:

In order to use this package, you will need to have ['xmlbuilder2'](https://github.com/oozcitak/xmlbuilder2) as well as ['file-saver'](https://www.npmjs.com/package/file-saver) installed. 

## Example usage
Vue router tiny sitemap takes your routes and the base url of your website, constructs a sitemap.xml file and automatically starts a download for it. This process takes place in your browser. 
For esample, you would have to start your server with "npm run serve", then visit the localhost URL. This will then automatically commence the sitemap.xml download, and output a success message in the console.

```javascript
// src/router.js
const routes = [
    //your Vue-router routes array
]

var generateSitemap = require("vue-router-tiny-sitemap")
generateSitemap(routes, "baseURL.com")