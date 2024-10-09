document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelector('.carousel-items');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    let index = 0;

    function moveCarousel() {
        index++;
        if (index >= carouselItems.children.length) {
            index = 0;
        }
        carouselItems.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    setInterval(moveCarousel, 1500); // Change slide every 2 seconds
});
