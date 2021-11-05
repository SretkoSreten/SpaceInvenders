const displayGameOver = () => {
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center"
    ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);
}
const displayWinOver = () => {
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center"
    ctx.fillText("WINNER!!", canvas.width/2, canvas.height/2);
}
const displayNextLevel = (level) => {
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center"
    ctx.fillText(`LVL ${level}`, canvas.width/2, canvas.height/2);
}
const drawGreenLine = () => {
    ctx.fillStyle = "#20CA14";
    ctx.fillRect(0, canvas.height - 50, canvas.width, 2);
}
const drawCanvasBottom = () => {

    ctx.font = "18px 'PT Sans Caption', sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center"
    ctx.fillText(`CREDIT ${level}`, canvas.width/2, canvas.height - 20);
    ctx.fillText(`${level}`, 30, canvas.height - 20);
}
const drawStartScreen = () => {

    ctx.font = "50px 'PT Sans Caption', sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center"
    ctx.fillText(`START GAME`, canvas.width/2, canvas.height / 2);

    ctx.font = "18px 'PT Sans Caption', sans-serif";
    ctx.fillText(`press screen to start game`, canvas.width/2, canvas.height / 2 + 30);

    ctx.fillText(`${level}`, 30, canvas.height - 20);

    window.addEventListener("click", e => {
        e.preventDefault();
        playing = true;
        startScreen = false;
        setup();
    })
}

const drawCanvasHeader = () => {

    let x = 100;
    let y = 40;

    let padx = 150, pady = 35;

    let highscore = localStorage.getItem("best_score");

    if (highscore == null) 
    {
        localStorage.setItem("best_score", 0);
    }

    ctx.font = "20px 'PT Sans Caption', sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center"

    ctx.fillText(`SCORE<1>`, x, y);
    ctx.fillText(`${score}`, x - pady, y + pady);

    ctx.fillText(`HI-SCORE<l>`, x + padx, y);
    ctx.fillText(`${highscore}`, x - pady + padx, y + pady);

    ctx.fillText(`SCORE<2>`, x + padx + padx, y);
}
