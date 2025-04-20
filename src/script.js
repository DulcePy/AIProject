function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "9234dd59ca8092tfabb2o8078c5f4477";
  let promptt = `User instructions: Generate a poem about ${instructionsInput}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${promptt}&context=${context}&key=${apiKey}`;
  // make call to the API
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
