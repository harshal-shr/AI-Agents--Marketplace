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
