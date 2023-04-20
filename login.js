console.clear();
document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log("Submit button clicked");
    // get input value by using .value;
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;

    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;

    //console.log(email, password);

    if (email === 'hasib@gmail.com' && password === '123hasib') {
        location.href = 'http://127.0.0.1:5500/bank.html';
    }
    else {
        console.log("Invalid User");
    }
});