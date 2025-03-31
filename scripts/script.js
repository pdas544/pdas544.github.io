$(document).ready(function () {
  $(".nav-item a").on("click", function () {
    // Get the text of the clicked anchor
    const anchorText = $(this).text().trim();

    // Remove 'active' class from all nav-links
    $(".nav-item a").removeClass("active");

    // Check the anchor text and toggle 'active' class
    $(".nav-item a").each(function () {
      if ($(this).text().trim() === anchorText) {
        $(this).addClass("active");
      }
    });
  });
});
