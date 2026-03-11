
const imageInput = document.getElementById('image-input');
const uploadedImage = document.getElementById('uploaded-image');
const analyzeButton = document.getElementById('analyze-button');
const resultsSection = document.querySelector('.results-section');
const resultsContent = document.getElementById('results-content');

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
            analyzeButton.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

analyzeButton.addEventListener('click', () => {
    resultsSection.style.display = 'block';
    resultsContent.innerHTML = '<p>Analyzing...</p>';

    setTimeout(() => {
        const results = {
            Pore: `${Math.floor(Math.random() * 21) + 70}%`,
            Wrinkle: `${Math.floor(Math.random() * 21) + 60}%`,
            Acne: `${Math.floor(Math.random() * 11) + 85}%`,
            Moisture: `${Math.floor(Math.random() * 21) + 40}%`,
        };

        let table = '<table><thead><tr><th>Analysis</th><th>Result</th></tr></thead><tbody>';
        for (const [key, value] of Object.entries(results)) {
            table += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
        table += '</tbody></table>';

        resultsContent.innerHTML = table;
    }, 2000);
});
