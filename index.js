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
const layananElement = document.getElementById("layanan");
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

    // Hitung harga berdasarkan lokasi awal, lokasi tujuan, berat, dan layanan yang dipilih
    const hargaPerKg = 5000; // Harga per kilogram
    
    let layanan;  // Layanan yang dipilih
    if (lokasiAwal === lokasiTujuan) {
        layanan = "same day";
    } else if (berat < 50) {
        layanan = "layanan reguler";
    } else {
        layanan = "layanan kargo";
    }

    // Hitung total harga berdasarkan berat
    const totalHarga = berat * hargaPerKg;

    // Set nilai elemen-elemen HTML sesuai dengan inputan pengguna
    lokasiAwalElement.textContent = lokasiAwal;
    lokasiTujuanElement.textContent = lokasiTujuan;
    beratElement.textContent = berat + " kg"; // Menambahkan "kg" di dalam berat
    layananElement.textContent = layanan;
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
    }

    if (isNaN(berat) || berat <= 0) {
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

// check lokasi tujuan
var form = document.getElementById('formResi');
form.addEventListener('submitButton', function(event) {

  if (submitButton.value === 'masukkan nomer resi') {
    alert('Masukkan Nomer Resi Terlebih Dahulu!');
    return;
  }
  
});