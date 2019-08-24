var stripeKey = Stripe( 'pk_test_TLCP7DvVeAUM1sPD42gG5kC600csFwUovO' )
var stripe = Stripe( stripeKey );
var elements = stripe.elements( );
var card = elements.create( 'card' );

card.mount( '#card-element' );

card.addEventListener( 'change', function ( event ) {
    var errors = document.getElementById( 'errors' );
    if ( event.error ) {
        errors.textContent = event.error.message;
    } else {
        errors.textContent = ''
    }
} )

var form = document.querySelector( '#card-form' );

form.addEventListener( 'submit', ( event ) => {
    event.preventDefault( );

    stripe
        .createToken( card )
        .then( result ) => {
            if ( result.error ) {
                //alertar al usuario que hubo un error
            }
        } else {
            consola.log( result.token );
        }
} )
