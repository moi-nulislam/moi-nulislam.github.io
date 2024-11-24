function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


const anchor = document.getElementById("myAnchor");

  anchor.addEventListener("click", function () {
    anchor.classList.toggle("active");
  });