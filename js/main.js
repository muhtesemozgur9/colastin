$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        nav: false
    });
});



    $(document).ready(function(){
    $('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        navText: [
            '<span class="owl-nav-prev">&lt;</span>',
            '<span class="owl-nav-next">&gt;</span>'
        ]
    });
});

// Mobile menu toggle logic
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.mobile-menu-close');
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});
