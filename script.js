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
