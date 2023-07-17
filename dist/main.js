$(document).ready(function(){
    let $passwordInput = $('#password');
    let $confirmInput = $('#confirm');
    let $passwordError = $('#passwordError');
    let $confirmError = $('#confirmError');
    function validate() {
        let password = $passwordInput.val();
        let confirm = $confirmInput.val();
    
        if (password.length < 8) {
          $passwordError.text('Password must be at least 8 characters.');
          return false;
        }
    
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
          $passwordError.text('Password must include at least one uppercase letter, one lowercase letter, and one digit.');
          return false;
        }
    
        $passwordError.text('');
    
        if (password !== confirm) {
          $confirmError.text('Passwords do not match.');
          return false;
        }
    
        $confirmError.text('');
    
        return true;
      }
    
      $('#registrationForm').on('submit', function(event) {
        if (!validate()) {
          event.preventDefault();
        }
      });
      
    });