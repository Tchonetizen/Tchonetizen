function incrementShareCount() {
    const shareCountElement = document.getElementById('share-count');
    let currentCount = parseInt(shareCountElement.textContent);
    currentCount++;
    shareCountElement.textContent = currentCount;
}
