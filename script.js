// Scroll to top
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scroffFunction();
};

function scroffFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    mybutton.style.pointerEvents = "auto";
    mybutton.style.display = "flex";
    // mybutton.classList.remove("active");
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.pointerEvents = "none";
    mybutton.style.display = "none";
  }
}

function topFunction() {
  mybutton.classList.add("active");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  const checkInterval = setInterval(() => {
    if (
      document.body.scrollTop === 0 &&
      document.documentElement.scrollTop === 0
    ) {
      clearInterval(checkInterval);

      if (document.body.classList.contains("index")) {
        mybutton.style.backgroundColor = "#79b791";
      } else {
        mybutton.style.backgroundColor = "#9179b7";
      }
      setTimeout(() => {
        mybutton.classList.remove("active");
        // mybutton.style.backgroundColor = "";
        mybutton.blur();
      }, 100);
    }
    // mybutton.blur();
    // mybutton.classList.remove("active");
  }, 100);
}
console.log(document.activeElement === mybutton);

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
