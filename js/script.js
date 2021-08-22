//burger
let gamburgerBtn = document.querySelector('.header__gamburger-btn');
let sidebar = document.querySelector('.header__sidebar');
let sidebarCloseBtn = document.querySelector('.sidebar__close-btn');
let body = document.querySelector('body');



gamburgerBtn.addEventListener('click', ()=> {
    sidebar.classList.toggle('active_sidebar');
    body.classList.add('active_body');
});
sidebarCloseBtn.addEventListener('click', ()=> {
    sidebar.classList.remove('active_sidebar');
    body.classList.remove('active_body');
});
//burger

//intro__slider
$('.intro__slider').slick({
    slideToShow: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [{
        breakpoint: 1399,
        settings: {
            arrows: true,
        },
    }]
});
//intro__slider

//slider

$('.slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,

    centerMode: true,
    variableWidth: true,


    mobileFirst: true,

    responsive: [
        {
        breakpoint: 479,
        settings: {
            slidesToShow: 2,
            centerMode: false,
            variableWidth: false,
            }
        },
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 3,
            dots: true,
            arrows: true,
            centerMode: false,
            variableWidth: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                dots: true,
                arrows: true,
                centerMode: false,
                variableWidth: false,
            }
        },
    ]
});
//slider

//shares__tab 
let tab = document.querySelectorAll('.tabs__btn');
let news = document.querySelector('.shares__news');
let shares = document.querySelector('.shares__shares');


tab.forEach(function(item){
    item.addEventListener('click', function() {
        tab.forEach(function(item) {
            item.classList.remove('active__btn');
        });
        item.classList.add('active__btn');
    });
});

tab[0].addEventListener('click', function() {
    shares.classList.remove('active_slider');
    news.classList.add('active_slider');
});
tab[1].addEventListener('click', function() {
    news.classList.remove('active_slider');
    shares.classList.add('active_slider');
});


//benefits/about btn
let benefitsBtn = document.querySelector('.benefits__btn');
let aboutBtn = document.querySelector('.about__btn');
let benefitsItem = document.querySelectorAll('.benefits__item');
let aboutDesc = document.querySelectorAll('.about__desc');

benefitsBtn.addEventListener('click', function(){
    benefitsItem.forEach(function(e){
        e.classList.toggle('show_item');
    });
    benefitsBtn.style.display = "none";
});

aboutBtn.addEventListener('click', function(){
    aboutDesc.forEach(function(e){
        e.classList.toggle('show_item');
    });
    aboutBtn.style.display = "none";
});
//benefits/about btn