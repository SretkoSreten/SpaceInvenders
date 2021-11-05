const drawWalls = () => {

    for (let i = 0; i < WALLS_NUMBER_ROWS; i++)
    {
        const x = i + MARGIN_LEFT; 
        for (let j = 0; j < WALLS_NUMBER_COLS; j++){
            const y = j + MARGIN_TOP;
            var wall = new Wall(x, y, PADDING_HORIZONTAL);
            walls.push(wall);
        }
    }
}

const updateEnemies = (dt) => {

    const dx = Math.sin(dt / 1000.0) * 0.5;
    const dy = Math.cos(dt / 1000.0) * 0.5;
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      enemy.x += dx;
      enemy.y += dy;
    }
}
const updateCollison = (enemies, bullets) => {

    for (let j = 0; j < enemies.length; j++)
    {
        enemies[j].draw();
        enemies[j].update(dt);

        for (let i = 0; i < bullets.length; i++)
        {
            let bullet = bullets[i];

            if (enemies[j] && enemies[j].collison(bullet) && bullet.player){
                enemies[j].health -= bullet.damage;
                enemies[j].checkDeath();
                bullet.destroy();
            }
        }
    }
}
const updateCollisonWall = (enemies, bullets) => {

    for (let j = 0; j < enemies.length; j++)
    {
        enemies[j].draw();
        enemies[j].update(dt);

        for (let i = 0; i < bullets.length; i++)
        {
            let bullet = bullets[i];

            if (enemies[j] && enemies[j].collison(bullet)){
                enemies[j].health -= bullet.damage;
                enemies[j].checkDeath();
                bullet.destroy();
            }
        }
    }
}
const drawEnemies = (game_state, level) => {

    const state = game_state[level - 1];
    const enemySpacing = (canvas.width - state.ENEMIES_PADDING_HORIZONTAL * 2) / (state.ENEMIES_NUMBER_ROWS - 1);
    for (let j = 0; j < state.ENEMIES_NUMBER_COLS; j++) {
        const y = state.ENEMIES_PADDING_VERTICAL + j * ENEMIES_SPACING_VERTICAL;
        for (let i = 0; i < state.ENEMIES_NUMBER_ROWS; i++) {
            const x = i * enemySpacing + state.ENEMIES_PADDING_HORIZONTAL;
            let enemy = new Enemy(x, y, state.px, state.py, state.sWidth, state.sHeight, state.health, state.damage,
                state.color)
            enemies.push(enemy);
        }
    }
}

const updateCollisonPlayer = (player, bullets) => {

    for (let i = 0; i < bullets.length; i++)
    {
        let bullet = bullets[i];

        bullet.draw();
        bullet.update();

        if (player && player.collison(bullet) && !bullet.player){
            player.health -= bullet.damage;
            player.checkDeath();
            bullet.destroy();
        }
    }
}

const timestamp = (prev_time) => {
    let now = Date.now();
    dt = (now - prev_time) / 1000;
    return now;
}

function random(min, max) {
    return min + Math.random() * (max - min);
}
