document.getElementById('phone-Minus-Btn').addEventListener('click',function(){
  const phonePreviouValue =  updatePhoneFieldById(false);
  updatePhonePrice(phonePreviouValue);
})