//button for our services menu on header
$('.service-btn').on('click', function(e) {
    e.preventDefault();
    $('.head_services').toggleClass('head_services_active');
    $('.service-btn').toggleClass('service-btn_active');
});
// button for openning enterring form
$('.enter-btn').on('click', function(e) {
    e.preventDefault();
    $('.container').toggleClass('container_inactive');
    $('.reg_enter').toggleClass('reg_enter_active');
    $('body').toggleClass('inactive_body');
});
// button for closing enterring form
$('.close-btn').on('click', function(e) {
    e.preventDefault();
    $('.container').toggleClass('container_inactive');
    $('.reg_enter').toggleClass('reg_enter_active');
    $('body').removeClass('inactive_body');
    $('.f-enter').css('display', 'grid');
    $('.f-reg').css('display', 'none');
    $('#pass-reg').val('');
    $('#log-reg').val('');
    $('#pass-enter').val('');
    $('#log-enter').val('');
});
// button for creating account
$('#create-btn').on('click', function(e) {
    e.preventDefault();
    $('.f-enter').css('display', 'none');
    $('.f-reg').css('display', 'grid');
});

// button for showing password
$('.show-pass').on('click', function(e) {
    e.preventDefault();
    $('.show-pass').toggleClass('show-pass_inactive');
    $('.hide-pass').toggleClass('hide-pass_active');
    $('#pass-reg').attr('type', 'text');
});
// button for hidden password
$('.hide-pass').on('click', function(e) {
    e.preventDefault();
    $('.show-pass').toggleClass('show-pass_inactive');
    $('.hide-pass').toggleClass('hide-pass_active');
    $('#pass-reg').attr('type', 'password');
});