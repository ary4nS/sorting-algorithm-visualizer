document.addEventListener("DOMContentLoaded", function () {

    // Function to generate random numbers 
    function randomNumberGenerator(N) {
        const random = [];

        for (let i = 0; i < N; i++) {
            const number = Math.floor(Math.random() * N);
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
            let sliderValue = slider.value;
            const arr = randomNumberGenerator(sliderValue);

            arr.forEach((value, i) => {
                const bar = document.createElement('div');
                bar.className = 'bar';

                const sides = ['top', 'bottom', 'right', 'left', 'front', 'back'];
                sides.forEach((sideName) => {
                    const side = document.createElement('div');
                    side.className = `side ${sideName}`;

                    if (['back', 'right', 'front'].includes(sideName)) {

                    }
                });
            });
        }
    );
});