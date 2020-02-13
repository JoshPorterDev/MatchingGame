// Global variables
let imgArray = ["images/bacon.jpg", "images/buzz.jpeg", "images/shaggy.jpeg", "images/diamond.jpeg", "images/duck.jpeg", "images/stopsign.jpeg", "images/bear.jpeg", "images/fish.jpeg", "images/gold.jpeg", "images/burger.jpg", "images/bus.jpg", "images/car.jpg", "images/moon.jpeg", "images/plane.jpg", "images/spaghetti.jpg", "images/steak.jpg", "images/truck.jpg", "images/monkey.jpg", "images/dog.jpeg"];

function displayImages()
{
    let options = document.getElementById("options");

    // Following for loops will create a 19x10 grid 
    for (let i = 0; i < 10; i++)
    {
        for (let i = 0; i < imgArray.length; i++)
        {
            // The math inside the [] will generate a random number and use that to assign the img a source from the array
            options.innerHTML += "<img class='option' src='" + imgArray[Math.floor(Math.random() * imgArray.length)] + "'>";
        }
    }

}

displayImages();