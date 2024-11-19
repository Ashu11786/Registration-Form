document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Retrieve form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const newsletter = document.querySelector('input[name="newsletter"]').checked;
    const offers = document.querySelector('input[name="offers"]').checked;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);
    const terms = document.querySelector('input[name="terms"]').checked;

    // Validation
    let errorMessage = '';
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email pattern

    if (!firstName || !lastName || !email || !password || !gender || !dob || !address) {
        errorMessage = 'Please fill in all required fields.';
    } else if (password.length <= 8) {
        errorMessage = 'Password must be greater than 8 characters.';
    } else if (!emailPattern.test(email)) {
        errorMessage = 'Please enter a valid email address.';
    } else if (!terms) {
        errorMessage = 'You must agree to the terms and conditions.';
    }

    // Display error message or process the form
    const errorElement = document.getElementById('error-message');
    if (errorMessage) {
        errorElement.style.display = 'block';
        errorElement.innerText = errorMessage;
    } else {
        errorElement.style.display = 'none';

        // Process form (e.g., send data to server)
        console.log('Form submitted successfully with the following details:');
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Gender:', gender);
        console.log('Date of Birth:', dob);
        console.log('Address:', address);
        console.log('Newsletter:', newsletter);
        console.log('Offers:', offers);
        console.log('Interests:', interests);
        console.log('Terms:', terms);

        // Optionally, reset the form
        document.getElementById('registrationForm').reset();

        // Provide feedback to the user
        alert('Thank you for registering! Your form has been submitted.');
    }
});
