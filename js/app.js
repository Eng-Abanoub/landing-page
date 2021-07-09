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
const navbar = document.getElementById('navbar__list')
const lists = document.querySelector('#navbar__list').children
const sections = document.querySelectorAll('section')
for(section of sections){
    console.log(section.offsetTop);
    
}


const element = document.createElement('li')
for(let i=1;i<=4;i++)
navbar.insertAdjacentHTML('beforeend',`<li><a href="#sec${i}" ${(i==1)?'class="active"':null}>section${i}</a></li>`)

// Add class 'active' to section when near top of viewport

addEventListener('scroll',(x)=>{
    // remove active class from sections
    const activeSection =document.querySelector('section.active');
    (activeSection)? activeSection.classList.remove('active'):null;

    // remove active class from navbar items    
    const activeList = document.querySelector('#navbar__list .active');
    (activeList)? activeList.classList.remove('active'):null ;
    // add active class to a section and navbar item depends on a condition
    if(window.scrollY<sections[1].offsetTop-250){
        lists[0].firstChild.classList.add('active')
        sections[0].classList.add('active')
    }
    else if(window.scrollY<sections[2].offsetTop-250){
        lists[1].firstChild.classList.add('active')
        sections[1].classList.add('active')
    }
    else if(window.scrollY<sections[3].offsetTop-250){
        lists[2].firstChild.classList.add('active')
        sections[2].classList.add('active')
    }
    else {
        lists[3].firstChild.classList.add('active')
        sections[3].classList.add('active')
    }
    console.log(window.scrollY)

})

// Scroll to anchor ID using scrollTO event

const navbarList = document.querySelector('#navbar__list')
navbarList.addEventListener('click',(e)=>{
    console.log(e.target.innerText.toLowerCase())
    const top =document.querySelector('#'+e.target.innerText.toLowerCase()).offsetTop;
    window.scrollTo({top,behavior: 'smooth'});
    console.log()
})
// Add navbar icon for mobile screen
const navbarIcon =
`<div class="icon">
    <span class="bar"> </span>
    <span class="bar"> </span>
    <span class="bar"> </span>
</div>`
navbarList.insertAdjacentHTML('beforebegin',navbarIcon);

// display and hide navbar menu on click to the icon
const icon = document.querySelector('.icon')
icon.addEventListener('click',function(){
    navbarList.style.display=(navbarList.style.display == "block")?"none":"block";
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


