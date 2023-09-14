'use strict';

/*


// Show the custom popup
const modal = document.getElementById("myModal");
// modal.style.display = "block";



// Close the popup after 2 seconds
setTimeout(function() {
    modal.style.display = "none";
}, 3000);



// Close the popup when the close button is clicked
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});


*/


let sec;

let obj = {
    'youtube.com': 0,
    'translate.google.com': 0,
    'google.com': 0
};

// data
const web_arr = ['youtube.com', 'translate.google.com', 'google.com'];
const butt1 = document.getElementById('btn--1');


const colorObj = {
    'youtube.com': 'y',
    'translate.google.com': 'g',
    'google.com': 't',
};


const colorFunc = function (text) {
    document.querySelector('.txt').classList.remove('y', 'g', 't');

    if (true) {
        document.querySelector('.txt').classList.add(colorObj[text]);
        return text;
    }
};

butt1.addEventListener('click', function () {
    // random number 
    let fir = Math.trunc(Math.random() * 3);

    do {
        fir = Math.trunc(Math.random() * 3);
    } while (fir === sec);
    sec = fir;

    const cur = web_arr[fir];
    obj[cur]++;

    // logic
    const url_a = 'https://' + web_arr[fir];
    // window.open(url_a, '_blanck')


    document.querySelector('.href--class').href = url_a;
    document.querySelector('.txt').textContent = colorFunc(cur);
    console.log(`${fir} - ${url_a}`);
});


const butt2 = document.getElementById('btn--2');
butt2.addEventListener('click', function () {
    console.clear();

    let sum = 0;

    for (const i in obj) {
        sum += obj[i];
    }

    // for(let i of web_arr){
    //     console.log(`${i} - ${Math.round(obj[i]/sum*100)}%`);
    // }
    let s_of_p = 0;
    Object.entries(obj).forEach(([key, value]) => {
        const percentage = (value / sum * 100);
        s_of_p += percentage;
        console.log(`${key} - ${percentage.toFixed()}%`);
    });

    console.log(`Total - ${Math.round(s_of_p)}%`);

});




// template

// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww_CODE_TITLE
CODE_HERE


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/









