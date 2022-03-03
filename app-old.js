// DESTINATION LINKS
const moon = document.querySelector(".moon");
const mars = document.querySelector(".mars");
const europa = document.querySelector(".europa");
const titan = document.querySelector(".titan");

const destinationTopic = document.querySelector(".destination__topic");
const destinationDescription = document.querySelector(".about");
const destinationDistance = document.querySelector(".distance");
const destinationTime = document.querySelector(".time");
const destinationImage = document.querySelector(".images");

// CREW LINKS
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");

const crewRole = document.querySelector(".role");
const crewName = document.querySelector(".name");
const crewBio = document.querySelector(".bio");
const crewImage = document.querySelector(".container");

//TECHNOLOGY LINKS
const tech1 = document.querySelector(".tech1");
const tech2 = document.querySelector(".tech2");
const tech3 = document.querySelector(".tech3");

const techName = document.querySelector(".technology__name");
const techDescription = document.querySelector(".technology__description");
const techImage = document.querySelector(".technology__image");

fetch('/data.json')
.then(response => response.json())
.then(data => 
    {   
        console.log(data)
        function displayDestination(currentDestination){
            const destination = data.destinations[currentDestination]
            destinationImage.src = destination.images.png;
            destinationTopic.textContent = destination.name;
            destinationDescription.textContent = destination.description;
            destinationTime.textContent = destination.travel;
            destinationDistance.textContent = destination.distance;
        }
        // change destination
        moon.addEventListener('click', function() {
            displayDestination(0)
        })
        
        mars.addEventListener('click', function() {
            displayDestination(1)
        })

        europa.addEventListener('click', function() {
            displayDestination(2)
        })
        titan.addEventListener('click', function() {
            displayDestination(3)

        })


       
        
    })
.catch(err => console.log(err));

fetch('/data.json')
.then(response => response.json())
.then(data => 
    {
        //change Crew members
        function displayCrew(currentCrew) {
            const crew = data.crew[currentCrew];
            crewImage.style.backgroundImage = "url('" + crew.images.png + "')";
            crewRole.textContent = crew.role;
            crewName.textContent = crew.name;
            crewBio.textContent = crew.bio;
        }
        link1.addEventListener('click', function(){
            displayCrew(0);
        })
        link2.addEventListener('click', function(){
            displayCrew(1);
        })
        link3.addEventListener('click', function(){
            displayCrew(2);
        })
        link4.addEventListener('click', function(){
            displayCrew(3);
        })
    })
.catch(err => console.log(err));

fetch('/data.json')
.then(response => response.json())
.then(data => 
    {
        //change Technology
        function displayTech(currentTech) {
            const tech = data.technology[currentTech];
            techImage.style.backgroundImage = "url('" + tech.images.portrait + "')";
            techDescription.textContent = tech.description;
            techName.textContent = tech.name;
        }

        tech1.addEventListener('click', function(){
            displayTech(0);
        })
        tech2.addEventListener('click', function(){
            displayTech(1);
        })
        tech3.addEventListener('click', function(){
            displayTech(2);
        })
    })
.catch(err => console.log(err));


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