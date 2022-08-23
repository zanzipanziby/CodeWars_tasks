//Проверьте, содержит ли строка одинаковое количество «x» и «o». 
//Метод должен возвращать логическое значение и не учитывать регистр. 
//Строка может содержать любой символ.

function XO(str) {
    str = str.toLowerCase();
    let sumX = 0;
    let sumO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            sumX += 1;
        } else if (str[i] === 'o') {
            sumO += 1;
        };
    }
    if (sumX === sumO) {
        return true;
    } else {
        return false;
    }
    
};
console.log(XO('xXoOXo'));
/** */

