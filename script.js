document.getElementById('submitPassword').addEventListener('click', function() {
    const password = document.getElementById('passwordInput').value;
    if (password === 'corrosionprocess') {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('errorPopup').style.display = 'none';
        // Optionally, reset the input field after successful entry
        document.getElementById('passwordInput').value = '';
    } else {
        alert('Incorrect password. Please try again.');
        // Highlight the input box or show an error message for a better user experience
        document.getElementById('passwordInput').style.boxShadow = '0 0 10px #ff073a, 0 0 20px #ff073a, 0 0 30px #ff073a';
        // Reset the box shadow after a short delay
        setTimeout(() => {
            document.getElementById('passwordInput').style.boxShadow = '0 0 5px #39ff14, 0 0 10px #39ff14';
        }, 1500);
    }
});

// Assuming you have an element with the ID 'closeInstructions' for closing the instructions popup
document.getElementById('closeInstructions').addEventListener('click', function() {
    // Hide the instructions popup
    document.getElementById('instructionsPopup').style.display = 'none';
});
