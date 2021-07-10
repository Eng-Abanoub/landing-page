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

const navbar = document.querySelector('#navbar__list')
const lists = document.querySelector('#navbar__list').children
const sections = document.querySelectorAll('section')

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



const element = document.createElement('li')
// for(let i=1;i<=4;i++)
for(section of sections){
    console.log(section.getAttribute('data-nav'));
    const title = section.getAttribute('data-nav');
    // navbar.insertAdjacentHTML('beforeend',`<li><a href="#sec${i}" ${(i==1)?'class="active"':null}>section${i}</a></li>`)
    navbar.insertAdjacentHTML('beforeend',`<li><a >${title}</a></li>`)
    
}

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

navbar.addEventListener('click',(e)=>{
    console.log(e.target.innerText)
    const value = e.target.innerText;
    console.log(document.querySelector(`[data-nav="${e.target.innerText}"]`));

    // const clickedEl = document.querySelector('#'+e.target.innerText.toLowerCase())
    const clickedEl = document.querySelector(`[data-nav="${e.target.innerText}"]`)

    // const top =(clickedEl!= null)? clickedEl.offsetTop:null;
    // console.log(top)
    if (clickedEl!=null){
        const top =clickedEl.offsetTop;

        window.scrollTo({top,behavior: 'smooth'});
    }
})
// Add navbar icon for mobile screen
const navbarIcon =
`<div class="icon">
    <span class="bar"> </span>
    <span class="bar"> </span>
    <span class="bar"> </span>
</div>`
navbar.insertAdjacentHTML('beforebegin',navbarIcon);

// display and hide navbar menu on click to the icon
const icon = document.querySelector('.icon')
icon.addEventListener('click',function(){
    navbar.style.display=(navbar.style.display == "block")?"none":"block";
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


