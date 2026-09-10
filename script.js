// Welcome message
function showWelcome() {
    alert("Welcome to AI AgentHub!");
}

// Search validation
function validateSearch() {
    let search = document.getElementById("searchBox");

    if (search && search.value.trim() === "") {
        alert("Please enter an AI Agent name.");
        return false;
    }

    return true;
}

// Button animation using jQuery
$(document).ready(function () {

    $(".feature-card").hover(
        function () {
            $(this).fadeTo("fast", 0.85);
        },
        function () {
            $(this).fadeTo("fast", 1);
        }
    );

});
