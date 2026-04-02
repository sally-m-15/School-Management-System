const iconShowPassword = `<svg
             width="24" height="24"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.5033 1.49482C23.107 1.2789 22.6002 1.40704 22.3714 1.78102L19.8374 5.92433C18.1109 5.17196 16.3238 4.78727 14.5147 4.78727C9.65394 4.78727 4.95176 7.56621 1.15993 12.7904L1.1449 12.8109L1.13174 12.8287C1.00544 12.997 1.00221 13.195 1.13111 13.3614C3.92913 17.2309 7.22624 19.7652 10.718 20.8303L8.69933 24.1286C8.47049 24.5026 8.60628 24.9808 9.00258 25.1967L9.36138 25.3922C9.75768 25.6081 10.2644 25.48 10.4932 25.106L24.1653 2.75842C24.3942 2.38444 24.2584 1.90624 23.862 1.69031L23.5033 1.49482ZM18.7381 7.72109C17.333 7.14511 15.9142 6.86437 14.5147 6.86437C10.9829 6.86437 7.32681 8.65264 4.07977 12.4623C3.76806 12.8281 3.76806 13.3612 4.07977 13.727C6.51374 16.5828 9.17749 18.3032 11.8465 18.9858L13.2421 16.7045C11.6479 16.2311 10.3295 14.9105 10.3295 13.0967C10.3295 10.8025 12.2182 8.94248 14.5476 8.94248C15.6229 8.94248 16.6043 9.3388 17.3494 9.99116L18.7381 7.72109ZM16.1975 11.8739C15.8388 11.3561 15.2489 11.0196 14.5476 11.0196C13.382 11.0196 12.4286 11.9481 12.4286 13.0952C12.4286 13.8533 13.3019 14.7392 14.3989 14.8137L16.1975 11.8739Z"
                fill="#B4B4B4" />
              <path
                d="M15.2119 21.3841C19.8144 21.1321 24.2415 18.3877 27.8466 13.4335C27.9221 13.3297 27.9643 13.2224 27.9643 13.0947C27.9643 12.973 27.928 12.8714 27.8562 12.7724C26.4707 10.8653 24.9633 9.28496 23.3711 8.04752L22.2741 9.84073C23.1883 10.5737 24.0836 11.4461 24.9497 12.4623C25.2615 12.8281 25.2615 13.3612 24.9497 13.727C22.3379 16.7916 19.4614 18.5487 16.5977 19.1189L15.2119 21.3841Z"
                fill="#B4B4B4" /> </svg>`;
const iconHiddenPassword = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const password = document.getElementById('passwordInput');
const toggle_password = document.getElementById('toggle-password');
toggle_password.innerHTML = iconShowPassword;
toggle_password.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    toggle_password.innerHTML = iconHiddenPassword;
  } else {
    password.type = 'password';
    toggle_password.innerHTML = iconShowPassword;
  }
});




// ==================================

// read item error
const itemError = document.getElementById('error-login');

// password and username
const correctUsername = 'admin';
const correctPassword = '123456';
function login(e) {
  e.preventDefault();
  // read value input
  const textInput = document.getElementById('textInput').value;
  const passwordInput = document.getElementById('passwordInput').value;
  if (textInput === correctUsername && passwordInput === correctPassword) {
    window.location.href = './dashboard/index.html';
  } else {
    itemError.innerHTML = 'the username or password is not true';
  }
}
