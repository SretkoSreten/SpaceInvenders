const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');


var ENEMIES_NUMBER_COLS = 2;
var ENEMIES_NUMBER_ROWS = 10;
var ENEMIES_PADDING_HORIZONTAL = 70;
var ENEMIES_PADDING_VERTICAL = 55;
var ENEMIES_SPACING_VERTICAL = 50;

const controllers = 
{
    left_arrow: 39,
    right_arrow: 37,
    shot_btn: 32,
}

const WALLS_NUMBER_ROWS = 5;
const WALLS_NUMBER_COLS = 1;
const PADDING_HORIZONTAL = 100;
const MARGIN_TOP = 3.7;
const MARGIN_LEFT = 0.7;

let bullets = [], walls = [], enemies = [];

let level = 1, score = 0;

let playing = false, startScreen = true;

let prev_time = Date.now();
let dt = 0;

const setup = () => {

    prev_time = Date.now();
    dt = 0;

    const player = new Player();

    drawWalls();
    
    drawEnemies(GAME_STATE, level);    

    const loop = () => {

        if (startScreen) 
        {
            drawStartScreen();
        }

        
        if (!playing) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        prev_time = timestamp(prev_time);

        drawCanvasBottom();
        drawCanvasHeader();

        drawGreenLine();
        updateEnemies(prev_time);
        updateCollisonPlayer(player, bullets)
        updateCollisonWall(walls, bullets)
        updateCollison(enemies, bullets)

        player.draw(dt);
        player.update(dt);
        window.requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener("keydown", e => player.keydown(e));
    window.addEventListener("keyup", e => player.keyup(e));
}
setup();