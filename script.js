// ===============================
// AI AGENT MARKETPLACE JAVASCRIPT
// ===============================


// 1. Welcome Function
function showWelcome() {
    alert("Welcome to AI AgentHub!");
}


// 2. Search Agents Function
function searchAgents() {

    let searchText = $("#searchBox").val().toLowerCase();

    $(".agent-item").each(function () {

        let agentName = $(this).find("h4").text().toLowerCase();

        if (agentName.includes(searchText)) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });
}


// 3. Filter Agents Function
function filterAgents() {

    let category = $("#categoryFilter").val();

    $(".agent-item").each(function () {

        let agentCategory = $(this).data("category");

        if (category === "all" || agentCategory === category) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });
}


// 4. Validate Search Function
function validateSearch() {

    let search = document.getElementById("searchBox");

    if (search && search.value.trim() === "") {
        alert("Please enter an AI Agent name.");
        return false;
    }

    return true;
}


// ===============================
// jQuery DOM + ANIMATION
// ===============================

$(document).ready(function () {

    // Search while typing
    $("#searchBox").on("keyup", function () {
        searchAgents();
    });


    // Category filter
    $("#categoryFilter").on("change", function () {
        filterAgents();
    });


    // Card hover animation
    $(".card").hover(
        function () {
            $(this).animate({
                marginTop: "-5px"
            }, 200);
        },
        function () {
            $(this).animate({
                marginTop: "0px"
            }, 200);
        }
    );

});



// Contact Developer
function contactDeveloper() {
    alert("Developer contact request sent successfully!");
}

// Buy Agent
function buyAgent() {
    alert("Thank you! Your agent purchase request has been received.");
}


function submitRequirement() {

    let businessName = document.getElementById("businessName").value.trim();
    let email = document.getElementById("businessEmail").value.trim();
    let category = document.getElementById("automationCategory").value;
    let requirement = document.getElementById("requirement").value.trim();
    let budget = document.getElementById("budget").value;

    if (businessName === "") {
        alert("Please enter your business name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (category === "") {
        alert("Please select an automation category.");
        return false;
    }

    if (requirement === "") {
        alert("Please describe your requirement.");
        return false;
    }

    if (budget === "" || budget <= 0) {
        alert("Please enter a valid budget.");
        return false;
    }

    alert("Your business requirement has been posted successfully!");

    return false;
}


function submitAgent() {

    let developerName = document.getElementById("developerName").value.trim();
    let email = document.getElementById("developerEmail").value.trim();
    let agentName = document.getElementById("agentName").value.trim();
    let category = document.getElementById("agentCategory").value;
    let description = document.getElementById("agentDescription").value.trim();
    let technology = document.getElementById("technology").value.trim();
    let price = document.getElementById("agentPrice").value;

    if (developerName === "") {
        alert("Please enter developer name.");
        return false;
    }

    if (email === "") {
        alert("Please enter email address.");
        return false;
    }

    if (agentName === "") {
        alert("Please enter AI agent name.");
        return false;
    }

    if (category === "") {
        alert("Please select a category.");
        return false;
    }

    if (description === "") {
        alert("Please describe your AI agent.");
        return false;
    }

    if (technology === "") {
        alert("Please enter the technology used.");
        return false;
    }

    if (price === "" || price <= 0) {
        alert("Please enter a valid price.");
        return false;
    }

    alert("Your AI Agent has been published successfully!");

    return false;
}

function loginUser() {

    let userType = document.getElementById("userType").value;
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    if (userType === "") {
        alert("Please select user type.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return false;
    }

    alert("Login successful!");

    return false;
}


function showRegister() {

    let modal = new bootstrap.Modal(
        document.getElementById("registerModal")
    );

    modal.show();
}


function registerUser() {

    let name = document.getElementById("registerName").value.trim();
    let email = document.getElementById("registerEmail").value.trim();
    let type = document.getElementById("registerType").value;
    let password = document.getElementById("registerPassword").value;

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (type === "") {
        alert("Please select account type.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return false;
    }

    alert("Account created successfully!");

    return false;
}
