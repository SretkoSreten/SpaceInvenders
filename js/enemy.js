class Enemy
{
    constructor(x, y, px, py, sWidth, sHeight, health, damage, color)
    {
        this.w = 30;
        this.h = 30;
        this.x = x;
        this.y = y;
        this.px = px;
        this.py = py;
        this.color = color;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.health = health;
        this.damage = damage;
        this.imageUrl = "D:/Projects/WebProjects/Games/space-invenders/images/invaders.png"; 
        this.sprite = new SpriteSheet(this.imageUrl, this.px, this.py, this.sWidth, this.sHeight, this.w, this.h);
        this.counter = 0;
        this.counterAnim = 0;
        this.animateIndex = 0;
        this.timeToShot = random(1, 2);
        this.animates = [{x : this.px, y: this.py}, {x: this.px, y : this.py + 18}];
    }
    draw()
    {
        this.sprite.draw(this.x, this.y);
    }
    update(dt)
    {
        this.counter += dt;

        this.counterAnim += dt;

        this.animateIndex += 1;

        if (this.counter > this.timeToShot)
            this.shot();

        if (this.animateIndex % this.animates.length == 0)
            this.animateIndex = 0;

        if (this.counterAnim > 0.15)
            this.animate(this.animateIndex);
    }
    animate(index)
    {
        this.counterAnim = 0;

        this.px = this.animates[index].x;
        this.py = this.animates[index].y;

        this.sprite.updateSprite(this.px, this.py)
    }
    checkDeath()
    {
        if (this.health <= 0){ 
            score++;
            let index = enemies.indexOf(this);
            enemies.splice(index, 1);
            checkWinner();
            setNextLevel();
        }
    }
    shot()
    {
        this.counter = 0;
        let x = this.x + this.w / 2 - 2;
        let y = this.y + 10;
        let color = this.color;
        let diry = 1;

        let bullet = new Bullet(x, y, diry, color, this.damage, false)
        bullets.push(bullet);
    }
    collison(bullet)
    {
        let bottomOfBall = bullet.y + bullet.w;
        let topOfBall = bullet.y;
      
        let topOfObject = this.y;
        let leftSideOfObject = this.x;
        let rightSideOfObject = this.x + this.w;
        let bottomOfObject = this.y + this.h;
      
        if (
          bottomOfBall >= topOfObject &&
          topOfBall <= bottomOfObject &&
          bullet.x >= leftSideOfObject &&
          bullet.x + bullet.w <= rightSideOfObject
        ) {
            return true;
        } else {
          return false;
        }
    }
}