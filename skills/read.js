var request = require("request");
var Jimp = require("jimp");
var QrCode = require('qrcode-reader');

module.exports = function(controller, helpers) {
  
  
  controller.hears('read', 'direct_message,direct_mention', function(bot, message) {
    
      if (!message.data.files)
        return bot.reply("Please attach an image to the message");
      request({
        url: message.data.files[0],
        headers: {
            'Authorization': 'Bearer ' + controller.config.ciscospark_access_token
        },
        encoding: null
      },function(err,res,body){
        if (! body instanceof Buffer)
          return bot.startConversation(message, function(err, convo) {convo.say("Invalid Image");});
        Jimp.read(body, function(err, image) {
          if (err) {
              console.error(err);
              return bot.startConversation(message, function(err, convo) {convo.say("Invalid Image");});
          }
          var qr = new QrCode();
          qr.callback = function(err, value) {
              if (err) {
                  console.error(err);
                  return bot.startConversation(message, function(err, convo) {convo.say("Invalid Image");});
              }
              
              bot.startConversation(message, function(err, convo) {

                
                convo.say(value.result);
              });
          };
          qr.decode(image.bitmap);
      });
          
          console.log("sending: ");
          
        });
      });
      

    
  

  

};
