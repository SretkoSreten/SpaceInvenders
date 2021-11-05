const GAME_STATE = 
[
    {
        py: 0,
        px: 0,
        sWidth: 22,
        sHeight: 15,
        health: 100,
        damage: 50,
        color: "#00ced1",
        ENEMIES_NUMBER_COLS: 1,
        ENEMIES_NUMBER_ROWS: 5,
        ENEMIES_PADDING_HORIZONTAL: 70,
        ENEMIES_PADDING_VERTICAL: 55,
        ENEMIES_SPACING_VERTICAL: 50,
    },
    {
        py: 0,
        px: 22,
        sWidth: 37 - 22,
        sHeight: 15,
        health: 100,
        damage: 50,
        color: "#ff00ff",
        ENEMIES_NUMBER_COLS: 1,
        ENEMIES_NUMBER_ROWS: 10,
        ENEMIES_PADDING_HORIZONTAL: 70,
        ENEMIES_PADDING_VERTICAL: 55,
        ENEMIES_SPACING_VERTICAL: 50,
    },
    {
        py: 0,
        px: 38,
        sWidth: 63 - 40,
        sHeight: 15,
        health: 100,
        damage: 50,
        color: "#96ded1",
        ENEMIES_NUMBER_COLS: 2,
        ENEMIES_NUMBER_ROWS: 10,
        ENEMIES_PADDING_HORIZONTAL: 70,
        ENEMIES_PADDING_VERTICAL: 55,
        ENEMIES_SPACING_VERTICAL: 50,
    },
]


const gameOver = () => {
    displayGameOver();
    playing = false;
    setHighScore();
}
const winnerOver = () => {
    playing = false;
    displayWinOver();
    setHighScore();
}
const setNextLevel = () => {
    let len = GAME_STATE.length;
    if (enemies.length <= 0 && level < len){
        playing = false;
        level += 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        displayNextLevel(level);
        setHighScore();
        setTimeout(() => {playing = true, setup()}, 1500);
    }
}

const setHighScore = () => {

    let bestScore = localStorage.getItem("best_score");
    if (bestScore != null)
        if (score > bestScore)
            localStorage.setItem("best_score", score);
}

const checkWinner = () => {
    let len = GAME_STATE.length;
    if (level == len && enemies.length <= 0){
        setTimeout(() => winnerOver(), 1500)
    }
}