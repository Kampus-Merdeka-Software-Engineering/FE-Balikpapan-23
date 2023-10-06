// hamberger menu
const menuNav = document.querySelector(".menu")
document.getElementById("hamberger")

hamberger.addEventListener("click", function () {
    menuNav.classList.toggle("active")
})

// check lokasi awal
const menuOpsi = document.querySelector(".select-menu"),
    selectButton = menuOpsi.querySelector(".select-button"),
    opsi = menuOpsi.querySelectorAll(".provinsi"),
    buttonText = menuOpsi.querySelector(".button-text");

selectButton.addEventListener("click", () => menuOpsi.classList.toggle("active"));

opsi.forEach(provinsi => {
    provinsi.addEventListener("click", () => {
        let pilihan = provinsi.querySelector(".text-provinsi").innerText;
        buttonText.innerText = pilihan;
        menuOpsi.classList.remove("active");
    });
});

// check lokasi tujuan
const menuOpsiTujuan = document.querySelector(".select-menu-tujuan"),
    selectButtonTujuan = menuOpsiTujuan.querySelector(".select-button-tujuan"),
    opsiTujuan = menuOpsiTujuan.querySelectorAll(".provinsi-tujuan"),
    buttonTextTujuan = menuOpsiTujuan.querySelector(".button-text-tujuan");

selectButtonTujuan.addEventListener("click", () => menuOpsiTujuan.classList.toggle("active"));

opsiTujuan.forEach(provinsiTujuan => {
    provinsiTujuan.addEventListener("click", () => {
        let pilihanTujuan = provinsiTujuan.querySelector(".text-provinsi-tujuan").innerText;
        buttonTextTujuan.innerText = pilihanTujuan;
        menuOpsiTujuan.classList.remove("active");
    });
});



// cek harga
const lokasiAwalElement = document.getElementById("lokasi-awal");
const lokasiTujuanElement = document.getElementById("lokasi-tujuan");
const beratElement = document.getElementById("berat");
const hargaElement = document.getElementById("harga");
const submitButton = document.querySelector(".button-submit");

submitButton.addEventListener("click", function () {

    const hasilPengiriman = document.getElementById("hasil-pengiriman");
    const lokasiAwal = document.querySelector(".select-button .button-text").textContent;
    const lokasiTujuan = document.querySelector(".select-button-tujuan .button-text-tujuan").textContent;
    const beratInput = document.getElementById("berat");
    const berat = parseFloat(beratInput.value);

    // validasi jika user tidak menginput lokasi
    if (lokasiAwal === "Pilih Lokasi Awal" || lokasiTujuan === "Pilih Lokasi Tujuan") {
        alert("Harap pilih kedua lokasi awal dan tujuan pengiriman.");
        return;
    }
    // Validasi apakah berat adalah angka yang valid
    if (isNaN(berat) || berat <= 0) {
        alert("Berat harus berupa angka yang valid dan lebih dari 0.");
        return;
    } // Menghentikan eksekusi jika berat tidak valid

    // Menambahkan "kg" di dalam berat saat menampilkan nilai berat
    document.getElementById("berat-hasil").textContent = berat + " kg";

    const hargaPerKg = 5000; // Harga per kilogram
    
 

    // Hitung total harga berdasarkan berat
    const totalHarga = berat * hargaPerKg;

    // Set nilai elemen-elemen HTML sesuai dengan inputan pengguna
    lokasiAwalElement.textContent = lokasiAwal;
    lokasiTujuanElement.textContent = lokasiTujuan;
    beratElement.textContent = berat + " kg"; // Menambahkan "kg" di dalam berat
    hargaElement.textContent = "Rp. " + totalHarga.toLocaleString(); // Mengubah menjadi rupiah

    // Tampilkan hasil pengiriman
    hasilPengiriman.style.display = "block"; // Mengubah properti display menjadi "block" untuk menampilkan hasil pengiriman
});

// pop up
function showPopup() {
    const lokasiAwal = document.querySelector(".select-button .button-text").textContent;
    const lokasiTujuan = document.querySelector(".select-button-tujuan .button-text-tujuan").textContent;
    const berat = parseFloat(document.getElementById("berat").value);

    // validasi jika user tidak menginput lokasi
    if (lokasiAwal === "Pilih Lokasi Awal" || lokasiTujuan === "Pilih Lokasi Tujuan") {
        return;
    }else if (isNaN(berat) || berat <= 0) {
        return;
    }
    var popup = document.getElementById("myPopup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("myPopup");
    popup.style.display = "none";
}


// tracking
// Pop up lacak resi
const modal = document.querySelector("#modal-lacak");
const openModal = document.querySelector(".open-button-lacak");
const closeModal = document.querySelector(".close-button-lacak");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();

});
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