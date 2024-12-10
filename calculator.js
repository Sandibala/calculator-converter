let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.calculator button');
let expression = "";  // Строка для хранения вводимого выражения

buttons.forEach(button => {
    button.addEventListener('click', (e) => { //приглашение для кнопки слушать, когда на неё нажмут 
        const value = e.target.innerText;
        console.log(e.target.innerText);

        if (value == '=') {
            try {
                // Попытка вычисления выражения
                expression = eval(expression);
                input.value = expression;
            } catch (error) {
                // Если произошла ошибка (например, из-за неправильного ввода), сбрасываем значение
                input.value = 'Ошибка';
                expression = "";  // Очищаем выражение
            }
        } else if (value == 'AC') {
            // Очистить все при нажатии на кнопку AC
            expression = "";
            input.value = expression;
        } else if (value == 'DEL') {
            // Удалить последний символ
            expression = expression.slice(0, -1);
            input.value = expression;
        } else if (value == '%') {
            // Обработка процента
            try {
                expression = (eval(expression) / 100).toString();
                input.value = expression;
            } catch (error) {
                input.value = 'Ошибка';
                expression = "";
            }
        
         } else {
            // Добавить символ к выражению
            expression += value;
            input.value = expression;
        }
          
    });
});
