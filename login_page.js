
function addUser(){
 

    
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);

    window.alert("Are you sure you want to go to the next page?")
    

      window.location = "homepage.html";
 
 
}