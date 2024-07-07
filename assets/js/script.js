$(document).ready(function() {
    $(".contact-body").css("height", $(".form-body").height());
  });

  function displayProject(button) {
    var projectName = button.getAttribute('data-name'); // Get the value of data-name attribute
    const headerHeight = $("header").height();
    console.log("Displaying project:", projectName)
    $.get('assets/includes/' + projectName + '.html')
    .done(function(html) {
      console.log(html); // Log the response text
      $("#portfolio_content").html(html); // Set the response text as the HTML content of #portfolio-content
    })
    .fail(function(xhr, status, error) {
      console.error("Error loading HTML:", error);
    });
    scrollTo({
      top: headerHeight,
      behavior: 'smooth',
    })
  }

