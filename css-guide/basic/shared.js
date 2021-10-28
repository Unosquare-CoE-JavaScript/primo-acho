var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctabutton = document.querySelector(".main-nav__item--cta");

for(var i = 0;i< selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click',  function () {
        //modal.style.display = 'block';
       // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10)
    })
}

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove('open');
    closeModal();
});
if(modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}


function closeModal() {
    if(modal) {
        backdrop.classList.remove('open');
    }
    modal.classList.remove('open');
    setTimeout(function() {
        backdrop.style.display = 'none';
    }, 200)
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10)
})

ctabutton.addEventListener('animationstart',function(event){
    console.log('animation stared')
})