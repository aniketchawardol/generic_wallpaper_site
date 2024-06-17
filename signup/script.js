document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-box').style.display = 'block';
    document.querySelector('.form-box').style.display = 'none';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-box').style.display = 'none';
    document.querySelector('.form-box').style.display = 'block';
});
