const bulbContainer = document.getElementById('bulbContainer');
const controls = document.getElementById('controls');
const startBtn = document.getElementById('startBtn');
const addBulbBtn = document.getElementById('addBulbBtn');

startBtn.addEventListener('click', function() {
    controls.style.display = 'block';
    startBtn.style.display = 'none'; // Hide start button
});

addBulbBtn.addEventListener('click', function() {
    const numBulbs = parseInt(document.getElementById('numBulbs').value);

    
    bulbContainer.innerHTML = '';

    // Loop to add the specified number of bulbs
    for (let i = 0; i < numBulbs; i++) {
        const bulbImage = document.createElement('img');
        bulbImage.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png'; 
        bulbImage.classList.add('bulb');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                bulbImage.src = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png'; 
            } else {
                bulbImage.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png'; 
            }
        });

        const label = document.createElement('label');
        label.innerText = 'Light Bulb';

        const bulbWrapper = document.createElement('div');
        bulbWrapper.appendChild(bulbImage);
        bulbWrapper.appendChild(checkbox);
        bulbWrapper.appendChild(label);

        bulbContainer.appendChild(bulbWrapper);
    }

   
    addBulbBtn.style.display = 'none';
});
