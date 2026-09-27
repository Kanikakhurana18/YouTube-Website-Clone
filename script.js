const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
    const searchText = searchInput.value.trim();

    if (searchText !== '') {
        alert('You searched for: ' + searchText);
    }
});

searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

const videos = document.querySelectorAll('.video-preview');

videos.forEach(function (video) {
    video.addEventListener('click', function () {
        const title = video.querySelector('.video-title').textContent.trim();

        alert('Opening video: ' + title);
    });
});

const menuButton = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('hide-sidebar');
});

const notificationCount = document.querySelector('.notifications-count');
const randomNumber = Math.floor(Math.random() * 10) + 1;
notificationCount.textContent = randomNumber;

const profilePicture = document.querySelector('.current-user-picture');
profilePicture.addEventListener('click', function () {
    alert('Profile clicked!');
});