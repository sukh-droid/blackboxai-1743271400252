// Track keyboard state
const keys = {};

// Key event listeners
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    
    // Prevent default for arrow keys and space to avoid page scrolling
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Prevent context menu on right click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Export keys object
window.keys = keys;