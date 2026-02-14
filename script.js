function sendResponse(cardNumber, answer){

  emailjs.send("service_kb5ntih","template_evnnpsw",{
      card_number: cardNumber,
      response: answer,
      time: new Date().toLocaleString()
  })
  .then(function(){
      alert("Response Sent 💖");
  },function(error){
      console.log(error);
      alert("Error sending response ❌");
  });

}
