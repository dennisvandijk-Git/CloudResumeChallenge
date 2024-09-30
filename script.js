const visitsCount = document.getElementById("visits-count");

fetch(
  "https://visitor-counter-api-http-trigger.azurewebsites.net/api/http_trigger_visitor_counter?"
)
  .then((response) => response.json())
  .then((data) => {
    visitsCount.textContent = data;
  });
