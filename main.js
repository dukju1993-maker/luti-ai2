
const imageInput = document.getElementById('image-input');
const uploadedImage = document.getElementById('uploaded-image');
const analyzeButton = document.getElementById('analyze-button');
const resultsSection = document.querySelector('.results-section');
const resultsContent = document.getElementById('results-content');
const themeToggle = document.getElementById('theme-toggle');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Auth Button Listeners
loginBtn.addEventListener('click', () => {
    alert('로그인 기능은 곧 추가될 예정입니다!');
});

signupBtn.addEventListener('click', () => {
    alert('회원가입 기능은 곧 추가될 예정입니다!');
});

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
    resultsContent.innerHTML = '<p>분석 중...</p>';

    setTimeout(() => {
        const results = {
            '모공': `${Math.floor(Math.random() * 21) + 70}%`,
            '주름': `${Math.floor(Math.random() * 21) + 60}%`,
            '트러블': `${Math.floor(Math.random() * 11) + 85}%`,
            '수분': `${Math.floor(Math.random() * 21) + 40}%`,
        };

        let table = '<table><thead><tr><th>분석 항목</th><th>결과</th></tr></thead><tbody>';
        for (const [key, value] of Object.entries(results)) {
            table += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
        table += '</tbody></table>';

        resultsContent.innerHTML = table;
    }, 2000);
});
