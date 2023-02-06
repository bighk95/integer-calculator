const input = document.querySelector('.allbox');
document.body.addEventListener('click', (e) => {
    const value = e.target.textContent.trim();
    const lastInput = input.value.charAt(input.value.length - 1)


    if (e.target.classList.contains('styled')) {
        switch (value) {
            case '.':
                const isMultipleDot = input.value.match(/[.]/g)?.length === 1;
                if(isMultipleDot) return;
                if (lastInput !== '' && lastInput !== '-' && lastInput !== '+' && lastInput !== '*' && lastInput !== '.' && lastInput !== '/')
                    input.value += '.'
                break;
            case '0':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '0'
                break;
            case '1':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '1'
                break;
            case '2':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '2'
                break;
            case '3':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '3'
                break;
            case '4':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '4'
                break;
            case '5':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '5'
                break;
            case '6':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '6'
                break;
            case '7':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '7'
                break;
            case '8':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '8'
                break;
            case '9':
                if (lastInput !== '0' || input.value.includes('.'))
                    input.value += '9'
                break;
            case '＋':
                if (lastInput !== '' && lastInput !== '-' && lastInput !== '+' && lastInput !== '*' && lastInput !== '.' && lastInput !== '/')
                    input.value += '+'
                break;
            case '－':
                if (lastInput !== '' && lastInput !== '-' && lastInput !== '+' && lastInput !== '*' && lastInput !== '.' && lastInput !== '/')
                    input.value += '-'
                break;
            case '×':
                if (lastInput !== '' && lastInput !== '-' && lastInput !== '+' && lastInput !== '*' && lastInput !== '.' && lastInput !== '/')
                    input.value += '*'
                break;
            case '÷':
                if (lastInput !== '' && lastInput !== '-' && lastInput !== '+' && lastInput !== '*' && lastInput !== '.' && lastInput !== '/')
                    input.value += '/'
                break;
            case 'C':
                input.value = '';
                break;
            case 'CE':
                const newValue = input.value.split('');
                newValue.pop();
                input.value = newValue.join('');
                break;
                case 'Enter':
                    const answer = eval(input.value);
                    input.value = answer;
                    break;
        }
        input.focus();
    }   
})
input.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        let answer = eval(e.target.value);
        e.target.value = answer
        input.value = answer
    } else {
        e.preventDefault();
        e.target.value = '';
    }
});

input.addEventListener('change', (e) => {
    console.log(Object.is(parseInt(e.target.value), NaN));
    if(Object.is(parseInt(e.target.value), NaN)) {
        e.target.value = '';
    }
});