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

document.querySelectorAll('.gridContainer img').forEach(item => {
    item.addEventListener('mouseover', (event) => {
        const message = event.target.getAttribute('data-message');
        const hoverMessage = document.createElement('div');
        hoverMessage.classList.add('hoverMessage');
        hoverMessage.textContent = message;
        document.body.appendChild(hoverMessage);
        hoverMessage.style.display = 'block';
        hoverMessage.style.left = `${event.pageX + 10}px`;
        hoverMessage.style.top = `${event.pageY + 10}px`;
    });

    item.addEventListener('mouseout', () => {
        document.querySelector('.hoverMessage').remove();
    });
});

document.getElementById('buttonOne').addEventListener('click', function() {
    var popup = document.getElementById('buttonOnePopup');
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }
});

document.querySelector('.closePopupButton').addEventListener('click', function() {
    document.getElementById('buttonOnePopup').style.display = 'none';
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
