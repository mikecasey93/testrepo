function greeting() {
    document.getElementById('output').innerHTML = 'Hello World';
    return false;
}
document.getElementById("print").addEventListener('click', greeting);