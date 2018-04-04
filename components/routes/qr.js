var qr = require('qr-image');

module.exports = function(webserver) {


  webserver.get('/qr', function(req, res) {

    var data = decodeURIComponent(req.query.code);

    var png_image = qr.imageSync(data, { type: 'png' });
    res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': png_image.length
    });
    res.end(png_image); 
      



        

  });

}
