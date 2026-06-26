// =======================================
// Helping Hand - AI Career Mentor
// assessment.js
// =======================================

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
const charCount = document.getElementById("charCount");

// INPUT EVENT
nameInput.addEventListener("input", () => {
    charCount.innerHTML =
    "Characters : " + nameInput.value.length;
});

// FOCUS EVENT
nameInput.addEventListener("focus", () => {
    nameInput.classList.add(
        "border-4",
        "border-blue-600"
    );
});

// BLUR EVENT
nameInput.addEventListener("blur", () => {
    nameInput.classList.remove(
        "border-4",
        "border-blue-600"
    );
});

// MOUSEOVER EVENT
submitBtn.addEventListener("mouseover", () => {
    submitBtn.classList.add(
        "scale-110",
        "bg-green-600"
    );
});

// MOUSEOUT EVENT
submitBtn.addEventListener("mouseout", () => {
    submitBtn.classList.remove(
        "scale-110",
        "bg-green-600"
    );
});

// SUBMIT EVENT
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

    let psychologyScore =
    Math.round(((q1+q2+q3+q4+q5)/25)*100);

    let aptitudeScore =
    Math.round(((q6+q7+q8)/15)*100);

    let problemScore =
    Math.round(((q9+q10)/10)*100);

    let strengths=[];

    if(q1>=4) strengths.push("Communication");
    if(q2>=4) strengths.push("Leadership");
    if(q3>=4) strengths.push("Analytical Thinking");
    if(q4>=4) strengths.push("Creativity");
    if(q5>=4) strengths.push("Technical Interest");

    let improvements=[];

    if(q1<3) improvements.push("Communication Skills");
    if(q2<3) improvements.push("Leadership Skills");
    if(q4<3) improvements.push("Creative Thinking");
    if(q5<3) improvements.push("Technical Exposure");

    let careers=[];

    if(q5>=4 && q3>=4){

        careers=[
            "Artificial Intelligence",
            "Cloud Computing",
            "Cyber Security"
        ];

    }

    else if(q4>=4){

        careers=[
            "UI / UX Design",
            "Digital Marketing",
            "Content Creation"
        ];

    }

    else if(q2>=4){

        careers=[
            "Business Management",
            "Project Management",
            "Entrepreneurship"
        ];

    }

    else{

        careers=[
            "Software Development",
            "Data Analytics",
            "Information Technology"
        ];

    }

    localStorage.setItem("studentName",name);
    localStorage.setItem("studentEmail",email);
    localStorage.setItem("careerDomains",
    JSON.stringify(careers));
    // Show Result

result.classList.remove("hidden");

result.innerHTML = `

<div class="bg-white rounded-xl shadow-lg p-6">

<h2 class="text-3xl font-bold text-blue-700 mb-6">
Career Assessment Report
</h2>

<p class="mb-2">
<strong>Name:</strong> ${name}
</p>

<p class="mb-4">
<strong>Email:</strong> ${email}
</p>

<hr class="my-4">

<h3 class="text-xl font-bold mb-3">
Assessment Scores
</h3>

<p>
🧠 Psychology Score :
<strong>${psychologyScore}%</strong>
</p>

<p>
📘 Aptitude Score :
<strong>${aptitudeScore}%</strong>
</p>

<p>
💡 Problem Solving Score :
<strong>${problemScore}%</strong>
</p>

<hr class="my-4">

<h3 class="text-xl font-bold mb-3">
Your Strengths
</h3>

<ul class="list-disc ml-6">

${strengths.map(item=>`<li>${item}</li>`).join("")}

</ul>

<hr class="my-4">

<h3 class="text-xl font-bold mb-3">
Areas for Improvement
</h3>

<ul class="list-disc ml-6">

${improvements.length>0
? improvements.map(item=>`<li>${item}</li>`).join("")
: "<li>No major improvements required.</li>"}

</ul>

<hr class="my-4">

<h3 class="text-xl font-bold mb-3">
Top 3 Career Recommendations
</h3>

<ol class="list-decimal ml-6">

${careers.map(item=>`<li>${item}</li>`).join("")}

</ol>

<div class="mt-8 p-5 bg-green-100 rounded-lg">

<p class="text-green-700 font-bold text-lg">
✅ Assessment Completed Successfully
</p>

<p class="mt-2">
Based on your psychology, aptitude and problem-solving skills,
Helping Hand recommends the above career domains.
</p>

</div>

</div>

`;

});