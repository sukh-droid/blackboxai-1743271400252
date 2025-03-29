const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let player1, player2;
let keys = {};

// Initialize game
function init() {
    player1 = new Character(50, canvas.height - 100, 'red');
    player2 = new Character(canvas.width - 100, canvas.height - 100, 'blue');
    requestAnimationFrame(gameLoop);
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
    // Handle player movements and attacks
    player1.update(keys);
    player2.update(keys);

    // Check for attacks
    if (checkHit(player1, player2)) {
        player2.health -= 5;
        updateHealthBars();
    }
    if (checkHit(player2, player1)) {
        player1.health -= 5;
        updateHealthBars();
    }

    // Check for game over
    if (player1.health <= 0 || player2.health <= 0) {
        const winner = player1.health > 0 ? 'Player 1' : 'Player 2';
        alert(`${winner} wins!`);
        resetGame();
    }
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw(ctx);
    player2.draw(ctx);
}

// Reset game state
function resetGame() {
    player1.health = 100;
    player2.health = 100;
    player1.x = 50;
    player2.x = canvas.width - 100;
    player1.y = player2.y = canvas.height - 100;
        updateHealthBars();
}

// Start the game
init();
