const container = document.querySelector('.container');
const clearBtn = document.getElementById('clear-btn');
const sizeBtn = document.getElementById('size-btn');

function makeGrid(size) {
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    size = size * size;
    for (let i = 0; i < size; i++) {
        const newBox = document.createElement('div');
        newBox.classList.toggle('box');
        newBox.addEventListener('mouseover', function () {
            newBox.style.backgroundColor = randomColorGenerator();
        });

        container.appendChild(newBox);
    }
}

makeGrid(16);

clearBtn.addEventListener('click', function () {
    makeGrid(16);
});

sizeBtn.addEventListener('click', function () {
    const size = prompt('Please select a size (4 - 32): ');
    if (size <= 32 && size >= 4) {
        makeGrid(size);
    } else {
        alert('Size must be between 4 and 32.');
    }
});

function randomColorGenerator() {
    const num1 = Math.floor(Math.random() * 256) + 1;
    const num2 = Math.floor(Math.random() * 256) + 1;
    const num3 = Math.floor(Math.random() * 256) + 1;
    return `rgb(${num1}, ${num2}, ${num3})`;
}
