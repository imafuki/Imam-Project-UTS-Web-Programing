function hitung() {
    let num1 = parseFloat(document.getElementById('angka1').value);
    let num2 = parseFloat(document.getElementById('angka2').value);
    let operasi = document.getElementById('operasi').value;
    let hasilBox = document.getElementById('hasilBox');
    
    if (isNaN(num1) || isNaN(num2)) {
        hasilBox.style.display = 'block';
        hasilBox.style.color = 'red';
        hasilBox.textContent = 'Masukkan kedua angka dengan benar!';
        return;
    }
    
    let hasil = 0;
    
    if (operasi === 'tambah') {
        hasil = num1 + num2;
    } else if (operasi === 'kurang') {
        hasil = num1 - num2;
    } else if (operasi === 'kali') {
        hasil = num1 * num2;
    } else if (operasi === 'bagi') {
        if (num2 === 0) {
            hasilBox.style.display = 'block';
            hasilBox.style.color = 'red';
            hasilBox.textContent = 'Tidak bisa dibagi nol!';
            return;
        }
        hasil = num1 / num2;
    }
    
    hasilBox.style.display = 'block';
    hasilBox.style.color = '#333';
    hasilBox.textContent = 'Hasil: ' + hasil;
}
