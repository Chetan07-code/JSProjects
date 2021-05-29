const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click",function(){
    //get random number fr0m color array
    // const randomNumber = 2; //gives rgb color
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})


function getRandomNumber(){
    return Math.floor(Math.random() *colors.length)

    //above code helps in apply different/random bgcolor 
}