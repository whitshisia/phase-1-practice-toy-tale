let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// Fetch Posts
fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((toys) => {
    displayToys(toys);
  })
  .catch((error) => {
    console.error('Error fetching toys:', error);
  });

function displayToys(toys) {
  let cardsContainer = document.getElementById("toy-collection");
  cardsContainer.innerHTML = ""; // Clear previous content
  
  toys.forEach((toy) => {
    let { id, name, image,likes } = toy; // Assuming toy object has id, name, and image properties
    cardsContainer.innerHTML += `
      <div class="toy-collection" >
        <div class="card">
          <h2>${name}</h2>
          <img src="${image}" class="toy-avatar" />
          <p>${likes} likes</p>
          <button class="like-btn" id="${id}">Like  ❤️</button>
          </div>
        </div>
      </div>
    `;
  });
}
