function date() {
    document.getElementById('display-date').innerHTML = new Date;
}

function convertNumber() {
    const USER_NUMBER = document.getElementById('user-number').value;
    document.getElementById('display-string').innerHTML = USER_NUMBER;
}

function convertString() {
    const USER_STRING = document.getElementById('user-string').value;
    document.getElementById('display-number').innerHTML = parseInt(USER_STRING);
}

function add() {
    let user_add1 = parseInt(document.getElementById('user-add1').value);
    let user_add2 = parseInt(document.getElementById('user-add2').value);

    if (isNaN(user_add1)) {
        user_add1 = 0;
    }

    if (isNaN(user_add2)) {
        user_add2 = 0;
    }

    document.getElementById('display-add').innerHTML = user_add1 + user_add2;
}

function checkType() {
    const DISPLAY_TYPE = document.getElementById('display-type');
    const USER_TYPE = document.getElementById('user-type').value;

    if (USER_TYPE.length === 0) {
        DISPLAY_TYPE.innerHTML = 'Null';
    } else if (USER_TYPE === 'true' || USER_TYPE === 'false') {
        DISPLAY_TYPE.innerHTML = 'Boolean';
    } else if (USER_TYPE.length === USER_TYPE.replace(/\D/g, '').length) {
        DISPLAY_TYPE.innerHTML = 'Number';
    } else {
        DISPLAY_TYPE.innerHTML = 'String';
    }
}

function checkTruth() {
    const DISPLAY_TRUTH = document.getElementById('display-truth');
    const USER_TRUTH1 = document.getElementById('user-truth1').value;
    const USER_TRUTH2 = document.getElementById('user-truth2').value;

    if (USER_TRUTH1 === 'unselected' || USER_TRUTH2 === 'unselected') {
        DISPLAY_TRUTH.innerHTML = '';
        window.alert('Please select both!');
    } else if (USER_TRUTH1 === 'true' && USER_TRUTH2 === 'true') {
        DISPLAY_TRUTH.innerHTML = 'True';
    } else if (USER_TRUTH1 === 'false' && USER_TRUTH2 === 'false') {
        DISPLAY_TRUTH.innerHTML = 'False';
    } else {
        DISPLAY_TRUTH.innerHTML = 'Half True';
    }
}