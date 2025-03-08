
//* Filter cards based on category *//
function filterCards(category) {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let cardTitle = card.querySelector('.card-category').textContent.toLowerCase();
        if (cardTitle.includes(category.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
//function for validating email and password were entered correctly
function validateLogin(event) {
    event.preventDefault();  // Prevent form submission to handle validation first

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Clear any previous error messages
    document.getElementById('emailHelpId').innerHTML = '';

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        document.getElementById('emailHelpId').innerHTML = 'Please enter a valid email address.';
        return false;
    }

    if (password.trim() === '') {
        alert('Password cannot be empty.');
        return false;
    }

    alert('Login successful!'); 
    return true;
}

// Simulated 'userdata' table
const userdata = [
    { email: 'existinguser@example.com', password: 'password123' },
    { email: 'anotheruser@example.com', password: 'securepass456' }
];

// Function to check if email already exists in the "database"
function checkEmailExists(email) {
    return userdata.some(user => user.email === email);
}

// Function to handle the creation of an account
function createAccount() {
    const email = document.getElementById('createEmail').value;
    const password = document.getElementById('createPassword').value;

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        document.getElementById('createEmailHelpId').innerHTML = 'Please enter a valid email address.';
        return false;
    }

    if (!email || !password) {
        alert('Please fill in both email and password.');
        return;
    }

    // Check if the email is already taken
    if (checkEmailExists(email)) {
        alert('This email is already associated with an account. Please try a different email.');
        return;
    }

    userdata.push({ email: email, password: password });

    alert('Account successfully created!');

    document.getElementById('createAccountForm').reset();
}
//search function
const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');
const data = document.getElementById('shows')

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => item.includes(query));
    
    resultsList.innerHTML = ''; // Clear previous results
    
    filteredData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        resultsList.appendChild(listItem);
    });
});