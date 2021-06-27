let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 600);
}

window.onload = fadeOut();


// PIZZA HANDLING DATA

function pizzaFunction() {
    // DECLARE VARIABLES TO BE USED IN THIS FUNCTION
    var fullName    = document.forms["pizzaForm"]["fullName"].value;
    var email       = document.forms["pizzaForm"]["email"].value;
    var phoneNumber = document.forms["pizzaForm"]["phoneNumber"].value;
    var pizzaName   = document.forms["pizzaForm"]["pizzaName"].value;
    var pizzaSize   = document.forms["pizzaForm"]["pizzaSize"].value;
    var pizzaCrust  = document.forms["pizzaForm"]["pizzaCrust"].value;
    var pizzaTopping= document.forms["pizzaForm"]["pizzaTopping"].value;
    var pizzaNumber = document.forms["pizzaForm"]["pizzaNumber"].value;
    var address     = document.forms["pizzaForm"]["address"].value;
    // DECLARE DELIVERPRICE VARIABLE AND SET THE DEFAULT VALUE
    deliverPrice = 0;

    // CHECK IF THOSE VARIABLES ARE EMPTY, YES RETURN ERRORS
    if (fullName == "") {
        alert("Full Name is required");
        document.pizzaForm.fullName.focus();
        return false;
    } else if (email == "") {
        alert("Email is required");
        document.pizzaForm.email.focus();
        return false;
    } else if (phoneNumber == "") {
        alert("Phone Number is required");
        document.pizzaForm.phoneNumber.focus();
        return false;
    } else if (pizzaName == "") {
        alert("Pizza Name is required");
        document.pizzaForm.pizzaName.focus();
        return false;
    } else if (pizzaSize == "") {
        alert("Pizza Size is required");
        document.pizzaForm.pizzaSize.focus();
        return false;
    } else if (pizzaCrust == "") {
        alert("Pizza Crust is required");
        document.pizzaForm.pizzaCrust.focus();
        return false;
    } else if (pizzaTopping == "") {
        alert("Pizza Topping is required");
        document.pizzaForm.pizzaTopping.focus();
        return false;
    } else if (pizzaNumber == "") {
        alert("Pizza Number is required");
        document.pizzaForm.pizzaNumber.focus();
        return false;
    } 
    // CONVERT VARIABLES TO INTEGER
    pizzaSize    = parseInt(pizzaSize);
    pizzaCrust   = parseInt(pizzaCrust);
    pizzaTopping = parseInt(pizzaTopping);
    if (address !== "") {
        // IF THE ADDRESS VARIABLE IS NOT NULL RE-ASSIGN THE VALUE OF DELIVERPRICE
        deliverPrice = 150;
        // CALCULATE THE TOTAL PRICE OF THE PIZZA AND DISPLAY IT IN AN ALERT FUNCTION
        totalPrize = ((pizzaSize + pizzaCrust + pizzaTopping) * pizzaNumber) + deliverPrice;
        alert("Your order will be delivered to your location\n Your total price is: "+totalPrize+"\n Pizza Name: "+pizzaName+"\n Pizza Number: "+pizzaNumber);
    } else {
        // CALCULATE THE TOTAL PRICE OF THE PIZZA AND DISPLAY IT IN AN ALERT FUNCTION
        totalPrize = ((pizzaSize + pizzaCrust + pizzaTopping) * pizzaNumber) + deliverPrice;
        alert("Your total price is: "+totalPrize+"\n Pizza Name: "+pizzaName+"\n Pizza Number: "+pizzaNumber);
    } 


    

} 