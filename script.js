var typed = new Typed(".multiple-text" , {
    strings: ["Frontend Developer" , "Java Developer" ,"DSA Developer" , "MERN Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

document.addEventListener('DOMContentLoaded', function() {
    var resumeButton = document.getElementById('resume-button');
    var resumePopup = document.getElementById('resume-popup');
    var closeBtn = document.querySelector('.popup .close-btn');

    resumeButton.addEventListener('click', function() {
        resumePopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        resumePopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === resumePopup) {
            resumePopup.style.display = 'none';
        }
    });
});