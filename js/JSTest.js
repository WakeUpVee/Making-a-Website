let username;

document.getElementById("usernameSubmission").onclick = function(){
    username = document.getElementById("userName").value;
    document.getElementById("heading").textContent = `Welcome, ${username}!`
}

