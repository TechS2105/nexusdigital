// Initialize Swiper for Hero Section
const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// Initialize Swiper for Blog Section
const blogSwiper = new Swiper('.blog-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// Initialize Swiper for brand logo carousel
const brandSwiper = new Swiper('.brand-swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});

// Initialize Swiper for testimonials
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.testimonials-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.testimonials-swiper .swiper-button-next',
        prevEl: '.testimonials-swiper .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Initialize Swiper for office culture
const officeCultureSwiper = new Swiper('.office-culture-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.office-culture-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.office-culture-swiper .swiper-button-next',
        prevEl: '.office-culture-swiper .swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Animation Functionality
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .service-card, .portfolio-item, .blog-card, .team-member, .contact-info, .contact-form, .stat-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('active');
        }
    });
};

// Add animation classes to elements
const addAnimationClasses = () => {
    // Services section
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    });

    // Portfolio section
    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        item.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    });

    // Blog section
    document.querySelectorAll('.blog-card').forEach(card => {
        card.classList.add('fade-in');
    });

    // Team section
    document.querySelectorAll('.team-member').forEach((member, index) => {
        member.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    });

    // Contact section
    document.querySelector('.contact-info').classList.add('slide-in-left');
    document.querySelector('.contact-form').classList.add('slide-in-right');

    // Engagement stats
    document.querySelectorAll('.stat-card').forEach(card => {
        card.classList.add('scale-in');
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    addAnimationClasses();
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
        navLinks.classList.remove('active');
    }
});

// Counter Animation for Stats
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 40);
};

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('h3');
            const target = parseInt(statValue.textContent);
            animateCounter(statValue, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe all stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Toggle theme
darkModeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// About Section Scroll Animation
const aboutSection = document.querySelector('.about-preview');
const aboutImage = document.querySelector('.about-image');
const aboutText = document.querySelector('.about-text');
const aboutStats = document.querySelector('.about-stats');
const engagementStats = document.querySelector('.engagement-stats');

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        if (aboutTop < triggerBottom) {
            aboutSection.classList.add('animate');
            aboutImage.classList.add('animate');
            aboutText.classList.add('animate');
            aboutStats.classList.add('animate');

            // Animate about stats numbers
            const aboutStatNumbers = aboutStats.querySelectorAll('.stat-number');
            aboutStatNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateValue(stat, 0, target, 2000);
            });
        }
    }

    if (engagementStats) {
        const engagementTop = engagementStats.getBoundingClientRect().top;
        if (engagementTop < triggerBottom) {
            engagementStats.classList.add('animate');

            // Animate engagement stats numbers
            const engagementStatNumbers = engagementStats.querySelectorAll('.stat-number');
            engagementStatNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateValue(stat, 0, target, 2000);
            });
        }
    }
}

// Initial check
checkScroll();

// Add scroll event listener
window.addEventListener('scroll', checkScroll);

// Mobile dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }
    });
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNavMenu.classList.toggle('active');
        });
    }

    // Toggle mobile dropdowns
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('active');
        });
    });

    // Mobile dark mode toggle
    if (mobileDarkModeToggle) {
        mobileDarkModeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Also update the main dark mode toggle if it exists
            const mainDarkModeToggle = document.getElementById('darkModeToggle');
            if (mainDarkModeToggle) {
                mainDarkModeToggle.classList.toggle('active', newTheme === 'dark');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileNavMenu.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && mobileNavMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
        }
    });

    // Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNavMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
        }
    });
}); 