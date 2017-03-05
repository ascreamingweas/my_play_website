/**
 * This plugin checks the password on registration
 * and verifies that it matches with the requirements set for those fields.
 * It will take an 8 character password with any characters in it, but the longer
 * or more complex the password, the stronger it will reflect.
 * For example, aswdasdf is a weak password, but asdfgds! is a stronger password.
 */
define(["jquery"], function ($) {

    var fieldFilled = false;
    var $password = $('#password1');
    var $confirmPass = $('#password2');
    var $feedback = $('#passstrength');
    var $matchFeedback = $('#passmatch');

    $password.focusout(function(e) {
        var password = $(this).val();

        if (password !== '') {
            fieldFilled = true;
            $feedback.html(hintFor(password));
        }
    });

    $password.keyup(function(e) {
        if (fieldFilled) {
            var password = $(this).val();
            $feedback.html(hintFor(password));
        }
    });

    // Display password warning if passwords do not match
    $confirmPass.keyup(function(e) {
      var password = $password.val();
      var confirmPass = $(this).val();
      var message = '';

      // Check if passwords match
      if ((confirmPass !== '') && (password !== confirmPass)) {
        // Set our match string
        message = 'Passwords do not match.';
      }
      // clear match string
      $matchFeedback.html(message);
    });

    function hintFor(password) {
        var minLength = 8;
        var hint = '';

        var recommendations = [
            [/.{10,}/, 'more length'],
            [/[A-Z]/, 'capitals'],
            [/[a-z]/, 'lower case letters'],
            [/[0-9]/, 'numbers'],
            [/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/\\]/, 'symbols']
        ];

        if (password.length < minLength) {
            hint += 'Your password must be at least ' + minLength + ' characters.';
        } else {
            var missing = [];
            for (var i = 0; i < recommendations.length; i++) {
                var regex = recommendations[i][0];
                var text = recommendations[i][1];

                if (false == regex.test(password)) {
                    missing.push(text);
                }
            }

            if (missing.length > 0) {
                hint += 'You can use this password but it is weak. ' +
                    'You may add ' + listItems(missing) + ' to increase the strength of the password.';
            } else {
                hint = '';
            }
        }

        return hint;
    }

    function listItems(list) {
        if (list.length == 1) {
            return list[0];
        }

        var firstPart = list.slice(0, list.length - 1).join(', ');
        var lastPart = list[list.length - 1];
        return firstPart + ', or ' + lastPart;
    }

});
