
// handler that is called from the Present endpoint
exports.french_hen = function(data, callback){

  // build a JSON object response - to be used by another application, i.e. studio or a public journey
  const response = {
    day: 1,
    present: {
      hen: {
        type: "French",
        qty: 3,
      }
    },
    img: 'https://images-na.ssl-images-amazon.com/images/I/81ABpo94fgL._SY500_.jpg'
  }

  // call the callback response to pass back our data - this will return via the API by default as s JSON object along with other information such as logs if they are being tailed
  callback(null, response);
}

// handler that is called from the PresentProxy response
exports.french_hen_proxy = function(data, callback){

  // In this example we want to pass back an HTML response
  const body = "\
  <html>\
    <body>\
      <h2>3 French hens</h2>\
      <img src='https://images-na.ssl-images-amazon.com/images/I/81ABpo94fgL._SY500_.jpg'/>\
    </body>\
  </html>";

  // generate our response. In this case, passing back proxy: true, say we don't just want the data passed back raw, but we want to control the response, and pass back differnt headers.
  // this is useful when communicating with 3rd party services that want XML or a specific data format back - or if you are building a response that is HTML
  const response = {
    statusCode: 200,
    response: body,
    proxy: true,
    headers: {
      "Content-Type": "text/html; charset=UTF-8"
    }
  };

  // call back with the response
  callback(null, response);  
}


