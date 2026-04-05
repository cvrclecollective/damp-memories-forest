// script.js
document.addEventListener('DOMContentLoaded', () => {
    const plantBtn = document.getElementById('plant-btn');
    const memoryInput = document.getElementById('memory-input');
    const forest = document.getElementById('forest-canvas');

    plantBtn.addEventListener('click', () => {
        const text = memoryInput.value;
        if (text) {
            createTree(text);
            memoryInput.value = ''; // Clear input
        }
    });

    function createTree(text) {
        const tree = document.createElement('div');
        tree.className = 'tree';
        tree.innerText = text;

        // Random positioning
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 70 + 10;

        tree.style.left = `${x}%`;
        tree.style.top = `${y}%`;

        // Add "Shine" animation
        tree.style.animation = `drift ${Math.random() * 5 + 5}s infinite alternate ease-in-out`;
        
        forest.appendChild(tree);
    }
});

/* The container for the tree and the note */
.memory-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
}

/* The actual "Sticky Note" (No image needed!) */
.sticky-note-text {
    background-color: #fdfae4; /* Pale paper yellow */
    color: #444;
    padding: 8px 12px;
    font-family: 'Handlee', cursive; /* A handwriting font */
    font-size: 14px;
    box-shadow: 2px 4px 8px rgba(0,0,0,0.1);
    border: 1px solid #eeead0;
    transform: rotate(-1deg); /* Slight tilt for realism */
    max-width: 150px;
    line-height: 1.2;
    text-align: center;
    margin-top: -10px; /* Pulls it up slightly toward the tree */
    position: relative;
}

/* Optional: Add a tiny "pin" or "tape" look */
.sticky-note-text::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 30px;
    height: 10px;
    background: rgba(255, 255, 255, 0.4);
    transform: translateX(-50%);
}
