var stripeKey = 'pk_test_EdJlSPmqO0xEFAdt8HkGrdKb00l3XuP2ov';
var stripe = Stripe(stripeKey);
var elements = stripe.elements();
var cardNumber = elements.create('cardNumber');

cardNumber.mount('#card-number');


cardNumber.addEventListener('change', function (event) {
    var errors = document.getElementById('errors');

    if (event.error) {
        errors.textContent = event.error.message;
    } else {
        errors.textContent = '';
    }
});

var form = document.querySelector('#card-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    stripe
        .createToken(cardNumber)
        .then((result) => {
            if (result.error) {
                // Alertar al usuario que hubo un error
            } else {
                console.log(result.token.id);
            }
        });
});