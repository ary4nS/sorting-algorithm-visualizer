document.addEventListener("DOMContentLoaded", function () {

    // Function to generate random numbers 
    function randomNumberGenerator(N) {
        const random = [];

        for (let i = 0; i < N; i++) {
            const number = Math.floor(Math.random() * 65);
            random.push(number);
        }

        return random;
    }

    // Elements related to range slider
    // Range slider for array size
    const slider = document.querySelector('.slider');


    // Elements related to the bar container
    const barContainer = document.querySelector('.bar-ctn');

    // Global slider value 
    let sliderValue = 3;

    // When the project loads, three bars must be displayed by default 
    const arr = randomNumberGenerator(3);

    arr.forEach((value, i) => {
        const bar = document.createElement('div');
        bar.className = 'bar';

        const sides = ['top', 'bottom', 'right', 'left', 'front', 'back'];
        sides.forEach((sideName) => {
            const side = document.createElement('div');
            side.className = `side ${sideName}`;

            if (['back', 'right', 'front', 'left'].includes(sideName)) {
                const colorBar = document.createElement('div');
                colorBar.className = 'color-bar';

                // Setting the height of the color bar
                colorBar.style.height = `${value}vh`;
                colorBar.style.transform = `translateY(${70 - value}vh)`;

                side.appendChild(colorBar);
            }
            bar.appendChild(side);
        });
        barContainer.appendChild(bar);
    });

    // Handling the input event 
    slider.addEventListener(
        'input', () => {

            // clearing the inner html contents of barContainer
            barContainer.innerHTML = '';

            sliderValue = slider.value;
            const arr = randomNumberGenerator(sliderValue);

            arr.forEach((value, i) => {
                const bar = document.createElement('div');
                bar.className = 'bar';

                const sides = ['top', 'bottom', 'right', 'left', 'front', 'back'];
                sides.forEach((sideName) => {
                    const side = document.createElement('div');
                    side.className = `side ${sideName}`;

                    if (['back', 'right', 'front', 'left'].includes(sideName)) {
                        const colorBar = document.createElement('div');
                        colorBar.className = 'color-bar';

                        // Setting the height of the color bar
                        colorBar.style.height = `${value}vh`;
                        colorBar.style.transform = `translateY(${70 - value}vh)`;

                        side.appendChild(colorBar);
                    }
                    bar.appendChild(side);
                });
                barContainer.appendChild(bar);
            });
        }
    );

    // Elements related to buttons 
    const generateNewArrayBtn = document.querySelector('.gen-btn')


    // Elements related to the bars
    const bars = document.querySelectorAll('.bar');
    const sides = document.querySelectorAll('.side');
    console.log(bars);
    console.log(sides);


    // Handling the generate new array button 
    generateNewArrayBtn.addEventListener(
        'click', () => {
            generateNewArrayBtn.classList.add('clickable');

            sliderValue = slider.value;
            const arr = randomNumberGenerator(sliderValue);

            let index = 0;

            bars.forEach((bar) => {
                sides.forEach((side) => {
                    if (['back', 'right', 'front', 'left'].includes(side.classList)) {
                        let value = arr[index++];
                        console.log(value);
                        const colorBar = side.querySelector('.color-bar');
                        colorBar.style.height = `${value}vh`;
                        colorBar.style.transform = `translateY(${70 - value}vh)`;
                    }
                });
            });

            setTimeout(() => {
                generateNewArrayBtn.classList.remove('clickable');
            }, 100);
        }
    );
}); 