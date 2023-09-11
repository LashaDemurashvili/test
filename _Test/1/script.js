'use strict'


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

let sec;

document.body.addEventListener('click', function(){
    // data
    const web_arr = ['youtube.com', 'translate.ge', 'google.com']
    
    // random number 
    let fir = Math.trunc(Math.random() * 3)

    do{
        fir = Math.trunc(Math.random() * 3)
    } while ( fir === sec)
    sec = fir;

    // logic
    const url_a = 'https://' + web_arr[fir]
    // window.open(url_a, '_blanck')

    document.querySelector('.txt').textContent = `${url_a}`
    console.log(`${fir} - ${url_a}`);
})




/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww_CODE_TITLE
CODE_HERE


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/


// ------------------------------------------------------------------------------------------------------------ NEW LINE


// // Show the popup
// alert("This is a popup!");
//
// // Close the popup after 2 seconds
// setTimeout(function() {
//     alert.close(); // This won't work for standard alerts, use custom modals for more control
// }, 2000);
//
//












// template

// ------------------------------------------------------------------------------------------------------------ NEW LINE

/*
/////////////////////////////////////////////////////////////////////////////// wwwwwwwwwwwwwwwwwwwwww_CODE_TITLE
CODE_HERE


//////////////////////////////////////////////////////////////////////////////////////////////////// END \
*/









