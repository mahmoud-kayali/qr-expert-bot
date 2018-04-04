module.exports = function(controller) {


  controller.hears('help', 'direct_message,direct_mention', function(bot, message) {

    bot.reply(message, '-Type **generate {TextToBeConverted}** to generate a QR Code<br>-Type **read** and attach the image to the message to read the QR Content<br>Do not forget to mention me if in a space');

  });

  

};
