document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    document.querySelector('.heading').classList.toggle('light-mode');
    document.querySelector('.heading').classList.toggle('dark-mode');

    document.getElementById('menu').classList.toggle('light-mode');
    document.getElementById('menu').classList.toggle('dark-mode');

    document.getElementById('info').classList.toggle('light-mode');
    document.getElementById('info').classList.toggle('dark-mode');

    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('light-mode');
        button.classList.toggle('dark-mode');
    });

    document.querySelectorAll('#menu li').forEach(li => {
        li.classList.toggle('light-mode');
        li.classList.toggle('dark-mode');
    });
});
