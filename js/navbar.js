const searchIcon = document.getElementById('searchIcon');
const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');
const searchingMessage = document.getElementById('searchingMessage');

searchIcon.addEventListener('click', () => {
    // Toggle search box visibility
    searchBox.classList.toggle('d-none');
    searchBox.classList.toggle('show-search');
});

searchButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    searchBox.classList.add('d-none'); // Hide the search box
    searchingMessage.classList.remove('d-none'); // Show the searching message
});

searchButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    searchBox.classList.add('d-none'); // Hide the search box
    searchingMessage.classList.remove('d-none'); // Show the searching message
    
    // Simulate a delay for search (e.g., 2 seconds)
    setTimeout(() => {
        searchingMessage.classList.add('d-none'); // Hide the searching message
        // Add logic to show search results here
    }, 2000);
});