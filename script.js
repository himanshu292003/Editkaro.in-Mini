const videoData = [
    { id: '1yU77_jxd80W0KX7dcyZDyE-nZV7ae8V1', title: 'Viral Edit', category: 'Short Form' },
    { id: '1ucc7-UAK-NF0VbRqAYrnKSe0FC95JK3l', title: 'Viral Edit', category: 'Short Form' },
    { id: '1msKoIXieXecn73Ggov7-K5Ncg-E_ZyVJ', title: 'Viral Edit', category: 'Short Form' },
    { id: '124ojD_Mb47nT47jREAGuT4B97F-6DUGK', title: 'Viral Edit', category: 'Short Form' },
    { id: '1U0ibXya1jmLwoDj1qvnhGfsGOFguAZw-', title: 'Viral Edit', category: 'Short Form' },
    { id: '1JFzqJtAM67m52dcsSuQJQI4J3GCGNONc', title: 'Viral Edit', category: 'Short Form' },
    { id: '1Oc0P-J0UFW8bO3kgyJ99v6Qth9kCkS7e', title: 'Viral Edit', category: 'Short Form' },
    { id: '13YxW_9aOEQVwZckVR8LZRPK6xAWsxUYe', title: 'YouTube Gaming Montage', category: 'Gaming Video' },
    { id: '1LlPn6ACK4uc7RIHHxC617MbpWg3WPwdK', title: 'Football Highlights Reel', category: 'Football Edits' },
    { id: '1LeB1BTVDXUlNPAztEoX7vUFHLITPE8Wy', title: 'Football Highlights Reel', category: 'Football Edits' },
    { id: '1WvF0RNkmXyJDmDYicLShM1EJ_hrAvQ0m', title: 'Product Showcase Ad', category: 'Ecommerce ADs' },
    { id: '19pGELOcPCiRE9MvFSgVGW0uU2kqoX1C-', title: 'Product Showcase Ad', category: 'Ecommerce ADs' },
    { id: '1KWDEYFB7kpZrsBBNmM1SC_GL9GtjbRX6', title: 'Product Showcase Ad', category: 'Ecommerce ADs' },
    { id: '1VKakYuT5RbpBcYOVIqp_KXwPzZGtK6fv', title: 'Mohok Mangal', category: 'Documentary Style' },
    { id: '1LMBXgn8gw0LD2LjsPmCR_pQXCacfZAV9', title: 'Mohok Mangal', category: 'Documentary Style' },
    { id: '1Us9oO28sjfLtelPR5ZZ_GL9KlhESFeD6', title: 'Nature Documentary Trailer', category: 'Documentary Style' },
    { id: '1Z44prGPhxNrI-EAnlAIjYPBaCcKsl-70', title: 'Cinematic Color Grade', category: 'Color Grading' },
    { id: '1DlDYiUlyCRQyBl-neNiCIV3szQnC-HtO', title: 'Anime Music Video', category: 'Anime Long Form' },
    { id: '12DKvqdCPlauiWfQxAFlfANfOa19iT4Cn', title: 'Anime Music Video', category: 'Anime Long Form' },
    { id: '1ULDUrM-j-fx40g7HgA6nggZPvCIbdR2_', title: 'Anime Music Video', category: 'Anime Long Form' },
    { id: '1phDRwovujmjm77B6vT0NnVfvX9Fb8EM2', title: 'Anime Music Video', category: 'Anime Long Form' },
    { id: '1J56RJ4AZaT7PpqsSmj6JZH1vhSkeH60r', title: 'Coco Cola Landing Page ADS', category: 'Ads' },
    { id: '1jlj2REncMmiYNLGY1KUby7OCtIkkiqH8', title: 'Comp', category: 'Ads' },
    { id: '1UeL5PBnsxFE0sCouQjCwQ_zd4WVygHye', title: 'GTA V', category: 'Ads' },
    { id: '159CqKZBe0K7TcAe7C9_8YxOqBY2wreRa', title: 'Long-form Vlog Edit', category: 'Long Video' },
    { id: '1QKFn-iT0_bB9EXXSCMqDQ5kxFCbK3VEg', title: 'Long-form Vlog Edit', category: 'Long Video' },
    { id: '1gUIJWzf8vRuWZqXuNnxqjK_x7oaFYNdP', title: 'Long-form Vlog Edit', category: 'Long Video' },
    { id: '1fi_X2WKhl6-qbfXlQT7YtbOaUYAMcV7v', title: 'Long-form Vlog Edit', category: 'Long Video' },
    { id: '12MfFG1fLFB_CvPKFO6gnPI4DjPAua4Dr', title: 'Long-form Vlog Edit', category: 'Long Video' },
];

const videoGrid = document.getElementById('videoGrid');
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeBtn = document.getElementsByClassName('close')[0];
const dropdown = document.querySelector('.dropdown');
const categorySections = document.querySelector('.category-sections');

function getThumbnailUrl(fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}`;
}

function createVideoItem(video) {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    videoItem.innerHTML = `
        <div class="video-thumbnail">
            <img src="${getThumbnailUrl(video.id)}" alt="${video.title}" width="300" height="200">
            <button class="play-button" data-video-id="${video.id}">▶</button>
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-category">${video.category}</p>
        </div>
    `;
    return videoItem;
}

function loadVideos(category = 'all') {
    videoGrid.innerHTML = '';
    const filteredVideos = category === 'all' 
        ? videoData 
        : videoData.filter(video => video.category === category);
    
    filteredVideos.forEach((video, index) => {
        const videoItem = createVideoItem(video);
        videoGrid.appendChild(videoItem);
        setTimeout(() => {
            videoItem.classList.add('fade-in');
        }, index * 100);
    });
}

function setActiveCategory(category) {
    document.querySelectorAll('.category-button, .dropdown a').forEach(element => {
        if (element.getAttribute('data-category') === category) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

videoGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('play-button')) {
        const videoId = e.target.getAttribute('data-video-id');
        videoPlayer.src = `https://drive.google.com/file/d/${videoId}/preview`;
        modal.style.display = 'block';
    }
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
    videoPlayer.src = '';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
    }
}

dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const category = e.target.getAttribute('data-category');
        loadVideos(category);
        setActiveCategory(category);
        showSection('portfolio');
    }
});

categorySections.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-button')) {
        const category = e.target.getAttribute('data-category');
        loadVideos(category);
        setActiveCategory(category);
    }
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Navigation and section display
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        if (sectionId === 'home' || sectionId === 'categories') {
            showSection('portfolio');
        } else {
            showSection(sectionId);
        }
    });
});

// Load all videos on page load and show portfolio section
loadVideos();
showSection('portfolio');