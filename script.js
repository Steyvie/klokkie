function updateClock() {
    const now = new Date();
    
    const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    const day = days[now.getDay()];
    
    const date = now.getDate();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const formattedDate = `${day} ${date}/${month}/${year}`;
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = currentTime;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen().catch(err => {
            console.log(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
        });
    }
}

document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();