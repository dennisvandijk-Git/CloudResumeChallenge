// Scroll to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scroffFunction();
};

function scroffFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    mybutton.style.pointerEvents = "auto";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.pointerEvents = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  mybutton.blur();
}

// Visitor Counter
const visitsCount = document.getElementById("visits-count");

const fetchVisitorCount = async () => {
  try {
    const response = await fetch(
      "https://visitor-counter-api-http-trigger.azurewebsites.net/api/visitor_counter"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    const key_value = data.VisitorCount;
    console.log(key_value);

    if (visitsCount) {
      visitsCount.textContent = "Visits: " + key_value;
    } else {
      console.error("Element with ID 'visits-count', not found.");
    }
  } catch (error) {
    console.log("There was an error", error);
  }
};

fetchVisitorCount();
