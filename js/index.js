const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const selectedOption = document.getElementById("selectedOption");
const options = dropdownMenu.querySelectorAll("li");

// Toggle dropdown menu visibility
dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
  dropdownMenu.classList.toggle("opacity-0");
  dropdownMenu.classList.toggle("opacity-100");
});

// Set selected option and close dropdown
options.forEach((option) => {
  option.addEventListener("click", () => {
    selectedOption.textContent = option.textContent;
    dropdownButton.setAttribute(
      "data-value",
      option.getAttribute("data-value")
    );
    dropdownMenu.classList.add("hidden");
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!dropdownButton.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

// For Testing
function selectLang(lang) {
  if (lang !== "null") {
    console.log(`Your Lang Is ${lang}`);
    document.getElementById("selectedOption").innerText =
      lang.charAt(0).toUpperCase() + lang.slice(1);
  }
}
