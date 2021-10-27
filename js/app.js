/*****************content-overlay*****************/
$('#NavMenuBar').click(function () {
    SideMenuOpenClose();
});

$('#ContentOverlayID').click(function () {
    SideMenuOpenClose();
});

function SideMenuOpenClose() {
    let SideNavID = $('#navbarNav');
    let ContentOverlayID = $('#ContentOverlayID');
    if (SideNavID.hasClass('navbar-collapse')) {
        SideNavID.removeClass('navbar-collapse')
        SideNavID.addClass('show')
        ContentOverlayID.removeClass('ContentOverlayClose')
        ContentOverlayID.addClass('ContentOverlay')
    } else {
        SideNavID.removeClass('show')
        SideNavID.addClass('navbar-collapse')
        ContentOverlayID.removeClass('ContentOverlay')
        ContentOverlayID.addClass('ContentOverlayClose')
    }
}



/****************end*********************/

let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {
        gradient: ['#a445b2', '#fa4299']
    }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".Bootstrap .bar").circleProgress({
    value: 0.80
});
$(".JavaScript .bar").circleProgress({
    value: 0.55
});
$(".Photoshop .bar").circleProgress({
    value: 0.60
});

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 1270 || document.documentElement.scrollTop > 1270) {
        document.getElementById("skill-scroll").className = "slideUp";
    }
}
/*****************/

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example2'
})
var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
    bootstrap.ScrollSpy.getInstance(dataSpyEl)
        .refresh()
})
var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl) // Returns a Bootstrap scrollspy instance
var scrollSpyContentEl = document.getElementById('content')
var scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance(scrollSpyContentEl); // Returns a Bootstrap scrollspy instance

<!-- Google Analytic -->
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
<!-- End Google Analytics -->
