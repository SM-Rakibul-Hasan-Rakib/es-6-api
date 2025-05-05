// আইফোন সংক্রান্ত ডেটা লোড করার জন্য একটি অ্যাসিনক্রোনাস ফাংশন
const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;

  // ফোনগুলো দেখানোর ফাংশনে পাঠানো হচ্ছে
  displayPhones(phones);
};

// ফোনগুলো HTML-এ দেখানোর জন্য এই ফাংশন
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  // clear phone container cards before adding new cards
  phoneContainer.textContent = "";
  // display show all button if there are more then 12 phones
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  // display only first 12 phones
  phones = phones.slice(0, 12);
  // প্রতিটি ফোনের জন্য একটি কার্ড তৈরি করে কন্টেইনারে যোগ করা হচ্ছে
  phones.forEach((phone) => {
    // একটি div তৈরি করা হচ্ছে
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-sm`;

    // HTML ইনার তৈরি করা হচ্ছে ফোনের তথ্য দিয়ে
    phoneCard.innerHTML = `
      <figure>
         <img class="mt-4" src="${phone.image}" alt="Phone Image" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.brand}</h2>
        <p>${phone.phone_name}</p>
        <p>${phone.slug}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary w-full mt-3">Buy Now</button>
        </div>
      </div>
    `;

    // তৈরি করা কার্ডটি কন্টেইনারে যোগ করা হচ্ছে
    phoneContainer.appendChild(phoneCard);
  });
  // hide loading spinner
  toggleLOadingSpinner(false);
};

// handleSearch button
const handleSearch = () => {
  toggleLOadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};
// handle search recap
// const handleSearch2 = () => {
//   toggleLOadingSpinner(true);
//   const searchField = document.getElementById("search-field2");
//   const searchText = searchField.value;
//   loadPhone(searchText);
// };

const toggleLOadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};
// শুরুতেই ফোন লোড করার জন্য ফাংশন কল করা হচ্ছে
// loadPhone();
