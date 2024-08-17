document.getElementById('saveButton').addEventListener('click', function() {
    const content = document.getElementById('editor').innerHTML;
    localStorage.setItem('savedContent', content);
    alert('Content saved!');
});

window.onload = function() {
    const savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        document.getElementById('editor').innerHTML = savedContent;
    }
};
