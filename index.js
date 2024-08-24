document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("dashboard-btn")
    .addEventListener("click", function () {
      // Implement logic for Dashboard button click, if needed
    });

  document
    .getElementById("jobs-applications-btn")
    .addEventListener("click", function () {
      toggleDropdown("jobs-applications-submenu");
    });

  document
    .getElementById("companies-btn")
    .addEventListener("click", function () {
      toggleDropdown("companies-submenu");
    });

  function toggleDropdown(menuId) {
    var subMenu = document.getElementById(menuId);
    var allSubMenus = document.querySelectorAll(".sub-menu");

    // Hide all submenus
    allSubMenus.forEach(function (menu) {
      if (menu.id !== menuId) {
        menu.classList.remove("active");
      }
    });

    // Toggle the selected submenu
    subMenu.classList.toggle("active");
  }

  document
    .getElementById("companies-btn")
    .addEventListener("click", function () {
      this.classList.toggle("active");
    });

  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
  });

  document
    .getElementById("menu-toggle-button")
    .addEventListener("click", function () {
      var menu = document.getElementById("menu-responsive");
      menu.classList.toggle("show");
    });
});
