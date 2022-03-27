const container = document.querySelector('.container');
const clearBtn = document.getElementById('clear-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const sizeBtn = document.getElementById('size-btn');

let currentMode = 'normal';

makeGrid(16, 'normal');

function makeGrid(size, mode) {
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    size = size * size;
    for (let i = 0; i < size; i++) {
        const newBox = document.createElement('div');
        newBox.classList.toggle('box');
        newBox.addEventListener('mouseover', function () {
            if (mode === 'normal') {
                newBox.style.backgroundColor = 'black';
            } else if (mode === 'rainbow') {
                newBox.style.backgroundColor = randomColorGenerator();
            }
        });

        container.appendChild(newBox);
    }
}

clearBtn.addEventListener('click', function () {
    makeGrid(16, currentMode);
});

sizeBtn.addEventListener('click', function () {
    const size = prompt('Please select a size (4 - 32): ');
    if (size <= 32 && size >= 4) {
        makeGrid(size);
    } else {
        alert('Size must be between 4 and 32.');
    }
});

rainbowBtn.addEventListener('click', function () {
    if (currentMode === 'normal') {
        currentMode = 'rainbow';
        makeGrid(16, currentMode);
    } else if (currentMode === 'rainbow') {
        currentMode = 'normal';
        makeGrid(16, currentMode);
    }
});

function randomColorGenerator() {
    const num1 = Math.floor(Math.random() * 256) + 1;
    const num2 = Math.floor(Math.random() * 256) + 1;
    const num3 = Math.floor(Math.random() * 256) + 1;
    return `rgb(${num1}, ${num2}, ${num3})`;
}
