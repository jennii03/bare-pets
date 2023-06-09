var slideMq = window.matchMedia("(min-width: 479px)");

/* Sliding side navigation */
 function openSideNav() {
    document.getElementsByClassName("side-accordion__overflow-text")[0].style.display = "inline-block";
    document.querySelector(".side-accordion").style.zIndex = "1";

    if (slideMq.matches) {
    /* the viewport is at least 479 pixels wide */
        document.getElementById("slidingSideNav").style.width = "auto";
        document.getElementById("slidingSideNav").style.overflowY = "visible";
    } else {
    /* the viewport is less than 479 pixels wide */
        document.getElementById("slidingSideNav").style.width = "100%";
        document.getElementById("slidingSideNav").style.overflowY = "hidden";
    }
}
slideMq.addListener(function(changed) {
    document.getElementById("slidingSideNav").style.width = "0";
    document.getElementById("slidingSideNav").style.display = "none";
});

jQuery(document).on('click', '.side-accordion__overflow-text', function() {
    closeSideNav();
    document.querySelector(".side-accordion").style.zIndex = "2";
});

function closeSideNav() {
    document.getElementById("slidingSideNav").style.width = "0%";
    document.getElementsByClassName("side-accordion__overflow-text")[0].style.display = "none";
}

  // Get all checkboxes
  const checkboxes = document.querySelectorAll('.checkbox');

  // Add event listener to each checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // Uncheck other checkboxes
      checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    });
  });