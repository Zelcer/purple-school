const crypto = (password) => {
    if (typeof password !== 'string') {
        alert('Password is not correct!');
        return;
    }

    return password.split('').reverse().join('');
};

const check = (decodePassword, password) => {
    if (typeof password !== 'string') {
        alert('Password is not correct!');
        return;
    }

    return decodePassword.split('').reverse().join('') === password ? true : false;
};

console.log(check(crypto('password'), 'password'));
