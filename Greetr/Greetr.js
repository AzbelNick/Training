/* 
   greetr is a library that helps us give greetings: formal and informal, when given a set of parameters such as first name, last name, and an optional language. 
   it should be reusable and could be implemented in any other application. greetr should have an easy to type sturcture and should support jQuery.
 
   first, im creating a new execution context for the entire library so i could expose only what i want on the global object. 
   i need access to the global variable which is window and the jQuery variable which is either the word jQuery or the dollar symbol
*/

;(function(global, $) { 
    
    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
        
    }  
    
    // hidden within the scope of the imediately invoked function expression and are never directly accessible
    var supportedLang = ['en', 'il']; 

    // informal greetings
    var greetings = {
        en: 'Hi',
        il: 'היי'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Hello',
        il: 'שלום'
    };

    // logger messsages
    var logMessages = {
        en: 'Logged in',
        il: 'מחובר.ת'
    };

    // prototype holds methods (to save memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // checks that the language selected is valid
        // references the externallty inaccessible 'supportedLangs' within the closure
        validate: function() {
            if (supportedLang.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        // retrieve messages from object by referring to proerties using the [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }

            else {
                msg = this.greeting()
            }
            
            if(console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // make chainable
            return this;
        },

        setLang: function(lang) {

            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing jQuerry selector';
            }

            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the document object model (DOM)
            $(selector).html(msg);

            // make chainable
            return this;
        }

    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) { 
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
        
    }
    
    // trick borrowed from jQuery so we dont have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;
      
    // exposing the greetr function to the global execution context by attaching greetr to the global object, also making use of the G$ call
    global.Greetr = global.G$ = Greetr;
  

// IIFE, that accepts and takes in a global object and a jQuery object
}(window, jQuery));