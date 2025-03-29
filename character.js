class Character {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 100;
        this.color = color;
        this.velocityY = 0;
        this.speed = 5;
        this.jumpPower = 15;
        this.isJumping = false;
        this.health = 100;
        this.attacking = false;
        this.facingRight = color === 'red';
    }

    update(keys) {
        // Horizontal movement
        if (this.color === 'red') {
            if (keys['a']) { this.x -= this.speed; this.facingRight = false; }
            if (keys['d']) { this.x += this.speed; this.facingRight = true; }
            if (keys['w'] && !this.isJumping) {
                this.velocityY = -this.jumpPower;
                this.isJumping = true;
            }
        } else {
            if (keys['ArrowLeft']) { this.x -= this.speed; this.facingRight = false; }
            if (keys['ArrowRight']) { this.x += this.speed; this.facingRight = true; }
            if (keys['ArrowUp'] && !this.isJumping) {
                this.velocityY = -this.jumpPower;
                this.isJumping = true;
            }
        }

        // Apply gravity
        this.y += this.velocityY;
        this.velocityY += 0.8;

        // Ground collision
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.velocityY = 0;
            this.isJumping = false;
        }

        // Boundary checks
        this.x = Math.max(0, Math.min(canvas.width - this.width, this.x));
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Draw face direction indicator
        ctx.fillStyle = 'black';
        const eyeX = this.facingRight ? this.x + this.width - 10 : this.x + 10;
        ctx.beginPath();
        ctx.arc(eyeX, this.y + 20, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}