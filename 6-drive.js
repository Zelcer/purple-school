const canDrive = (hasLicence, age, isDrunk) => {
    if (typeof hasLicence !== 'boolean' || typeof age !== 'number' || typeof isDrunk !== 'boolean') {
        console.warn('Не правильный тип параметра функции!');
        return;
    }

    return hasLicence && age > 18 && !isDrunk ? 'может' : 'не может';
};

console.log(canDrive(true, 19, false));
