const validationRules = (value, rules, formCopy) =>{
    let valid = true;
    for(let rule in rules){
        switch (rule) {
            case 'isRequired':
                valid = valid && validateRequired(value)
                break;
            case 'isEmail': 
                valid = valid && validateEmail(value);
                break;
            case 'minLength': 
                valid = valid && validateMinLength(value, rules[rule])
                break;
            case 'maxLength': 
                valid = valid && validateMaxLength(value, rules[rule])
                break;
            case 'confirmPass': 
                valid = valid && validateConfirmPass(value, formCopy[rules.confirmPass].value)
            default:
                value = true
                break;
        }
    }
    return valid;

}
const validateRequired = (value) =>{
    if(value !== ''){
        return true
    }
    return false
}
const validateEmail = email => {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLocaleLowerCase())
}
const validateMinLength = (value, ruleValue) => {
    if(value.length >= ruleValue){
        return true
    }
    return false
}
const validateMaxLength = (value, ruleValue) => {
    if(value <= ruleValue){
        return true
    }
    return false
}
const validateConfirmPass = (confirmPass, pass) => {
    if(confirmPass === pass){
        return true
    }
    return false
}
export default validationRules;