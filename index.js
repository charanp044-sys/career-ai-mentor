// =========================
// Load Event
// =========================

window.addEventListener("load", () => {

    alert("Welcome to Helping Hand - AI Career Mentor");

});

// =========================
// Mouse Events
// =========================

const cards = document.querySelectorAll("[id^='card']");

cards.forEach(card => {

    card.addEventListener("mouseover", () => {

        card.classList.add(
            "scale-105",
            "bg-blue-100",
            "shadow-2xl"
        );

    });

    card.addEventListener("mouseout", () => {

        card.classList.remove(
            "scale-105",
            "bg-blue-100",
            "shadow-2xl"
        );

    });

});

// =========================
// Geolocation API
// =========================

const locationBtn = document.getElementById("locationBtn");
const locationOutput = document.getElementById("locationOutput");

if(locationBtn){

    locationBtn.addEventListener("click", () => {

        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(

                function(position){

                    locationOutput.innerHTML = `
                        <div class="bg-white p-6 rounded-lg shadow-lg">

                        <h3 class="text-2xl font-bold mb-4">
                        Current Location
                        </h3>

                        <p>
                        Latitude :
                        ${position.coords.latitude}
                        </p>

                        <p>
                        Longitude :
                        ${position.coords.longitude}
                        </p>

                        </div>
                    `;

                },

                function(){

                    locationOutput.innerHTML =
                    "<p class='text-red-600'>Location permission denied.</p>";

                }

            );

        }

    });

}