function getElementByInputField(isIncrease){
  const inputField = document.getElementById('case-number-field');
  const inputFieldValue = inputField.value;
  const inputFieldValueSToIni = parseInt(inputFieldValue);
  // const previousValue = inputFieldValueSToIni + 1;
  // inputField.value = previousValue;
  let newPlusCaseAddNumber;
  if(isIncrease === true){
    newPlusCaseAddNumber = inputFieldValueSToIni + 1;
  }
  else{
    newPlusCaseAddNumber = inputFieldValueSToIni - 1;
  }
  inputField.value = newPlusCaseAddNumber;
  return newPlusCaseAddNumber;
}
function updateCaseTotalNumber(newPlusCaseAddNumber){
     const totalCasePrice = newPlusCaseAddNumber * 59;
     const caseTotalElement = document.getElementById('case-total');
     caseTotalElement.innerText = totalCasePrice;
}
// function caseFieldGetById(isIncrease){
//     const caseField = document.getElementById('case-number-field');
//     const caseFieldValue = caseField.value;
//     const caseFieldValueStoNum = parseInt(caseFieldValue);
//     let newPlusCaseAddNumber;
//     caseField.value = newPlusCaseAddNumber;

//       if(isIncrease === true){
//         newPlusCaseAddNumber = caseFieldValueStoNum + 1;
//       }
//       else{
//         newPlusCaseAddNumber = caseFieldValueStoNum - 1;
//       }

//     caseField.value = newPlusCaseAddNumber;
    
//     return newPlusCaseAddNumber;
// }

// function caseFieldGetByIdMinus(){
//     const caseFieldMinus = document.getElementById('case-number-field');
//     const caseFieldMinusValue = caseFieldMinus.value;
//     const caseFieldMinusStoNum = parseInt(caseFieldMinusValue);
//     const newNegativeCaseField = caseFieldMinusStoNum - 1;
//     caseFieldMinus.value = newNegativeCaseField;
//     return newNegativeCaseField;
    
// }

// function getFieldByIdCase(fieldValueId){
//     const caseNumberField = document.getElementById(fieldValueId);
//     const caseNumberFieldValue = caseNumberField.value;
//     const previousCaseNumber = parseFloat(caseNumberFieldValue);
//     const newCaseNumber = previousCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;
//     return newCaseNumber;
   
// }
// function getFieldByIdCaseMinus(elementValueId){
//     const caseMinusNumberField = document.getElementById(elementValueId);
//     const caseNumberFieldValueMinus = caseMinusNumberField.value;
//     const previousCaseMinusNumber = parseFloat(caseNumberFieldValueMinus);
//     const newCaseNumberMinus = previousCaseMinusNumber - 1;
//     caseMinusNumberField.value = newCaseNumberMinus;
//     return newCaseNumberMinus;
   
// }

