import "./styles.css"

let slideIndex = 0; // Initial index
const nextButton = document.querySelector(".next-button");
const backButton = document.querySelector(".back-button");
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".nav-dot");

function showSlide(num) {
    if (num >= slides.length) { // If index number exceeds slides length, wrap to beginning of slides
        slideIndex = 0;
    }

    else if (num < 0) { // If index gets negative, wraps to end of slides
        slideIndex = slides.length - 1;
    }

    else { // Updates slideIndex normally
        slideIndex = num;
    }

    slides.forEach(slide => {
        slide.style.display = "none"; // Sets all slides to be invisible
    })

    slides[slideIndex].style.display = "block"; // Sets first index of images to visible block display

    dots.forEach(dot => { // Removes active class from all dots
        dot.classList.remove("active");
    })
    dots[slideIndex].classList.add("active"); // Sets active class based on current slide index
}

nextButton.addEventListener("click", () => { // Moves forward in slides length
    showSlide(slideIndex + 1);
})

backButton.addEventListener("click", () => { // Moves back in slides length
    showSlide(slideIndex - 1);
})

dots.forEach((dot, i) => { // Links to each slide and shows it, using slideIndex
    dot.addEventListener("click", () => {
        showSlide(i)
    })
})

showSlide(slideIndex); // Init