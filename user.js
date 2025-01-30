function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('userDashboard').classList.remove('hidden');
        displayUserInfo(username);
    } else {
        alert('Please enter both username and password');
    }
}

function displayUserInfo(username) {
    const customerId = generateCustomerId();
    const bookingDate = generateBookingDate();
    const userInfo = document.getElementById('userInfo');
    userInfo.innerHTML = `Welcome, ${username}!<br>Customer ID: ${customerId}<br>Booking Date: ${bookingDate}`;
}

function generateCustomerId() {
    return 'CUST' + Math.floor(10000 + Math.random() * 90000);
}

function generateBookingDate() {
    const date = new Date();
    return date.toISOString().split('T')[0];
}

function webCheckIn() {
    const roomKey = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('keyNumber').innerText = roomKey;
    showElement('roomKey');
    hideElement('services');
    hideElement('checkOutMessage');
}

function showServices() {
    showElement('services');
    hideElement('roomKey');
    hideElement('checkOutMessage');
}

function webCheckOut() {
    showElement('checkOutMessage');
    hideElement('roomKey');
    hideElement('services');
}

function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
}

function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}
