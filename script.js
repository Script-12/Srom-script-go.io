document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    // Здесь можно добавить код для отправки данных на сервер

    const responseMessage = document.getElementById('response-message');
    responseMessage.innerText = Спасибо, ${name}! Ваше сообщение отправлено.;
    responseMessage.style.display = 'block';

    event.target.reset();
});
