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
    slides[slideIndex].style.opacity = 0; // Define a opacidade inicial

    // Ativa a transição após um pequeno intervalo
    setTimeout(function() {
      slides[slideIndex].style.transition = "opacity 0.5s ease";
      slides[slideIndex].style.opacity = 1; // Define a opacidade para 1 para exibir o slide
    }, 100);
  }

  // Embaralha a ordem dos slides
  var slideIndexes = Array.from(Array(slides.length).keys());
  shuffleArray(slideIndexes);

  // Exibe o primeiro slide inicialmente
  showSlide(slideIndexes[currentSlide]);

  // Botão "Próximo" - avança para o próximo slide
  var nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", function() {
    slides[slideIndexes[currentSlide]].style.transition = "opacity 0.5s ease";
    slides[slideIndexes[currentSlide]].style.opacity = 0; // Define a opacidade para 0 para ocultar o slide atual
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0; // Volta para o primeiro slide se chegar ao último
    }
    showSlide(slideIndexes[currentSlide]);
  });

  // Botão "Anterior" - volta para o slide anterior
  var prevButton = document.getElementById("prevButton");
  prevButton.addEventListener("click", function() {
    slides[slideIndexes[currentSlide]].style.transition = "opacity 0.5s ease";
    slides[slideIndexes[currentSlide]].style.opacity = 0; // Define a opacidade para 0 para ocultar o slide atual
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1; // Volta para o último slide se estiver no primeiro
    }
    showSlide(slideIndexes[currentSlide]);
  });

  // Função para embaralhar um array usando o algoritmo de Fisher-Yates
  function shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});
