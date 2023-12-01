function login() {
    var username = document.getElementById('username').value;

    if (username.trim() === '') {
        alert('Please enter a username.');
    } else {
        alert('Logado como: ' + username);
        // Redirecionar para TelaInicial.html
        window.location.href = 'TelaInicial.html';
    }
}