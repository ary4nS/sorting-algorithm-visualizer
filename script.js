document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------------------- FUNCTIONS ----------------------------------------------------

    // ---> to generate random numbers 
    function randomNumberGenerator(N) {
        const random = [];

        for (let i = 0; i < N; i++) {
            const number = Math.floor(Math.random() * 65);
            random.push(number);
        }

        return random;
    }

    // ---> to create bars 
    function createBars(arr) {
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

    // ----------------------------------------------------- ELEMENTS ----------------------------------------------------

    // ---> Slider
    const slider = document.querySelector('.slider');

    // ---> Bar container
    const barContainer = document.querySelector('.bar-ctn');

    // ---> Generate new array button
    const generateNewArrayBtn = document.querySelector('.gen-btn')



    // ---------------------------------------------------- LOGIC ----------------------------------------------------

    // ---> When the project loads, three bars must be displayed by default 
    createBars(randomNumberGenerator(3));


    // ---> Handling the Slider event  
    let sliderValue = 3;
    slider.addEventListener('input', () => {
        // Clear the inner HTML contents of barContainer
        barContainer.innerHTML = '';

        sliderValue = slider.value;
        const arr = randomNumberGenerator(sliderValue);

        createBars(arr);
    });


    // ---> HANDLING THE GENERATE ARRAY BUTTON
    generateNewArrayBtn.addEventListener('click', () => {

        generateNewArrayBtn.classList.add('clickable');

        // Clear the existing bars
        barContainer.innerHTML = '';
        const arr = randomNumberGenerator(sliderValue);
        createBars(arr);

        setTimeout(() => {
            generateNewArrayBtn.classList.remove('clickable');
        }, 100);
    });
});
