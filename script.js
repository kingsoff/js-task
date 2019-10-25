(function () {
    const start = document.querySelector('.start-btn');
    const stop = document.querySelector('.stop-btn');
    let evTimer = 0;
    function timerK() {
        let today = new Date().toLocaleString({ timeZone: 'Ukraine/Kiev' })
        document.getElementById("date").innerHTML = today
        evTimer = setTimeout(timerK, 1000)
    }

    function stopTimer() {
        clearTimeout(evTimer)
    }

    start.addEventListener('click', timerK)
    stop.addEventListener('click', stopTimer)
// track Active btn
    const header = document.getElementById("menu");
    const btns = header.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            const current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}())


/*function borderHandle(){
    document.querySelectorAll('button').forEach(function (element) {
        console.log(element.classList[0])
        if(element.classList[0] === 'start-btn'){
            start.classList.toggle('active');
        }
        else if(element.classList[0] === 'stop-btn') {
            stop.classList.toggle('active');
        }
        console.log(element)
    })
}*/
/*(function () {
    var timerId = 0;

    $('textarea').focus(function () {
        timerId = setInterval(function () {
            // interval function body
        }, 1000);
    });

    $('textarea').blur(function () {
        clearInterval(timerId);
    });

    start.addEventListener('click', (e)=>{
            if(e.currentTarget.className === 'start-btn'){
                start.classList.toggle('active');
            }
            else if(e.currentTarget.className !== 'start-btn'){
                start.classList.remove('active')
            }

        });
        stop.addEventListener('click', (e)=>{
            if(e.currentTarget.className === 'stop-btn'){
                stop.classList.toggle('active');
            }
            else stop.classList.remove('active')
        });
});*/
//stop.addEventListener('click', clearTimeout(stopTimer))
/*str.addEventListener('click', function todayIs()
    {

    })
    //setTimeout(todayIs, 1000)*/
