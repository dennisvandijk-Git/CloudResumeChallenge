const visitsCount = document.getElementById("visits-count");

let visitCount = sessionStorage.getItem("visit")
  ? parseInt(sessionStorage.getItem("visit"))
  : 0;

visitCount += 1;

visitsCount.textContent = visitCount;

sessionStorage.setItem("visit", visitCount);