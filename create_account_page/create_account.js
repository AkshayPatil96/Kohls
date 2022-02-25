var userData = JSON.parse(localStorage.getItem("signupData")) || [];
console.log(userData);
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    if(document.getElementById("firstName").value == "" || document.getElementById("lastName").value == "" || document.getElementById("email").value == "" || document.getElementById("password").value == "")
    {
        // For when user enters incomplete information
        alert("Please enter full information.");
        return;
    }
    else{
        // When all the fields are filled in the form
        var first_name = document.getElementById("firstName").value;
        var last_name = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        // Creating a object with all the fields data
        var userInfoObj = {
            firstname: first_name,
            lastname: last_name,
            email: email,
            pass: password
        }  
        // Pushing the object in an array
        userData.push(userInfoObj);
        // Creating a key in local storage and storing the above array into it
        localStorage.setItem("signupData", JSON.stringify(userData));

        location.href = "/Homepage/index.html"
        // Clearing the fields after taking the data
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }   
})
