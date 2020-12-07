/**
 * SCSS/CSS Files
 */
import $ from 'jquery'
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/app';


$(function() {
    const passSwitchInput = $('#password-switch');
    $(passSwitchInput).change(function() {
        $(".form-group-password").slideToggle("fast", "swing");
    })
});