
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('loader-hidden');
    }, 3000);
});

function showSection(id) {
    
    document.querySelectorAll('section').forEach(s => {
        s.classList.remove('active-section');
        s.classList.add('hidden');
    });
    
    const target = document.getElementById(id);
    target.classList.remove('hidden');
    target.classList.add('active-section');
}


function createBubbles() {
    const container = document.getElementById('bubble-container');
    for (let i = 0; i < 20; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        const size = Math.random() * 20 + 5 + 'px';
        b.style.width = size;
        b.style.height = size;
        b.style.left = Math.random() * 100 + '%';
        b.style.bottom = "-50px";
        b.style.setProperty('--d', Math.random() * 5 + 5 + 's');
        b.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(b);
    }
}
createBubbles();