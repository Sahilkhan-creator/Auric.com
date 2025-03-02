// script.js
let currentPage = 1;
const totalPages = 5;

function nextPage() {
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage++;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
}

document.getElementById('page1').classList.add('active')
