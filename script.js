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

document.querySelectorAll('#buttonOnePopup .gridContainer img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        const message = this.getAttribute('data-message');
        const popupMessage = document.createElement('div');
        popupMessage.textContent = message;
        popupMessage.classList.add('popupMessage');
        document.body.appendChild(popupMessage);
        popupMessage.style.left = `${event.pageX}px`;
        popupMessage.style.top = `${event.pageY}px`;
        popupMessage.style.display = 'block';
    });

    img.addEventListener('mouseleave', function() {
        document.querySelector('.popupMessage').remove();
    });
});

document.getElementById('submitPasswordTwo').addEventListener('click', function() {
    const passwordTwo = document.getElementById('passwordInputTwo').value;
    if (passwordTwo === 'reversetherust') {
        document.getElementById('whiteboard').style.display = 'grid'; // Show the whiteboard grid
        document.querySelector('#buttonTwoPopup .passwordProtection').style.display = 'none'; // Hide the password input
    } else {
        alert('Incorrect password. Please try again.');
    }
});

document.querySelector('#buttonTwoPopup .closePopupButton').addEventListener('click', function() {
    document.getElementById('buttonTwoPopup').style.display = 'none';
    // Optionally reset the whiteboard and password input for the next opening
    document.getElementById('whiteboard').style.display = 'none';
    document.querySelector('#buttonTwoPopup .passwordProtection').style.display = 'block';
});

document.getElementById('buttonTwo').addEventListener('click', function() {
    document.getElementById('buttonTwoPopup').style.display = 'flex';
});
