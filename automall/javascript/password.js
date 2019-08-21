        var pass = $('#password-show');
$('button.show-password').click(function() {
  pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
});