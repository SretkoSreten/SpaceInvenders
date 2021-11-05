class Wall
{
    constructor(i, j, pad)
    {
        this.health = 100;
        this.pad = pad;
        this.w = 40;
        this.h = 30;
        this.x = i * (this.w + this.pad);
        this.y = j * (this.h + this.pad);
        this.imageUrl = "D:/Projects/WebProjects/Games/space-invenders/images/invaders.png"; 
        this.sprite = new SpriteSheet(this.imageUrl, 84, 0, 118 - 84, 32, this.w, this.h);
    }
    draw(dt)
    {
        this.sprite.draw(this.x, this.y);
    }
    update(dt)
    {
        
    }
    checkDeath()
    {
        if (this.health <= 0){ 
            let index = walls.indexOf(this);
            walls.splice(index, 1);
        }
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