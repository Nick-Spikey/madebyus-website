let currentMainSrc = ''; // Keep track of the current main image

function openModal(item) {
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const img = document.getElementById('modal-img');
  const desc = document.getElementById('modal-description');
  const price = document.getElementById('modal-price');
  const size = document.getElementById('modal-size');
  const material = document.getElementById('modal-material');
  const extraContainer = document.querySelector('.extra-images');

  title.textContent = item.querySelector('h3').textContent;
  const mainSrc = item.querySelector('img').src;
  img.src = mainSrc;
  img.alt = title.textContent;

  // Populate dynamic info
  desc.textContent = item.dataset.description || `Handmade ${title.textContent} tailored to your needs.`;
  price.textContent = `Price: ${item.dataset.price || "Varies"}`;
  size.textContent = `Size: ${item.dataset.size || "Customizable"}`;
  material.textContent = `Material: ${item.dataset.material || "Varies"}`;

  // Clear old extra images
  extraContainer.innerHTML = '';

  const extras = item.dataset.extras ? item.dataset.extras.split(',') : [mainSrc];

  extras.forEach(src => {
    if (src === mainSrc) return; // skip main image

    const extraImg = document.createElement('img');
    extraImg.src = src;
    extraImg.alt = title.textContent + ' extra';

    extraImg.addEventListener('click', () => {
      const temp = img.src;
      img.src = extraImg.src;
      extraImg.src = temp;
    });

    extraContainer.appendChild(extraImg);
  });

  modal.style.display = 'block';
}


function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

const form = document.getElementById('customOrderForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page refresh

  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const item = form.item.value;
  const details = form.details.value;

  console.log({
    name,
    email,
    phone,
    item,
    details
  });

  alert("Thank you! Your inquiry has been submitted.");

  form.reset();
});