const API_BASE_URL = 'http://localhost:3000'

// C E K   R E S I
const fetchReceiptById = async () => {
    const noResi = document.getElementById('lacak').value;
    try {
        const response = await fetch(`${API_BASE_URL}/status/${noResi}`);
        const tracking = await response.json();
        const detailResi = document.getElementById('modal-lacak');
        // const inputResi = document.getElementById('noResi')
        // inputResi.value = tracking.no_resi
        
        detailResi.innerHTML = `
        <h1>Hasil Pencarian</h1>
        <div>
        <label for="no_resi">No resi:</label>
        <input type="text" id="no_resi placeholder="NO RESI" value="${tracking.no_resi}">

        <label for="asal">Asal:</label>
        <input type="text" id="asal" placeholder="ASAL" value="${tracking.asal}">

        <label for="tujuan">Tujuan:</label>
        <input type="text" id="tujuan" placeholder="TUJUAN" value="${tracking.tujuan}">

        <label for="nama_pengirim">Nama Pengirim:</label>
        <input type="text" id="nama_pengirim placeholder="NAMA PENGIRIM" value="${tracking.nama_pengirim}">

        <label for="nama_penerima">Nama Penerima:</label>
        <input type="text" id="nama_penerima placeholder="NAMA PENERIMA" value="${tracking.nama_penerima}">

        <label for="status">Status:</label>
        <input type="text" id="status" placeholder="STATUS"value="${tracking.status}">
        </div>
        <button onclick="closeLacak()" class="close-button-lacak">Kembali</button>
        `
    } catch (error) {
        console.error(error);
    }
}

// C E K   O N G K I R
const fetchOngkir = async () => {
    const asal = document.getElementById('opsi-asal').value;
    const tujuan = document.getElementById('opsi-tujuan').value;
    const berat = document.getElementById('berat-paket').value;
    try {
        const response = await fetch(`${API_BASE_URL}/price?origin=${asal}&destination=${tujuan}&weight=${berat}`);
        const tarif = await response.json();
        const detailOngkir = document.getElementById('modal-ongkir');
        
        detailOngkir.innerHTML = `
        <h1>CEK</h1>
        <div>
            <label for="origin">Asal:</label>
            <input type="text" id="origin" placeholder="ASAL" value="${tarif.origin}">

            <label for="destination">Tujuan:</label>
            <input type="text" id="destination" placeholder="TUJUAN" value="${tarif.destination}">

            <label for="price">Estimasi ongkir:</label>
            <input type="text" id="price" placeholder="HARGA" value="${tarif.price}">
        </div>
        <button onclick="closeOngkir()" class="close-button-ongkir">Kembali</button>
        `
    } catch (error) {
        console.error(error);
    }
}


const createMessage = async () => {
    const nama = document.getElementById('contactUs-name').value;
    const email = document.getElementById('contactUs-email').value;
    const subjek = document.getElementById('contactUs-subject').value;
    const pesan = document.getElementById('contactUs-theMessage').value;

    try {
        const response = await fetch(`${API_BASE_URL}/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nama, email, subjek, pesan})
        });
        const data = await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
    } 
}
