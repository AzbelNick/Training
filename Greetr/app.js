// gets a new object (the architecture allows me to not have to use the 'new' keyword here)
var g = G$('nick', 'azbel');

// using chainable methods
g.greet().setLang('en').greet(true).log();

//using the object on the click of the login button
$('#login').click(function() {
    
    // create a new 'Greetr' object (pretending we know the name from the login)
    var loginGrtr = G$('nick', 'azbel');

    // hide the login on the screen
    $('#logindiv').hide();

    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, logging the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});