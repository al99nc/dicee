function roledice(){
    var random = Math.floor(Math.random() * 6) + 1;
    var firstImageSrc="./images/dice"+random+".png";
    document.getElementById("img1").setAttribute("src" , firstImageSrc);
    var random2 = Math.floor(Math.random() * 6) + 1;
    var secondtImageSrc="./images/dice"+random2+".png";
    document.querySelector("img.img2").setAttribute("src" , secondtImageSrc);
    if (random > random2){
        document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
    }
    else if(random2 > random){
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }else{
        document.querySelector("h1").textContent = "Draw!";
    }
}

roledice();