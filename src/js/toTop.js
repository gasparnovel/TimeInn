document.getElementById("toTop").innerHTML =
    "<a href='#' class='scroll-top'>";



window.onscroll = function () {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.a.scroll-top').classList.add('show');

    } else {
        document.querySelector('.a.scroll-top').classList.remove('show');
    }
}

document.querySelector('.a.scroll-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


$('a.scroll-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});