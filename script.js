const button = document.getElementById('button')
const nama = document.getElementById('nama')
const nim = document.getElementById('nim')
const handphone = document.getElementById('handphone')
const email = document.getElementById('email')
const alamat = document.getElementById('alamat')

button.addEventListener('click', (e) => {
    if (nama.value === '' || nama.value == null) {
        nama.style.border = '2px solid red';
        return false
    } else {
        nama.style.border = '1px solid black';
    };

    if (nim.value === '' || nim.value == null) {
        nim.style.border = '2px solid red';
        return false
    } else {
        handphone.style.border = '1px solid black';
    };

    if (handphone.value === '' || handphone.value == null) {
        handphone.style.border = '2px solid red';
        return false
    } else {
        handphone.style.border = '1px solid black';
    };

    if (email.value === '' || email.value == null) {
        email.style.border = '2px solid red';
        return false
    } else {
        email.style.border = '1px solid black';
    };

    if (alamat.value === '' || alamat.value == null) {
        alamat.style.border = '2px solid red';
        return false
    } else {
        alamat.style.border = '1px solid black';
    };
}
)