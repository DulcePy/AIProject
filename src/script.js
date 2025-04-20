function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: [
      "In the hush of morning light, Dreams take wing and hearts feel right.",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
