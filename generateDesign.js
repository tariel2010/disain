// Генерация через DALL·E 3 API
async function generateDesign() {
    const description = document.querySelector('input').value;
    const response = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ description })
    });
    const image = await response.json();
    document.getElementById('design-canvas').src = image.url;
}
