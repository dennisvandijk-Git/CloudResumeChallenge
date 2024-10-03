const visitsCount = document.getElementById("visits-count");

fetch(
  "https://visitor-counter-api-http-trigger.azurewebsites.net/api/access-key?",
  {
    signal: AbortSignal.timeout(5000),
  }
)
  .then((response) => response.json())
  .then((data) => {
    visitsCount.textContent = data[0].visitsCount;
  });
