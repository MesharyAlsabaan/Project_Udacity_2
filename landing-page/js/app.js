//Get the Ids from all sections
const Section1 = document.getElementById('Section_1');
const Section2 = document.getElementById('Section_2');
const Section3 = document.getElementById('Section_3');
const Section4 = document.getElementById('Section_4');
const Sections = document.querySelectorAll('section');

Section1.addEventListener('click', scroll1);
Section2.addEventListener('click', scroll2);
Section3.addEventListener('click', scroll3);
Section4.addEventListener('click', scroll4);
document.addEventListener('scroll', scrolling)



// when the user click this function scroll to the section area.
function scroll1() {
    document.getElementById("section1").scrollIntoView();


}
function scroll2() {
    document.getElementById("section2").scrollIntoView();


}

function scroll3() {
    document.getElementById("section3").scrollIntoView();


}

function scroll4() {
    document.getElementById("section4").scrollIntoView();


}


//  the section active in nav bar .
function scrolling(){

    var postion = document.documentElement.scrollTop;
    //  console.log(Sections.length);
    Sections.forEach(S => {

        if (postion >= S.offsetTop - S.offsetHeight+200) {
            if (postion < S.offsetTop + S.offsetHeight) {

                console.log(S.offsetTop);
                var CID = S.attributes.id.value;
                removeActive();
                activeNavigation(CID);
            }
        }
    })
}

   // remove active class from all sections in nav bar.
function removeActive() {
    document.querySelectorAll("nav ul li a").forEach((Se) => {
        Se.classList.remove("active");
    })

}
// it takes id of the section and make it active in nav bar.
function activeNavigation(id) {

    var S = `nav ul li a[href="#${id}"]`
    document.querySelector(S).classList.add("active");


}





















































/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


