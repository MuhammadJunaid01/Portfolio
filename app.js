const GetStart = () => {
    const parentDiv = document.getElementById('modal')
    parentDiv.style.display = 'block'
}

const submit = () => {
    const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
    const emailValue = exampleInputEmail1.value;
    const exampleInputPassword1 = document.getElementById('exampleInputPassword1');
    const paswordValue = exampleInputPassword1.value;
    const failorMesaage = document.getElementById('failor-message');
    if (emailValue === 'juniad@gmail.com' || paswordValue === '12345') {
        const successAlert = document.getElementById('success-message');
        successAlert.style.display = 'block'
        document.getElementById('close').addEventListener('click', function () {
            console.log('clicked')
            const successAlert = document.getElementById('success-message');
            successAlert.style.display = 'none'


        })
    } else {
        failorMesaage.style.display = 'block';
        document.getElementById('close-fail').addEventListener('click', function () {
            console.log('clicked')
            failorMesaage.style.display = 'none';
        })
    }
    setTimeout(wait, 1000)

}
const wait = () => {
    const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
    const emailValue = exampleInputEmail1.value;
    const exampleInputPassword1 = document.getElementById('exampleInputPassword1');
    const paswordValue = exampleInputPassword1.value;
    if (emailValue === 'juniad@gmail.com' || paswordValue === '12345') {

        const parentDiv = document.getElementById('modal')
        parentDiv.style.display = 'none';
        console.log('millll')
        exampleInputEmail1.value = '';
        exampleInputPassword1.value = '';

    }
}
const Education = () => {
    const exper = document.getElementById('exp');
    exper.style.display = 'none';
    const educa = document.getElementById('educa');
    educa.style.display = 'block';
}
const Experience = () => {
    const exper = document.getElementById('exp');
    exper.style.display = 'block';
    const educa = document.getElementById('educa');
    educa.style.display = 'none';
};
const project = () => {
    window.open("https://assignment-5-macbook-pro-junaid.netlify.app/", "_blank");
}

const project2 = () => {
    window.open("https://trusting-jackson-c8117d.netlify.app/", "_blank");
}
const project3 = () => {
    window.open("https://junaid01-rest-app.netlify.app/", "_blank");
}
const hireMe = () => {
    // setTimeout(Hire, 10000)
    const hireDiv = document.getElementById('hire-me');
    hireDiv.style.display = 'block';
    document.getElementById('hireClose-icon').addEventListener('click', function () {
        hireDiv.style.display = 'none';
    })

}

const facebook = () => {
    window.open("https://www.facebook.com/profile.php?id=100009224856897", "_blank");
}
const sendMessage = () => {
    const inpEmail = document.getElementById('inp-email');
    const inpEmailValue = inpEmail.value;
    const Name = document.getElementById('inp-name');
    const NameValue = Name.value
    const Numbers = document.getElementById('inp-number');
    const numberValue = Numbers.value;
    const service = document.getElementById('inp-service');
    const serviceValue = service.value;
    const textarea = document.getElementById('message');
    const textareavalue = textarea.value
    if (!inpEmailValue == true || !NameValue == true || !numberValue == true || !serviceValue == true || !textareavalue == true) {
        const failorTextMes = document.getElementById('failor-textMesa');
        failorTextMes.style.display = 'block';
        document.getElementById('close-failTextrea').addEventListener('click', function () {
            failorTextMes.style.display = 'none';
        })
    } else {
        alert('you are success')
    }


};


document.getElementById('inp-service').addEventListener('click', function () {
    const selectService = document.getElementById('accordionFlushExample');
    selectService.style.display = 'block'

})
const service = () => {
    const input = document.getElementById('inp-service');
    const buton = document.getElementById('aco-but');
    const accotext = buton.innerText;
    input.value = accotext;
    const display = document.getElementById('accordionFlushExample');
    display.style.display = 'none'


}
const service2 = () => {
    const input = document.getElementById('inp-service');
    const buton = document.getElementById('aco-but2');
    const accotext = buton.innerText;
    input.value = accotext;
    const display = document.getElementById('accordionFlushExample');
    display.style.display = 'none'

}
const service3 = () => {
    const input = document.getElementById('inp-service');
    const buton = document.getElementById('aco-but3');
    const accotext = buton.innerText;
    input.value = accotext;
    const display = document.getElementById('accordionFlushExample');
    display.style.display = 'none'


}
