document.addEventListener("DOMContentLoaded", function() {
  var slides = document.getElementsByClassName("slide");
  var currentSlide = 0;

  function showSlide(slideIndex) {
    // Oculta todos os slides
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Exibe o slide atual
    slides[slideIndex].style.display = "block";
  }

  // Exibe o primeiro slide inicialmente
  showSlide(currentSlide);

  // Botão "Próximo" - avança para o próximo slide
  var nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", function() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0; // Volta para o primeiro slide se chegar ao último
    }
    showSlide(currentSlide);
  });

  // Botão "Anterior" - volta para o slide anterior
  var prevButton = document.getElementById("prevButton");
  prevButton.addEventListener("click", function() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1; // Volta para o último slide se estiver no primeiro
    }
    showSlide(currentSlide);
  });
});
