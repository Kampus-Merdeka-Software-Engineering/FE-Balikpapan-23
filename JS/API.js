const API_BASE_URL = 'http://localhost:3000'


async function fetchBookById() {
    const bookId = document.getElementById('book-id').value;
    try {
        const response = await fetch(`${API_BASE_URL}/books/${bookId}`);
        const book = await response.json();
        const bookDetails = document.getElementById('book-details');
        bookDetails.innerHTML = `Title: ${book.title}<br>Author: ${book.author}`;
    } catch (error) {
        console.error('Error fetching book:', error);
    }
  }

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
            <input type="text" placeholder="NO RESI" value="${tracking.no_resi}">
            <input type="text" placeholder="ASAL" value="${tracking.asal}">
            <input type="text" placeholder="TUJUAN" value="${tracking.tujuan}">
            <input type="text" placeholder="NAMA PENGIRIM" value="${tracking.nama_pengirim}">
            <input type="text" placeholder="NAMA PENERIMA" value="${tracking.nama_penerima}">
            <input type="text" placeholder="STATUS"value="${tracking.status}">
        </div>
        <button class="close-button-lacak">Kembali</button>
        `
    } catch (error) {
        console.error(error);
    }
}

const fetchPricing = async () => {
    const pricing = document.getElementById('myPopup').value;
    console.log(pricing);
    try {
        const response = await fetch(`${API_BASE_URL}/price/${pricing}`);
        const tarif = await response.json();
        const detailOngkir = document.getElementById('myPopup');
        
        detailOngkir.innerHTML = `
        <h1>CEK</h1>
        <div id="hasil-pengiriman">
            <input type="text"  placeholder="ASAL" value="${tarif.origin}">
            <input type="text"  placeholder="TUJUAN" value="${tarif.destination}">
            <input type="text"  placeholder="BERAT" value="${tarif.price}">
     
        </div>
        `
    } catch (error) {
        console.error(error);
    }
}


// const fetchMessage() {
//     try {
//         const response = await fetch(`${API_BASE_URL}/message`);
//         const data = await response.json();
//         const startDisplay = document.getElementById('container-message');
//         startDisplay.innerHTML = '';
//     }
// }

const createMessage = async () => {
    const name = document.getElementById('contactUs-name').value;
    const email = document.getElementById('contactUs-email').value;
    const subject = document.getElementById('contactUs-subject').value;
    const theMessage = document.getElementById('contactUs-theMessage').value;

    try {
        const response = await fetch(`${API_BASE_URL}/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, subject, theMessage})
        });
        const data = await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
    } finally {
        fetchMessage(); //Refresh the display
    }
}
