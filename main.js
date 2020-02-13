// Global variables
// two dimension array, storing the src and alt for each image
let imgArray = [["images/bacon.jpg", "bacon"], ["images/buzz.jpeg", "buzz"], ["images/shaggy.jpeg", "shaggy"], ["images/diamond.jpeg", "diamonds"], ["images/duck.jpeg", "ducks"], ["images/stopsign.jpeg", "stop signs"], ["images/bear.jpeg", "bears"], ["images/fish.jpeg", "fish"], ["images/gold.jpeg", "gold"], ["images/burger.jpg", "burgers"], ["images/bus.jpg", "busses"], ["images/car.jpg", "cars"], ["images/moon.jpeg", "moons"], ["images/plane.jpg", "planes"], ["images/spaghetti.jpg", "spaghetti"], ["images/steak.jpg", "steak"], ["images/truck.jpg", "trucks"], ["images/monkey.jpg", "monkeys"], ["images/dog.jpeg", "dogs"]];
let options = document.getElementById("options");

function displayImages()
{
    // Following for loops will create a 19x10 grid 
    for (let i = 0; i < 10; i++)
    {
        for (let i = 0; i < imgArray.length; i++)
        {
            // The math inside the [] will generate a random number and use that to assign the img a source from the array
            // this variable will allow us to get the alt and src associated with that specific index
            let randomNumber = Math.floor(Math.random() * imgArray.length);
            options.innerHTML += "<img alt='" + imgArray[randomNumber][1] + "'class='option' src='" + imgArray[randomNumber][0] + "'>";
        }
    }

}

function matchImages()
{
    // Choose a random img from the array, this will be the target img, find all occurances of this image to win
    let targetImg = imgArray[Math.floor(Math.random() * imgArray.length)];
    let targetImgSrc = targetImg[0];
    let targetImgAlt = targetImg[1];
    let displayText = document.getElementById("displayText");
    displayText.innerHTML = "Find all images of " + targetImgAlt;

    // Find number of occurances of target image from grid

    // var children = tableFields.children;
    // for (var i = 0; i < children.length; i++) {
    // var tableChild = children[i];
    //     // Do stuff
    // }

    let option = options.children;
    let numOfOccurances = 0;
    for (let i = 0; i < option.length; i++)
    {
        let optionSrc = option[i].src;
        console.log(optionSrc)
        // Desired output: /images/bus.jpg
        // Actual output: http://127.0.0.1:5500/images/bus.jpg 
        if (optionSrc == targetImgSrc)
        {
            numOfOccurances ++;
        }
    }
    // alert(numOfOccurances);



}

displayImages();
matchImages();