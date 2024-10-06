document.getElementById('phone-Plus-Btn').addEventListener('click', function() {
  const phonePreviouValue =  updatePhoneFieldById(true);
    updatePhonePrice(phonePreviouValue);
});
