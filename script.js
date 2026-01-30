/* Ini adalah file untuk mengatur logika tombol dan login */
function login() {
    const role = document.getElementById('role').value;
    const mfa = document.getElementById('mfaCode').value;

    if (mfa === "123456") {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboardPage').style.display = 'block';
        alert('Selamat datang, ' + role + '!');
    } else {
        alert('Kode MFA salah! Gunakan: 123456');
    }
}
