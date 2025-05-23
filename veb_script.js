// JavaScript kodları burada olacaq
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    // Modal functionality
    const registerBtn = document.getElementById('registerBtn');
    const abiturientBtn = document.getElementById('abiturientBtn');
    const studentBtn = document.getElementById('studentBtn');
    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const showRegisterFromLogin = document.getElementById('showRegisterFromLogin');
    const loginModalTitle = document.getElementById('loginModalTitle');

    // Show register modal
    registerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        registerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Show login modal for abiturient
    abiturientBtn.addEventListener('click', function (e) {
        e.preventDefault();
        loginModalTitle.textContent = 'Abituriyent kimi daxil ol';
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Show login modal for student
    studentBtn.addEventListener('click', function (e) {
        e.preventDefault();
        loginModalTitle.textContent = 'Tələbə kimi daxil ol';
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modals
    closeRegisterModal.addEventListener('click', function () {
        registerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    closeLoginModal.addEventListener('click', function () {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Click outside modal to close
    window.addEventListener('click', function (e) {
        if (e.target === registerModal) {
            registerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Switch from login to register modal
    showRegisterFromLogin.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.classList.remove('active');
        registerModal.classList.add('active');
    });

    // Form submissions
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Qeydiyyat uğurla tamamlandı!');
        registerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.reset();
    });

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const userType = loginModalTitle.textContent.includes('Abituriyent') ? 'Abituriyent' : 'Tələbə';
        alert(`${userType} hesabına uğurla daxil oldunuz!`);
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.reset();
        if (userType === 'Tələbə') {
            window.location.href = 'telebeler.html';
        } else if (userType === 'Abituriyent') {
            window.location.href = 'veb_html.html'; // varsa
        }
    });

    document.getElementById('newsletterForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Bülletenə uğurla abunə oldunuz!');
        this.reset();
    });

    // Animation on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.feature-card, .target-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    document.querySelectorAll('.feature-card, .target-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
});
