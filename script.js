let currentPage = 1;

function nextPage() {
  const pages = document.querySelectorAll('.page');
  pages[currentPage - 1].classList.remove('active');
  currentPage++;
  if (currentPage > pages.length) {
    currentPage = 1; // Loop back to the first page
  }
  pages[currentPage - 1].classList.add('active');
}

function resetPages() {
  const pages = document.querySelectorAll('.page');
  pages[currentPage - 1].classList.remove('active');
  currentPage = 1;
  pages[currentPage - 1].classList.add('active');
}
