const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("bg-black");
    document.body.classList.toggle("text-white");

    if(document.body.classList.contains("bg-black")){

        localStorage.setItem("theme", "dark");
        themeToggle.innerText = "Light Mode";

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.innerText = " Dark Mode";

    }

});

// Load saved theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("bg-black");
    document.body.classList.add("text-white");

    themeToggle.innerText = "Light Mode";

}
const speakBtn =
document.getElementById("speakBtn");

speakBtn.addEventListener("click", () => {

    const speech =
    new SpeechSynthesisUtterance(
        "HI I AM HELPING HAND,I AM HERE TO HELP YOU TO BUILD YOUR CAREER"
    );

    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);

});
const locationBtn = document.getElementById("locationBtn");
const locationOutput = document.getElementById("locationOutput");

locationBtn.addEventListener("click", () => {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            (position) => {

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                locationOutput.innerHTML =
                `Latitude: ${lat}<br>
                 Longitude: ${lon}`;

                localStorage.setItem("latitude", lat);
                localStorage.setItem("longitude", lon);

            },

            () => {

                locationOutput.innerHTML =
                "Location access denied.";

            }

        );

    } else {

        locationOutput.innerHTML =
        "Geolocation not supported.";

    }

});