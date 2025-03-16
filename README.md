### Overview

This project demonstrates form handling, validation, and data persistence using vanilla JavaScript. It consists of an interactive form for user input and a dynamically updating table to display stored information. User data remains saved across page reloads using localStorage.

### Components Breakdown

#### **HTML Structure**

##### **Head Section**
- Defines meta tags for character encoding and responsive design.
- Includes the title "User Data Form".
- Links to an external CSS file for styling.

##### **Body Section**
- A main container `<div>` encapsulating the interface.
- A header displaying the title.
- A user input form (`#userForm`) containing:
  - Input fields for first name, last name, and age.
  - Associated `<small>` elements for displaying validation messages.
  - A submit button for adding user data.
- A header for the stored user list.
- A table (`#usersTable`) that dynamically displays user data.
- A button (`#clearDataButton`) to remove all stored entries.

---

#### **CSS Styling**

The CSS ensures a visually appealing and responsive user experience:
- The layout is centered, with a well-structured form and table.
- Input fields feature smooth transitions and validation styles.
- Buttons use gradient backgrounds and hover effects for improved interaction.
- Error messages are distinctly styled for visibility.

---

#### **JavaScript Functionality**

##### **Event Listeners**
- Handles form submission by validating input and updating the table.
- Stores valid user data in localStorage for persistence.
- Allows clearing of all stored data via the "Clear All Data" button.

##### **Validation Logic**
- Ensures first name and last name are non-empty and do not contain numbers.
- Validates that age is a number between 18 and 100.
- Displays appropriate error messages when validation fails.

##### **Data Management**
- Saves user details in localStorage to retain data between sessions.
- Loads stored data on page load and populates the table dynamically.

### Features
- Real-time validation with user-friendly error handling.
- Interactive UI with smooth animations.
- Persistent data storage via localStorage.
- Clear all data functionality.

This project serves as an excellent example of form handling and validation in a web application using pure JavaScript.

