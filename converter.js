// Конвертация температуры
document.getElementById('convertTempBtn').addEventListener('click', function () {
    const tempInput = parseFloat(document.getElementById('tempInput').value); //
    const fromUnit = document.getElementById('fromTempUnit').value;//единица, из которой конвертируем
    const toUnit = document.getElementById('toTempUnit').value;// единица, в которую конвертируем.
    console.log(tempInput);
    console.log(fromUnit);
    console.log(toUnit);

    if (isNaN(tempInput)) {
        document.getElementById('tempResult').value = 'Введите корректное значение';
        return;
    }

    let result;
    if (fromUnit == 'C') {
        if (toUnit == 'F') {
            result = (tempInput * 9 / 5) + 32;
        } else if (toUnit == 'K') {
            result = tempInput + 273.15;
        } else {
            result = tempInput;
        }
    } else if (fromUnit == 'F') {
        if (toUnit == 'C') {
            result = (tempInput - 32) * 5 / 9;
        } else if (toUnit == 'K') {
            result = (tempInput - 32) * 5 / 9 + 273.15;
        } else {
            result = tempInput;
        }
    } else if (fromUnit == 'K') {
        if (toUnit == 'C') {
            result = tempInput - 273.15;
        } else if (toUnit == 'F') {
            result = (tempInput - 273.15) * 9 / 5 + 32;
        } else {
            result = tempInput;
        }
    }

    document.getElementById('tempResult').value = result.toFixed(2);
});

// Конвертация расстояния
document.getElementById('convertDistBtn').addEventListener('click', function () {
    const distInput = parseFloat(document.getElementById('distInput').value);
    const fromUnit = document.getElementById('fromDistUnit').value;
    const toUnit = document.getElementById('toDistUnit').value;

    if (isNaN(distInput)) {
        document.getElementById('distResult').value = 'Введите корректное значение';
        return;
    }

    let result;
    if (fromUnit === 'm') {
        if (toUnit === 'km') {
            result = distInput / 1000;
        } else if (toUnit === 'mi') {
            result = distInput / 1609.344;
        } else {
            result = distInput;
        }
    } else if (fromUnit === 'km') {
        if (toUnit === 'm') {
            result = distInput * 1000;
        } else if (toUnit === 'mi') {
            result = distInput * 0.621371;
        } else {
            result = distInput;
        }
    } else if (fromUnit === 'mi') {
        if (toUnit === 'm') {
            result = distInput * 1609.344;
        } else if (toUnit === 'km') {
            result = distInput * 1.60934;
        } else {
            result = distInput;
        }
    }

    document.getElementById('distResult').value = result.toFixed(2);
});
