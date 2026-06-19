document.getElementById("careerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("userEmail").value.trim();

    if (name === "" || email === "") {
        alert("Please fill all fields");
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

    // Scores

    let psychologyScore =
        Math.round(((q1 + q2 + q3 + q4 + q5) / 25) * 100);

    let aptitudeScore =
        Math.round(((q6 + q7 + q8) / 15) * 100);

    let problemScore =
        Math.round(((q9 + q10) / 10) * 100);

    // Strengths

    let strengths = [];

    if (q3 >= 4) strengths.push("Analytical Thinking");
    if (q4 >= 4) strengths.push("Creativity");
    if (q5 >= 4) strengths.push("Technical Interest");
    if (q2 >= 4) strengths.push("Leadership");
    if (q1 >= 4) strengths.push("Communication");

    // Improvements

    let improvements = [];

    if (q1 < 3) improvements.push("Communication Skills");
    if (q2 < 3) improvements.push("Leadership Skills");
    if (q4 < 3) improvements.push("Creative Thinking");
    if (q5 < 3) improvements.push("Technical Exposure");

    // Domains

    let domains = [];

    if (q5 >= 4 && q3 >= 4) {

        domains.push("Artificial Intelligence");
        domains.push("Cloud Computing");
        domains.push("Cyber Security");

    } else if (q4 >= 4) {

        domains.push("UI / UX Design");
        domains.push("Digital Marketing");
        domains.push("Content Creation");

    } else if (q2 >= 4) {

        domains.push("Business Management");
        domains.push("Project Management");
        domains.push("Entrepreneurship");

    } else {

        domains.push("Software Development");
        domains.push("Data Analytics");
        domains.push("Information Technology");
    }

    // Save to Local Storage

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("careerDomains", JSON.stringify(domains));

    // Display Report

    let result = document.getElementById("result");

    result.classList.remove("hidden");

    result.innerHTML = `

        <h2 class="text-3xl font-bold text-blue-700 mb-6">
            Career Assessment Report
        </h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr class="my-4">

        <p><strong>Psychology Score:</strong> ${psychologyScore}%</p>

        <p><strong>Aptitude Score:</strong> ${aptitudeScore}%</p>

        <p><strong>Problem Solving Score:</strong> ${problemScore}%</p>

        <h3 class="text-xl font-bold mt-6 mb-2">
            Strengths
        </h3>

        <ul class="list-disc ml-6">
            ${strengths.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3 class="text-xl font-bold mt-6 mb-2">
            Areas for Improvement
        </h3>

        <ul class="list-disc ml-6">
            ${improvements.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3 class="text-xl font-bold mt-6 mb-2">
            Top Suitable Domains
        </h3>

        <ol class="list-decimal ml-6">
            ${domains.map(item => `<li>${item}</li>`).join("")}
        </ol>

        <div class="mt-6 p-4 bg-green-100 rounded-lg">
            Assessment Completed Successfully
        </div>

    `;
});