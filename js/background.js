const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(${bgImage.src})`;
