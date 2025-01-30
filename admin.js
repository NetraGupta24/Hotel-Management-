function login(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        loadData();
    } else {
        alert('Invalid credentials');
    }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function loadData() {
    // Mock data
    const customers = [
        { id: 1, name: "John Doe", email: "john@example.com", contact: "123-456-7890", roomNumber: 101 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", contact: "098-765-4321", roomNumber: 102 }
    ];

    const staff = [
        { id: 1, name: "Alice Johnson", email: "alice@hotel.com", contact: "111-222-3333", salary: 50000, post: "Manager" },
        { id: 2, name: "Bob Williams", email: "bob@hotel.com", contact: "444-555-6666", salary: 35000, post: "Receptionist" }
    ];

    const rooms = [
        { number: 101, type: "Single", available: false },
        { number: 102, type: "Double", available: false },
        { number: 103, type: "Suite", available: true },
        { number: 104, type: "Single", available: true }
    ];

    const customerTable = document.getElementById("customerTable");
    customers.forEach(function(customer) {
        const row = customerTable.insertRow(-1);
        row.insertCell(0).innerHTML = customer.id;
        row.insertCell(1).innerHTML = customer.name;
        row.insertCell(2).innerHTML = customer.email;
        row.insertCell(3).innerHTML = customer.contact;
        row.insertCell(4).innerHTML = customer.roomNumber;
    });

    const staffTable = document.getElementById("staffTable");
    staff.forEach(function(employee) {
        const row = staffTable.insertRow(-1);
        row.insertCell(0).innerHTML = employee.id;
        row.insertCell(1).innerHTML = employee.name;
        row.insertCell(2).innerHTML = employee.email;
        row.insertCell(3).innerHTML = employee.contact;
        row.insertCell(4).innerHTML = employee.salary;
        row.insertCell(5).innerHTML = employee.post;
    });

    const roomTable = document.getElementById("roomTable");
    rooms.forEach(function(room) {
        const row = roomTable.insertRow(-1);
        row.insertCell(0).innerHTML = room.number;
        row.insertCell(1).innerHTML = room.type;
        row.insertCell(2).innerHTML = room.available ? "Available" : "Occupied";
    });

    // Open the Customers tab by default
    document.getElementById("defaultOpen").click();
}
