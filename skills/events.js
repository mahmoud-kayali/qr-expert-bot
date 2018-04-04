module.exports = function(controller) {


  controller.on('bot_space_join', function(bot, message) {

    bot.reply(message, 'Hi, thank you for using the QR Expert Bot<br>-Type **generate {TextToBeConverted}** to generate a QR Code<br>-Type **read** and attach the image to the message to read the QR Content<br>Do not forget to mention me if in a space<br>Type **help** if you want to see this message again at any time');

  });

  

};
