/*Vue-Router-Tiny-Sitemap
*Minimum setup way to generate a sitemap using Vue Router
*Written by: Yosif Gorelyov
*/

/**
 * Generates a ready to use sitemap.xml file
 * @param {*} routes - the Vue router routes array.
 * @param {*} baseURL - the base URL
 */
module.exports = function generateXML(routes, baseURL) {

    //create the xmlbuilder2 wrapper, add urlset tag
    const { create } = require('xmlbuilder2');
    const root = create()
      .ele('urlset')
    
    //for each path in the routes array, combine the base URL with the path
    //and wrap them in url and loc tags.
    for(let i=0; i<routes.length; i++) {
      var path = routes[i].path
      root
        .ele('url')
          .ele('loc').txt(baseURL + path)
    }
  
    const xml = root.end({ prettyPrint: true });
    
    //Use FileSaver to directly download the sitemap.xml file
    var FileSaver = require('file-saver');
    var blob = new Blob([xml], {type: "text/xml"});
    FileSaver.saveAs(blob, "sitemap.xml");
  
    console.log("Success! The download of your sitemap should start now.")
    console.log("Make sure to remove the sitemap generator code!")
  }