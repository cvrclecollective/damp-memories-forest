document.addEventListener('DOMContentLoaded', () => {
    const plantBtn = document.getElementById('plant-btn');
    const memoryInput = document.getElementById('memory-input');
    const forestCanvas = document.getElementById('forest-canvas');

    // List of the images you saved in assets/trees/
    const treeImages = [
        'assets/trees/tree_cluster_blue.png',
        'assets/trees/tree_cluster_blue_purple.png',
        'assets/trees/tree_cluster_green.png',
        'assets/trees/tree_ink_willow.png',
        'assets/trees/tree_ink_bare.png',
        'assets/trees/tree_scrap_combined.png'
    ];

    plantBtn.addEventListener('click', () => {
        const text = memoryInput.value.trim();

        if (text !== "") {
            plantTree(text);
            memoryInput.value = ""; // Clear the box after planting
        }
    });

    function plantTree(text) {
        // Create the tree element
        const treeDiv = document.createElement('div');
        treeDiv.className = 'tree';

        // Pick a random tree image from your folder
        const randomTree = treeImages[Math.floor(Math.random() * treeImages.length)];

        // Build the HTML structure
        treeDiv.innerHTML = `
            <img src="${randomTree}" alt="Tree">
            <span>${text}</span>
        `;

        // Random Position: 
        // Left: anywhere from 5% to 85%
        // Top: anywhere from 10% to 60% (so they don't go off the bottom)
        const randomLeft = Math.floor(Math.random() * 80) + 5;
        const randomTop = Math.floor(Math.random() * 50) + 10;

        treeDiv.style.left = `${randomLeft}%`;
        treeDiv.style.top = `${randomTop}%`;

        // Add a random slight rotation to the whole tree for an organic feel
        const randomRotation = Math.floor(Math.random() * 10) - 5;
        treeDiv.style.transform = `rotate(${randomRotation}deg)`;

        forestCanvas.appendChild(treeDiv);
    }
});
