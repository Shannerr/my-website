document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const videoSection = document.getElementById('video-section');
    const mainContent = document.getElementById('main-content');
    const jumpscareVideo = document.getElementById('jumpscare-video');

    // Show the welcome message
    welcomeMessage.classList.remove('hidden');

    // After the welcome message fades out, show the video section
    setTimeout(() => {
        welcomeMessage.classList.add('hidden');
        videoSection.classList.remove('hidden');

        // Autoplay the video
        jumpscareVideo.play();
    }, 6000); // 2s for fadeIn + 2s display + 2s for fadeOut

    // After the video ends, show the main content
    jumpscareVideo.addEventListener('ended', () => {
        videoSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });
});
