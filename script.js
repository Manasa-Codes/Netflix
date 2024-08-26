document.getElementById('search-icon').addEventListener('click', function() {
    var searchBarContainer = document.getElementById('search-bar-container');
    if (searchBarContainer.style.display === 'block') {
        searchBarContainer.style.display = 'none';
    } else {
        searchBarContainer.style.display = 'block';
    }
});

const row = document.querySelector('.first-row');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
    row.scrollBy({ left: -400, behavior: 'smooth' });
});

arrowRight.addEventListener('click', () => {
    row.scrollBy({ left: 400, behavior: 'smooth' });
});

function playVideo(videoId) {
    const video = document.getElementById(videoId);
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
}
