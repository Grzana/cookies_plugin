// Cookies Plugin

document.addEventListener("DOMContentLoaded", function () {

    let body = document.querySelector('body');
    let cookiesBox = document.querySelector('.popup-cookies');
    let btns = cookiesBox.querySelectorAll('button');

    let msInDay = 24 * 60 * 60 * 1000;                  // miliseconds per 1 day
    let currDate = new Date();                          // current time a user clicked the button
    let lastDate = localStorage.getItem('savedTime');   // last time the user saw the cookie box

    let convertTime = (anyDate) => {                    // converts date to time in miliseconds
        return anyDate.getTime();
    };

    let enableSite = () => {                            // hides cookies box & enables scrolling
        cookiesBox.classList.add('hide');
        body.classList.remove('stop-scrolling');
    }

    if (convertTime(currDate) - lastDate > msInDay) {   // over 24 hours ?
        cookiesBox.classList.add('active');
    } else {
        enableSite(); 
    };

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            
            localStorage.setItem('savedTime', convertTime(currDate)); // save the time of user decision
            cookiesBox.classList.remove('active');
            enableSite(); 

            if (btn.classList.contains('accept')) {
                localStorage.setItem('decision', 'accept');           // save user decision: accept
            } else {
                localStorage.setItem('decision', 'cancel');           // save user decision: cancel
            };
        });
    });
});
