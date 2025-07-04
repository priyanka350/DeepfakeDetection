const videoUpload = document.getElementById('videoUpload');
const videoPlayer = document.getElementById('videoPlayer');

videoUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];

    // Check if a file was selected
    if (!file) {
        console.error('No file selected.');
        return;
    }

    // Check if the file is a video
    const validTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    if (!validTypes.includes(file.type)) {
        console.error('Invalid file type. Please upload a video file.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const videoData = event.target.result;
        videoPlayer.src = videoData;
        videoPlayer.load(); // Load the new video data
        videoPlayer.play(); // Optionally play the video immediately
    };

    reader.readAsDataURL(file);
});
