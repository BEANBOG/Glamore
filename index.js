document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    function openMenu(){
        sideMenu.classList.add('open');
        sideMenu.setAttribute('aria-hidden', 'false');
    }

    function closeMenu(){
        sideMenu.classList.remove('open');
        sideMenu.setAttribute('aria-hidden', 'true');
    }

    if(hamburger){
        hamburger.addEventListener('click', openMenu);
    }
    if(closeBtn){
        closeBtn.addEventListener('click', closeMenu);
    }

    // Close when any side menu link or contact button is clicked
    const sideLinks = document.querySelectorAll('.side-menu a, .side-menu .contact-btn');
    sideLinks.forEach(link => link.addEventListener('click', closeMenu));
});
