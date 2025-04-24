function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerhtml = searchInput.value;
}

let searchFormElement = document.querySelector("search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
