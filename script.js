document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function showSlide(index) {
        const newPosition = -index * 100 + "%";
        slider.style.transform = "translateX(" + newPosition + ")";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex =
            (currentIndex - 1 + slider.children.length) %
            slider.children.length;
        showSlide(currentIndex);
    }

    // Auto slide change (uncomment the line below to enable auto-slide)
    // setInterval(nextSlide, 5000);

    document
        .querySelector(".slider-container")
        .addEventListener("mouseenter", function () {
            // Stop auto slide change on mouse enter
            clearInterval(autoSlide);
        });

    document
        .querySelector(".slider-container")
        .addEventListener("mouseleave", function () {
            // Resume auto slide change on mouse leave
            autoSlide = setInterval(nextSlide, 5000);
        });

    document
        .querySelector(".slider-container")
        .addEventListener("touchstart", handleTouchStart, false);
    document
        .querySelector(".slider-container")
        .addEventListener("touchmove", handleTouchMove, false);

    let x1 = null;

    function handleTouchStart(event) {
        x1 = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        if (!x1) return;
        let x2 = event.touches[0].clientX;
        let xDiff = x1 - x2;

        if (xDiff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }

        x1 = null;
    }
});
