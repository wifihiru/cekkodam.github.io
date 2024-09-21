const submit = document.getElementsByClassName('submit')[0];
const hasil = document.getElementsByClassName('hasil')[0];
const mainlagi = document.getElementsByClassName('main')[0];
const footer = document.getElementsByClassName('footer')[0];


submit.addEventListener('click', function(){
    
    const angkarandom = Math.ceil(Math.random()*10)

    let kodam = "";
    if (angkarandom === 1) {
        kodam = "harimau putih"
    }else if (angkarandom=== 2) {
        kodam = "ular naga"
    }else if (angkarandom=== 3) {
        kodam = "buaya putih"
    }else if (angkarandom=== 4) {
        kodam = "bhatara karang"
    }else if (angkarandom=== 5) {
        kodam = "Raja singa"
    }else if (angkarandom=== 6) {
        kodam = "Ratu kidul"
    }else if (angkarandom=== 7) {
        kodam = "Garuda ganas"
    }else if (angkarandom=== 8) {
        kodam = "Kera kocak"
    }else if (angkarandom=== 9) {
        kodam = "Harimau"
    }else if (angkarandom=== 10) {
        kodam = "Serigala"
    }

    hasil.innerHTML = 'Kodam kamu adalah ' + kodam;
    footer.classList.toggle('footer2');

    
})




mainlagi.addEventListener('click', function(){
    location.reload()
})

