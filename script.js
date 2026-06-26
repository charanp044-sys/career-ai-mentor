// ===============================
// Helping Hand AI Career Mentor
// ===============================

// Load Event
window.addEventListener("load", () => {
    alert("Welcome to Helping Hand AI Career Assessment");
});

// Get Elements
const form = document.getElementById("careerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("userEmail");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

// Character Count
const count = document.createElement("p");
count.className = "text-blue-600 mt-2";
count.innerHTML = "Characters : 0";

nameInput.parentNode.appendChild(count);

// ===============================
// INPUT EVENT
// ===============================

nameInput.addEventListener("input", () => {

    count.innerHTML =
    "Characters : " + nameInput.value.length;

});

// ===============================
// FOCUS EVENT
// ===============================

nameInput.addEventListener("focus", () => {

    nameInput.classList.add(
        "border-4",
        "border-blue-600"
    );

});

// ===============================
// BLUR EVENT
// ===============================

nameInput.addEventListener("blur", () => {

    nameInput.classList.remove(
        "border-4",
        "border-blue-600"
    );

});

// ===============================
// MOUSEOVER EVENT
// ===============================

submitBtn.addEventListener("mouseover", () => {

    submitBtn.classList.add(
        "scale-110",
        "bg-green-600"
    );

});

// ===============================
// MOUSEOUT EVENT
// ===============================

submitBtn.addEventListener("mouseout", () => {

    submitBtn.classList.remove(
        "scale-110",
        "bg-green-600"
    );

});

// ===============================
// SUBMIT EVENT
// ===============================

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();

    if(name==="" || email===""){

        alert("Please fill all fields.");
        return;

    }

    let q1 = Number(document.getElementById("q1").value);
    let q2 = Number(document.getElementById("q2").value);
    let q3 = Number(document.getElementById("q3").value);
    let q4 = Number(document.getElementById("q4").value);
    let q5 = Number(document.getElementById("q5").value);

    let q6 = Number(document.getElementById("q6").value);
    let q7 = Number(document.getElementById("q7").value);
    let q8 = Number(document.getElementById("q8").value);

    let q9 = Number(document.getElementById("q9").value);
    let q10 = Number(document.getElementById("q10").value);