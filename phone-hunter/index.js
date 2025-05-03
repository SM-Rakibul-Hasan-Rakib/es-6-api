// আইফোন সংক্রান্ত ডেটা লোড করার জন্য একটি অ্যাসিনক্রোনাস ফাংশন
const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;

  // ফোনগুলো দেখানোর ফাংশনে পাঠানো হচ্ছে
  displayPhones(phones);
};

// ফোনগুলো HTML-এ দেখানোর জন্য এই ফাংশন
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");

  // প্রতিটি ফোনের জন্য একটি কার্ড তৈরি করে কন্টেইনারে যোগ করা হচ্ছে
  phones.forEach((phone) => {
    // একটি div তৈরি করা হচ্ছে
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 w-96 shadow-sm`;

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
};

// শুরুতেই ফোন লোড করার জন্য ফাংশন কল করা হচ্ছে
loadPhone();
