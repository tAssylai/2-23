document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const form = event.target;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        window.location.href = 'verificated.html'; // Перенаправляем на страницу Google
    } else {
        alert('Пожалуйста, заполните все обязательные поля.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const playSoundButton = document.getElementById('play-sound');
    const checkmarkSound = document.getElementById('checkmark-sound');

    playSoundButton.addEventListener('click', function() {
        document.getElementById('checkmark').addEventListener('animationend', function() {
            checkmarkSound.play();
        });
    });
});