const textArea = document.getElementById('text');
const wordCount = document.getElementById('wordCount');

textArea.addEventListener('input', function() {
    const text = this.value.trim();
    const words = text.split(/\s+/).filter(word => word !== '');
    wordCount.textContent = words.length;
});
