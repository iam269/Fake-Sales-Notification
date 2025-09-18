// Fake data
const buyers = [
  { name: "John", location: "New York", product: "Wireless Headphones" },
  { name: "Emma", location: "London", product: "Smartwatch" },
  { name: "Lucas", location: "Berlin", product: "Yoga Mat" },
  { name: "Sophia", location: "Paris", product: "Coffee Maker" },
  { name: "Michael", location: "Toronto", product: "Bluetooth Speaker" },
];

const notification = document.getElementById("notification");
const buyerName = document.getElementById("buyer-name");
const buyerLocation = document.getElementById("buyer-location");
const productName = document.getElementById("product-name");
const timeAgo = document.getElementById("time-ago");

// Function to show fake notification
function showNotification() {
  const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
  const minutesAgo = Math.floor(Math.random() * 59) + 1; // 1–59 minutes ago

  buyerName.textContent = randomBuyer.name;
  buyerLocation.textContent = randomBuyer.location;
  productName.textContent = randomBuyer.product;
  timeAgo.textContent = `${minutesAgo} minutes ago`;

  notification.style.display = "block";

  // Hide after 5 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 5000);
}

// Show notification every 10 seconds
setInterval(showNotification, 10000);

// First one after 2 seconds
setTimeout(showNotification, 2000);
