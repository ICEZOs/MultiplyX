let multiply = document.getElementById('number');
let runbutton = document.getElementById('multiplyx');
let runbutton2 = document.getElementById('exponent');
let output = document.getElementById('result');

function printmultiply() {
    let number = Number(multiply.value);
    let outputhtml = '';

    if (number <= 1) {
        output.innerHTML = 'ไม่สามารถหาสูตรคูณน้อยกว่า 1 ได้';
        return;
    }

    for (let i = 1; i <= 300; i++) {
        outputhtml += '<p>';
        outputhtml += number + ' x ' + i + ' = ' + (number * i);
        outputhtml += '</p>';
    }

    output.innerHTML = outputhtml;
}

function printexponent() {
    let number = Number(multiply.value);
    let outputhtml = '';

    for (let i = 0; i <= 300; i++) {
        outputhtml += '<p>';
        outputhtml += number + ' ^ ' + i + ' = ' + (number ** i);
        outputhtml += '</p>';
    }

    output.innerHTML = outputhtml;
}

runbutton.addEventListener('click', printmultiply);
runbutton2.addEventListener('click', printexponent);