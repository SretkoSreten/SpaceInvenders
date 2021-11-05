class Player
{
    constructor()
    {
        this.health = 100;
        this.damage = 100;
        this.w = 30;
        this.h = 20;
        this.x = (canvas.width / 2) - (this.w / 2);
        this.y = canvas.height - 70;
        this.speed = 5;
        this.imageUrl = "D:/Projects/WebProjects/Games/space-invenders/images/invaders.png"; 
        this.sprite = new SpriteSheet(this.imageUrl, 62, 0, 85 - 62, 15, this.w, this.h);
        this.left = false;
        this.right = false;
        this.counter = 0;
        this.timeToShot = 0.5;
        this.bullets = [];
    }
    draw(dt)
    {
        this.sprite.draw(this.x, this.y);
    }
    checkDeath()
    {
        if (this.health <= 0) gameOver();
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
    update(dt)
    {
        this.counter += dt;

        if (this.left && this.x > 20)
            this.x += this.speed;
        if (this.right && this.x < canvas.width - 20)
            this.x -= this.speed;

        this.x = this.clamp(
            this.x,
            this.w,
            canvas.width - this.w * 2
        );
    }
    shot()
    {
        this.counter = 0;
        let x = this.x + this.w / 2 - 2;
        let y = this.y;
        let color = "#7fff00";
        let diry = -1;

        let bullet = new Bullet(x, y, diry, color, this.damage, true)
        bullets.push(bullet);
    }
    clamp(v, min, max) {
        if (v < min) {
          return min;
        } else if (v > max) {
          return max;
        } else {
          return v;
        }
    }
    keydown(e)
    {
        if (e.keyCode == controllers.left_arrow)
            this.left = true;
        if (e.keyCode == controllers.right_arrow)
            this.right = true;
        if (e.keyCode == controllers.shot_btn &&
        this.counter > this.timeToShot)
            this.shot();
        
    }
    keyup(e)
    {
        if (e.keyCode == controllers.left_arrow)
            this.left = false;
        if (e.keyCode == controllers.right_arrow)
            this.right = false;
    }
}