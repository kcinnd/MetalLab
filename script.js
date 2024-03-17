document.getElementById('submitPassword').addEventListener('click', function() {
    const password = document.getElementById('passwordInput').value;
    if (password === 'corrosionprocess') {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('errorPopup').style.display = 'none';
        // Optionally, reset the input field after successful entry
        document.getElementById('passwordInput').value = '';
    } else {
        alert('Incorrect password. Please try again.');
        document.getElementById('passwordInput').style.boxShadow = '0 0 10px #ff073a, 0 0 20px #ff073a, 0 0 30px #ff073a';
        setTimeout(() => {
            document.getElementById('passwordInput').style.boxShadow = '0 0 5px #39ff14, 0 0 10px #39ff14';
        }, 1500);
    }
});

document.getElementById('instructionsButton').addEventListener('click', function() {
    document.getElementById('instructionsPopup').style.display = 'block';
});

document.querySelector('.closeButton').addEventListener('click', function() {
    document.getElementById('instructionsPopup').style.display = 'none';
});

document.getElementById('buttonOne').addEventListener('click', function() {
    document.getElementById('buttonOnePopup').style.display = 'flex'; // Show the Button One popup
});

document.querySelector('#buttonOnePopup .closePopupButton').addEventListener('click', function() {
    document.getElementById('buttonOnePopup').style.display = 'none'; // Hide the Button One popup
});

document.querySelectorAll('#buttonOnePopup .gridContainer img').forEach(img => {
    img.addEventListener('mouseenter', function(event) {
        const message = this.getAttribute('data-message');
        const popupMessage = document.createElement('div');
        popupMessage.textContent = message;
        popupMessage.classList.add('popupMessage');
        document.body.appendChild(popupMessage);

        // Positioning the hover message near the cursor
        popupMessage.style.left = `${event.clientX + 10}px`; // Slightly to the right of the cursor
        popupMessage.style.top = `${event.clientY + 10}px`; // Slightly below the cursor
        popupMessage.style.position = 'absolute';
        popupMessage.style.display = 'block';
    });

    img.addEventListener('mouseleave', function() {
        const hoverMessages = document.querySelectorAll('.popupMessage');
        hoverMessages.forEach(msg => msg.remove()); // Remove all hover messages
    });
});

document.getElementById('buttonOne').addEventListener('click', function() {
    document.getElementById('buttonOnePopup').style.display = 'flex'; // Show the Button One popup
});

document.querySelector('#buttonOnePopup .closePopupButton').addEventListener('click', function() {
    document.getElementById('buttonOnePopup').style.display = 'none'; // Hide the Button One popup
});

// New code for hover messages on images in buttonOnePopup
document.querySelectorAll('#buttonOnePopup .gridContainer img').forEach(img => {
    img.addEventListener('mouseenter', function(event) {
        const message = this.getAttribute('data-message');
        const popupMessage = document.createElement('div');
        popupMessage.textContent = message;
        popupMessage.classList.add('popupMessage');
        document.body.appendChild(popupMessage);

        // Position the hover message near the cursor
        popupMessage.style.left = `${event.clientX + 10}px`; // Slightly to the right of the cursor
        popupMessage.style.top = `${event.clientY + 10}px`; // Slightly below the cursor
        popupMessage.style.position = 'absolute';
        popupMessage.style.display = 'block';
    });

    img.addEventListener('mouseleave', function() {
        // Remove all hover messages to prevent duplicates
        const hoverMessages = document.querySelectorAll('.popupMessage');
        hoverMessages.forEach(msg => msg.remove());
    });
});

document.getElementById('buttonTwo').addEventListener('click', function() {
    document.getElementById('buttonTwoPopup').style.display = 'flex'; // Show Button Two Popup
    document.querySelector('#buttonTwoPopup .passwordProtection').style.display = 'flex'; // Ensure password input is visible
    document.querySelector('#buttonTwoPopup .gridContainer.whiteboard').style.display = 'none'; // Ensure whiteboard is hidden
});

document.querySelector('#buttonTwoPopup .closePopupButton').addEventListener('click', function() {
    document.getElementById('buttonTwoPopup').style.display = 'none'; // Close Button Two Popup
});

document.getElementById('submitPasswordTwo').addEventListener('click', function() {
    const password = document.getElementById('passwordInputTwo').value;
    if (password === 'reversetherust') {
        document.querySelector('#buttonTwoPopup .passwordProtection').style.display = 'none'; // Hide password input
        document.querySelector('#buttonTwoPopup .gridContainer.whiteboard').style.display = 'grid'; // Show whiteboard content
    } else {
        alert('Incorrect password. Please try again.');
    }
});

document.getElementById('buttonThree').addEventListener('click', function() {
    document.getElementById('buttonThreePopup').style.display = 'flex'; // Show Button Three Popup
});

document.querySelector('#buttonThreePopup .closePopupButton').addEventListener('click', function() {
    document.getElementById('buttonThreePopup').style.display = 'none'; // Hide Button Three Popup
});

document.getElementById('submitPasswordThree').addEventListener('click', function() {
    const passwordThree = document.getElementById('passwordInputThree').value;
    if (passwordThree === 'tarnishedsteel') {
        document.querySelector('#buttonThreePopup .passwordProtection').style.display = 'none'; // Hide password input
        document.getElementById('imageContainerThree').style.display = 'flex'; // Show image container
    } else {
        alert('Incorrect password. Please try again.');
    }
});
