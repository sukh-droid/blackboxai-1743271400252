function checkCollision(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

function checkHit(player, opponent) {
    // Simple hit detection based on proximity and facing direction
    const distance = Math.abs(player.x - opponent.x);
    const isFacingOpponent = (player.facingRight && player.x < opponent.x) || 
                            (!player.facingRight && player.x > opponent.x);

    return distance < 60 && isFacingOpponent && player.attacking;
}

function updateHealthBars() {
    document.getElementById('player1Health').style.width = `${player1.health}%`;
    document.getElementById('player2Health').style.width = `${player2.health}%`;
}

// Export collision functions
window.checkCollision = checkCollision;
window.checkHit = checkHit;
window.updateHealthBars = updateHealthBars;