document.addEventListener('DOMContentLoaded', () => {
    let itemCount = 0;
    const itemCountSpan = document.getElementById('item-count');
    const collectButton = document.getElementById('collect-button');

    collectButton.addEventListener('click', () => {
        itemCount++;
        itemCountSpan.textContent = itemCount;
    });
});
