window.onload = function () {
    const plus_btn = document.getElementById('plus-btn');
    const minus_btn = document.getElementById('minus-btn');
    const input = document.getElementById('num');
    const result = document.querySelector('.result');

    function takeBtnInput(element) {
        return element.value;
    }

    function calculateResult(element) {
        const action = takeBtnInput(element);
        resultNum = Number(result.textContent);
        switch (action) {
            case "+":
                resultNum += Number(input.value);
                break;
            case "-":
                resultNum -= Number(input.value);
                break;
        }
        result.textContent = parseInt(resultNum);

        if (resultNum < 0) {
            result.style.color = 'red';
        }
        else {
            result.style.color = 'black';

        }
        return resultNum;
    }

    plus_btn.addEventListener('click', function () { calculateResult(plus_btn) });
    minus_btn.addEventListener('click', function () { calculateResult(minus_btn) });


}