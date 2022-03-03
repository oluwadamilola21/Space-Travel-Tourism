//-------------- FETCH FUNCTION ---------------------

function fetchData(index, string) {
  fetch('/data.json')
  .then(response => response.json())
  .then(data => 
      {   
        //console.log(data);
        //console.log('string: ', string);
        if (string === 'destination') displayDestination(index, data);
          else if (string === 'crew') displayCrew(index, data);
          else displayTech(index, data);
      })
  .catch(err => console.log(err));
}


//---------------- FOR DESTINATION -----------------------

const destinationTopic = document.querySelector(".destination__topic");
const destinationDescription = document.querySelector(".about");
const destinationDistance = document.querySelector(".distance");
const destinationTime = document.querySelector(".time");
const destinationImage = document.querySelector(".images");

function displayDestination(currentDestination, data){
  const destination = data.destinations[currentDestination]
  destinationImage.src = destination.images.png;
  destinationTopic.textContent = destination.name;
  destinationDescription.textContent = destination.description;
  destinationTime.textContent = destination.travel;
  destinationDistance.textContent = destination.distance;
}

// Target all links in the destinationLinksContainer
let destinationLinksContainer = document.querySelectorAll('#destinationLinksContainer > a');

// change destination: Fetch relevant data on click
destinationLinksContainer.forEach((link, index) => {
    link.addEventListener('click', () => {
        //console.log('index: ', index);
        fetchData(index, 'destination');
    })
});


//---------------- FOR CREW ----------------------

const crewRole = document.querySelector(".role");
const crewName = document.querySelector(".name");
const crewBio = document.querySelector(".bio");
const crewImage = document.querySelector(".container");

function displayCrew(currentCrew, data){
  const crew = data.crew[currentCrew];
  crewImage.style.backgroundImage = "url('" + crew.images.png + "')";
  crewRole.textContent = crew.role;
  crewName.textContent = crew.name;
  crewBio.textContent = crew.bio;
}

// Target all buttons in dotButtonsContainer
let dotButtonsContainer = document.querySelectorAll('#dotButtonsContainer > button');
  
// Fetch relevant data on click
dotButtonsContainer.forEach((button, index) => {
    button.addEventListener('click', () => {
        //console.log('index: ', index);
        fetchData(index, 'crew');
    })
});


//---------------- FOR TECH ----------------------

const techName = document.querySelector(".technology__name");
const techDescription = document.querySelector(".technology__description");
const techImage = document.querySelector(".technology__image");

function displayTech(currentTech, data) {
  const tech = data.technology[currentTech];
  techImage.style.backgroundImage = "url('" + tech.images.portrait + "')";
  techDescription.textContent = tech.description;
  techName.textContent = tech.name;
}

// Target all buttons in techButtonsContainer
let techButtonsContainer = document.querySelectorAll('#techButtonsContainer > button');
  
// change destination
techButtonsContainer.forEach((button, index) => {
    button.addEventListener('click', () => {
        //console.log('index: ', index);
        fetchData(index, 'tech');
    })
});


// YOUR OPEN/CLOSE HAMBURGER MENU GOES HERE
// OPEN/CLOSE HAMBURGER MENU
const btn = document.getElementById("btn");
const btnHamburger = document.querySelector('.open_btn');
const links = document.querySelector('.header__links2');
const btnClose = document.querySelector('.close_btn');
btn.addEventListener('click', function(){
    console.log("i was clicked")
    if (links.classList.contains('hide__links')) {
        links.classList.remove('hide__links')
        btnClose.style.display = "block"
        btnHamburger.style.display = "none"
    }
    else {
        links.classList.add('hide__links')
        btnClose.style.display = "none"
        btnHamburger.style.display = "block"
    }
})
