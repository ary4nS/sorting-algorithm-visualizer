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

    // Handling the input event 
    slider.addEventListener(
        'input', () => {

            // clearing the inner html contents of barContainer
            barContainer.innerHTML = '';

            let sliderValue = slider.value;
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
});