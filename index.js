// hamberger menu
const menuNav = document.querySelector(".menu")
document.getElementById("hamberger")

hamberger.addEventListener("click", function () {
    menuNav.classList.toggle("active")
})


// LACAK PAKETMU
// Untuk nampilin popup hasil pencarian resi
const modal = document.querySelector("#modal-lacak");
const openModal = document.querySelector(".open-button-lacak");

openModal.addEventListener("click", () => {
  modal.showModal();
});

function closeLacak() {
    const popupLacak = document.getElementById("modal-lacak");
    popupLacak.style.display = "none";
};


// CEK ESTIMASI ONGKIRMU
//Untuk nampilin popup hasil estimasi harga
const ongkir = document.querySelector("#modal-ongkir");
const openOngkir = document.querySelector(".open-button-ongkir");

openOngkir.addEventListener("click", () => {
    ongkir.showModal();
});

function closeOngkir() {
    const popupOngkir = document.getElementById("modal-ongkir");
    popupOngkir.style.display = "none";
};


// // CONTACT US
// function createMessage() {
//     alert("Pesan Anda sudah terkirim.");
// }

// carosel
const carouselItems = document.querySelectorAll('.content-kanan');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach(item => {
        item.style.transform = `translateX(-${index * 80}%)`;
    });
}

function updateNavButtons() {
    document.querySelector('.kiri').classList.toggle('hidden', currentIndex === 0);
    document.querySelector('.kanan').classList.toggle('hidden', currentIndex === carouselItems.length - 1);
}

function nextSlide() {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Kembali ke gambar pertama jika sudah di akhir
    }
    showSlide(currentIndex);
    updateNavButtons();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselItems.length - 1; // Pindah ke gambar terakhir jika di awal dan tombol kiri ditekan
    }
    showSlide(currentIndex);
    updateNavButtons();
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);
updateNavButtons();

// Handler untuk tombol kiri
document.querySelector('.kiri').addEventListener('click', prevSlide);

// Handler untuk tombol kanan
document.querySelector('.kanan').addEventListener('click', nextSlide);