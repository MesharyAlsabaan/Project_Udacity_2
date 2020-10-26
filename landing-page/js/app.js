
  var node=document.createElement("ul");
  var sec1 = document.createElement("li");
  var sec2= document.createElement("a");
  var text=document.createTextNode("Section 1");
  sec2.setAttribute("class","active");
  sec2.setAttribute("id","Section_1");
  sec2.setAttribute("href","#section1");
  sec2.appendChild(text);
  sec1.appendChild(sec2);
  node.appendChild(sec1);

  for(var i=2; i<5;i++){
      console.log("hhh");
var sec=document.createElement("li");
var sec3= document.createElement("a");
var text1=document.createTextNode(`Section ${i}`);
sec3.setAttribute("id",`Section_${i}`);
sec3.setAttribute("href",`#section${i}`);

sec3.appendChild(text1);
sec.appendChild(sec3);
node.appendChild(sec);
  }

  document.getElementById("mm").appendChild(node);





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
document.addEventListener('scroll', scrolling);






  







// // when the user click this function scroll to the section area.
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
























































