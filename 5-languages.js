const getGreeting = (language) => {
    if (!language || typeof language !== 'string') {
        console.error('Переменая language не определена!');
        return;
    }

    switch(language) {
        case 'ru':
            console.log('Добрый день!');
            break;
        case 'en':
            console.log('Good afternoon!');
            break;
        case 'de':
            console.log('Gutten tag!');
            break;
        case 'es':
            console.log('Buenas tardes!');
            break;
        case 'fr':
            console.log('Bon après-midi!');
            break;
        default:
            console.log('Язык не определён.');
    }
};

getGreeting('de');
