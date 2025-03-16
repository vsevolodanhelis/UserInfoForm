// When the DOM content is loaded, execute this function
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    const userForm = document.getElementById('userForm');
    const usersTableBody = document.querySelector('#usersTable tbody');
    const clearDataButton = document.getElementById('clearDataButton');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const ageInput = document.getElementById('age');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const ageError = document.getElementById('ageError');

    // Hide the "Clear All Data" button initially
    clearDataButton.style.display = 'none';

    // Event listener for form submission
    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form input values
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const age = parseInt(ageInput.value.trim());

        // Validate form inputs
        if (validateForm(firstName, lastName, age)) {
            const userData = { firstName, lastName, age };

            // Add user data to the table
            addUserToTable(userData);
            // Store user data in local storage
            storeUserData(userData);
            // Clear form inputs
            clearForm();

            // Show the "Clear All Data" button if at least one user's data is added
            if (usersTableBody.children.length === 1) {
                clearDataButton.style.display = 'block';
            }
        }
    });

    // Event listener for clearing all data
    clearDataButton.addEventListener('click', function() {
        if (confirm("Are you sure you want to clear all data?")) {
            // Clear all data from local storage and table
            clearAllData();
            // Hide the "Clear All Data" button after clearing all data
            clearDataButton.style.display = 'none';
        }
    });

    // Function to validate form inputs
    function validateForm(firstName, lastName, age) {
        let isValid = true;

        // Clear any previous error messages
        firstNameError.textContent = '';
        lastNameError.textContent = '';
        ageError.textContent = '';

        // Check if first name field is empty or contains numerals
        if (firstName === '') {
            firstNameError.textContent = 'First name is required.';
            isValid = false;
        } else if (/\d/.test(firstName)) {
            firstNameError.textContent = 'You can\'t use numerals in this field.';
            isValid = false;
        }

        // Check if last name field is empty or contains numerals
        if (lastName === '') {
            lastNameError.textContent = 'Last name is required.';
            isValid = false;
        } else if (/\d/.test(lastName)) {
            lastNameError.textContent = 'You can\'t use numerals in this field.';
            isValid = false;
        }

        // Check if age is not a number or less than 18, or greater than 100
        if (isNaN(age) || age < 18) {
            ageError.textContent = 'Valid age (18 or older) is required.';
            isValid = false;
        } else if (age > 100) { 
            ageError.textContent = 'No way, you can\'t be this old! Please provide me with your real age.';
            isValid = false;
        } else if (/\D/.test(ageInput.value)) {
            ageError.textContent = 'You can\'t use characters in this field.';
            isValid = false;
        }

        return isValid;
    }

    // Function to add user data to the table
    function addUserToTable(userData) {
        const row = document.createElement('tr');

        // Create table cells for each user data field
        const cellFirstName = document.createElement('td');
        cellFirstName.textContent = userData.firstName;
        row.appendChild(cellFirstName);

        const cellLastName = document.createElement('td');
        cellLastName.textContent = userData.lastName;
        row.appendChild(cellLastName);

        const cellAge = document.createElement('td');
        cellAge.textContent = userData.age;
        row.appendChild(cellAge);

        // Append the row to the table body
        usersTableBody.appendChild(row);
    }

    // Function to store user data in local storage
    function storeUserData(userData) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Function to clear all data from local storage and table
    function clearAllData() {
        localStorage.removeItem('users');
        while (usersTableBody.firstChild) {
            usersTableBody.removeChild(usersTableBody.firstChild);
        }
    }

    // Function to load previously stored users from local storage
    function loadStoredUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(user => addUserToTable(user));
    }

    // Function to clear form inputs
    function clearForm() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        ageInput.value = '';
    }

    // Load previously stored users when the page is loaded
    loadStoredUsers();
});
