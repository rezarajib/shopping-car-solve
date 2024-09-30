function getFieldByIdCase(fieldValueId){
    const caseNumberField = document.getElementById(fieldValueId);
    const caseNumberFieldValue = caseNumberField.value;
    const previousCaseNumber = parseFloat(caseNumberFieldValue);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
   
}
function getFieldByIdCaseMinus(elementValueId){
    const caseMinusNumberField = document.getElementById(elementValueId);
    const caseNumberFieldValueMinus = caseMinusNumberField.value;
    const previousCaseMinusNumber = parseFloat(caseNumberFieldValueMinus);
    const newCaseNumberMinus = previousCaseMinusNumber - 1;
    caseMinusNumberField.value = newCaseNumberMinus;
    return newCaseNumberMinus;
   
}

