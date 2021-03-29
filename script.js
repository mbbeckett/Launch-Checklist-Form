// Write your JavaScript code here!

window.addEventListener("load", function(){
   console.log("window loaded.")
   let checklistForm = document.querySelector("form");

   checklistForm.addEventListener("submit", function (event){
      event.preventDefault();

      let pilotInput = document.querySelector("input[name='pilotName']");
      let copilotInput =document.querySelector("input[name='copilotName']");
      let fuelInput = document.querySelector("input[name='fuelLevel']");
      let cargoInput = document.querySelector("input[name='cargoMass']");

      if (!pilotInput || !copilotInput || !fuelInput || !cargoInput){
         alert("All fields required.");
         return;
      }

      if(pilotInput){
         document.getElementById("pilotStatus").setAttribute("style", "visibility: visible")
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready for launch.`
         document.getElementById("launchStatus").innerHTML = "Shuttle Ready For Launch";
         document.getElementById("launchStatus").style.color = "green";
      }
      
      if(copilotInput){
         document.getElementById("copilotStatus").setAttribute("style", "visibility: visible")
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotInput.value} is ready for launch.`
         document.getElementById("launchStatus").innerHTML = "Shuttle Ready For Launch";
         document.getElementById("launchStatus").style.color = "green";
  
      }

      if (fuelInput.value < 10000) {
         alert("There is not enough fuel for this journey.");
         document.getElementById("faultyItems").setAttribute("style", "visibility: visible");
         document.getElementById("launchStatus").setAttribute("style", "visibility: visible")
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
         document.getElementById("launchStatus").style.color = "red";
         return;
      }else {
         document.getElementById("fuelStatus").setAttribute("style", "visibility: visible");
         document.getElementById("launchStatus").innerHTML = "Shuttle Ready For Launch";
         document.getElementById("launchStatus").style.color = "green";
      }

      if (cargoInput.value > 10000) {
         alert("There is too much cargo onboard for this journey.");
         document.getElementById("faultyItems").setAttribute("style", "visibility: visible");
         document.getElementById("launchStatus").setAttribute("style", "visibility: visible")
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
         document.getElementById("launchStatus").style.color = "red";
         return;
      }else{
         document.getElementById("cargoStatus").setAttribute("style", "visibility: visible")
         document.getElementById("launchStatus").innerHTML = "Shuttle Ready For Launch";
         document.getElementById("launchStatus").style.color = "green";
      }
      
      let planetChoice;


      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then( function(json) {
         console.log(json);
         planetChoice = json[2];
         document.getElementById("missionTarget").innerHTML =
         `<h2>Mission Destination</h2>
           <ol>
              <li>Name: ${planetChoice.name}</li>
              <li>Diameter: ${planetChoice.diameter}</li>
              <li>Star: ${planetChoice.star}</li>
              <li>Distance from Earth: ${planetChoice.distance}</li>
              <li>Number of Moons: ${planetChoice.moons}</li>
            </ol>
            <img src="${planetChoice.image}"></img>`;
     });   
   });
});
});
