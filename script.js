const visitsCount = document.getElementById("visits-count");

fetch(
  "https://visitor-counter-api-http-trigger.azurewebsites.net/api/access-key?"
)
  .then((response) => response.json())
  .then((data) => {
    visitsCount.textContent = data[0].visitsCount;
  });
