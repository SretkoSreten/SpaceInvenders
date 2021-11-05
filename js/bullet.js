class Bullet 
{
    constructor(x, y, diry, color, damage, player)
    {
        this.x = x;
        this.y = y;
        this.w = 4;
        this.h = 10;
        this.damage = damage;
        this.color = color;
        this.diry = diry;
        this.player = player;
        this.speed = 5;
    }
    draw()
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update()
    {
        this.y += (this.diry * this.speed);

        if (this.y > canvas.height || this.y < 0){
            let index = bullets.indexOf(this);
            bullets.splice(index, 1);
        }
    }
    destroy()
    {
        let index = bullets.indexOf(this);
        bullets.splice(index, 1);
    }
}