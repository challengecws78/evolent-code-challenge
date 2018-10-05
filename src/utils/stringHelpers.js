export const isEmailValid = str => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
}

export const phoneFormatter = phone => {
    let phoneNumberWithNoSpaces = phone.replace(/\D/g, '');
    return phoneNumberWithNoSpaces.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}