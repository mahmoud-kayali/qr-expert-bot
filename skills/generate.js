
module.exports = function(controller, helpers) {
  
  
  controller.hears('generate', 'direct_message,direct_mention', function(bot, message) {
    var data = message.text.substr(9);
    if (data.trim().length > 0)
      bot.reply(message,{files:['https://' + process.env.PROJECT_DOMAIN + '.glitch.me/qr?code='+encodeURIComponent(data)]})
    else
      bot.reply(message,'Please enter text to generate QR Code from');

            
    
  });
    
      

    
  

  

};
