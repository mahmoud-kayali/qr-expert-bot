module.exports = function(controller)
{
  var ret = {};
  var bot = controller.spawn({});
  ret.yesNoQuestion = function(_convo, question, onYes, onNo, onOther)
  {
    _convo.ask(question, function(response, convo) {
      var userResponse = response.text.toLowerCase();
      console.log(userResponse);
      if (userResponse.match(bot.utterances.no) != null || userResponse.match(bot.utterances.quit) != null )
        typeof onNo === 'function' && onNo();
      else if (userResponse.match(bot.utterances.yes) != null)
        typeof onYes === 'function'  && onYes();
      else
        typeof onOther === 'function' && onOther();
      convo.next();  
    });
    
  };
  
  ret.askAndValidate = function(_convo, question, validate, onError, onSuccess) {
  
    _convo.ask(question, function(response, convo) {
      
      var res = response.text.trim();
      
      if (validate(res))
        onSuccess(res)
      else
        onError(res)
      
      convo.next();
      
    });

  };
  
  return ret;
}