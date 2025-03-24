// const images = [
//     "glass1.png",
//     "glass2.png",
//     "glass3.png",
//     "glass4.png",
//     "glass5.png"
// ];

// let index = 0;
// const glassesImage = document.getElementById("glassesImage");

// function changeImage() {
//     glassesImage.style.opacity = 0; // Fade out effect
//     setTimeout(() => {
//         glassesImage.src = images[index]; 
//         glassesImage.style.opacity = 1; // Fade in effect
//         index = (index + 1) % images.length;
//     }, 500);
// }

// setInterval(changeImage, 2000);




// document.addEventListener("DOMContentLoaded"), function () {
//     const carousel = document.querySelector('.carousel');
//     const slides = Array.from(document.querySelectorAll('.slide')); // Convert NodeList to Array
//     const prev = document.querySelector('.prev');
//     const next = document.querySelector('.next');

//     let index = 0;

//     function showSlide(newIndex) {
//         if (newIndex >= slides.length) {
//             index = 0;
//         } else if (newIndex < 0) {
//             index = slides.length - 1;
//         } else {
//             index = newIndex;
//         }
//         carousel.style.transform = `translateX(-${index * 100}%)`;
//     }

//     // Auto-slide every 4 seconds
//     setInterval(() => {
//         showSlide(index + 1);
//     }, 4000);

//     prev.addEventListener('click', () => {
//         showSlide(index - 1);
//     });

//     next.addEventListener('click', () => {
//         showSlide(index + 1);
//     });
// };


let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    document.querySelector('.carousel-inner').style.transform = 
        `translateX(-${currentIndex * 100}%)`;
}
