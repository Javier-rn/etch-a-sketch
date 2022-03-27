const container = document.querySelector('.container');

function makeGrid(size) {
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    size = size * size;
    for (let i = 0; i < size; i++) {
        const newBox = document.createElement('div');
        newBox.classList.toggle('box');
        newBox.addEventListener('mouseover', function () {
            newBox.style.backgroundColor = 'black';
        });

        container.appendChild(newBox);
    }
}

makeGrid(16);
