const convertToCurrency = (amount, sourceCurrency, targetCurrency) => {
    if (sourceCurrency !== 'руб' && sourceCurrency !== 'доллар') {
        return null;
    }

    if (sourceCurrency === 'руб') {
        switch(true) {
            case targetCurrency === '$':
                return amount / 77;
            case targetCurrency === '€':
                return amount / 89;
            default:
                return null;
        }
    }

    if (sourceCurrency === 'доллар') {
        switch(true) {
            case targetCurrency === '₽':
                return amount * 77;
            case targetCurrency === '€':
                return amount * 77 / 89;
            default:
                return null;
        }
    }
};

convertToCurrency(1000, 'руб', '$');
