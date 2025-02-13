const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.querySelector('.hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

let timeLeft = 10;
let countdownElement = document.getElementById("countdown");
let lovePopup = document.getElementById("love-popup");
let closePopup = document.querySelector(".close-popup");

let countdownTimer = setInterval(() => {
    if (timeLeft > 0) {
        countdownElement.innerHTML = `A special surprise in ${timeLeft} seconds!`;
        timeLeft--;
    } else {
        clearInterval(countdownTimer);
        countdownElement.style.display = "none"; // Hide countdown text
        lovePopup.style.display = "block"; // Show the pop-up
    }
}, 1000);

// Close the pop-up when clicking the close button
closePopup.addEventListener("click", function () {
    lovePopup.style.display = "none";
});



const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Randomize position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";  // 3s to 5s
    heart.style.width = Math.random() * 20 + 10 + "px";  // 10px to 30px
    heart.style.height = heart.style.width;
    
    heartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 300ms
setInterval(createHeart, 300);


const contactHeartsContainer = document.querySelector('.floating-hearts');

function createContactHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // 4s to 7s
    heart.style.width = Math.random() * 20 + 10 + "px";
    heart.style.height = heart.style.width;
    
    contactHeartsContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Generate hearts every 500ms
setInterval(createContactHeart, 500);

document.addEventListener("DOMContentLoaded", function () {
    const popupCard = document.getElementById("popup-card");
    const proposalBtn = document.querySelector(".proposal-btn");
    const closeBtn = document.querySelector(".close-btn");

    proposalBtn.addEventListener("click", function () {
        popupCard.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        popupCard.style.display = "none";
    });

    // Close popup if clicked outside content
    window.addEventListener("click", function (event) {
        if (event.target === popupCard) {
            popupCard.style.display = "none";
        }
    });
});

