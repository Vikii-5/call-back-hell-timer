//fetching the timer div to display the timer by getElementById
let timer = document.getElementById('timer');

//defining the callback hell to run the timer
let countdown = () => {
    setTimeout(() => {
        timer.innerHTML = '10';
        setTimeout(() => {
            timer.innerHTML = '9';
            setTimeout(() => {
                timer.innerHTML = '8';
                setTimeout(() => {
                    timer.innerHTML = '7';
                    setTimeout(() => {
                        timer.innerHTML = '6';
                        setTimeout(() => {
                            timer.innerHTML = '5';
                            setTimeout(() => {
                                timer.innerHTML = '4';
                                setTimeout(() => {
                                    timer.innerHTML = '3';
                                    setTimeout(() => {
                                        timer.innerHTML = '2';
                                        setTimeout(() => {
                                            timer.innerHTML = '1';
                                            setTimeout(() => {
                                                timer.innerHTML = 'Happy Independence Day';
                                                timer.style.color = '#ff9a2f';
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000);
    }, 1000)
}

countdown();