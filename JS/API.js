const API_BASE_URL = 'http://localhost:3000'

const fetchReceiptById = async () => {
    const id_receipt = document.getElementById('lacak').value;
    console.log(id_receipt);
    try {
        const response = await fetch(`${API_BASE_URL}/status/${id_receipt}`);
        const tracking = await response.json();
        console.log(tracking);

        const receiptDetails = document.getElementById('modal-lacak');
        receiptDetails.innerHTML = `
        No Resi         : ${tracking.no_resi}
        Asal            : ${tracking.asal}
        Tujuan          : ${tracking.tujuan}
        Nama Pengirim   : ${tracking.nama_pengirim}
        Nama Penerima   : ${tracking.nama_penerima}
        Status          : ${tracking.status}
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
        console.log(tarif);
      
        const pricingDetails = document.getElementById('hasil-pengiriman');
        priceDetails.innerHTML = `
        Origin        : ${tarif.origin}
        Destination   : ${tarif.destination}
        Price         : ${tarif.price}
        `
    } catch (error) {
        console.error(error);
    }
}

const fetchMessage = async () => {
    const contact = document.getElementById('container-message').value;
    console.log(contact);
    try {
        const response = await fetch(`${API_BASE_URL}/message/${contact}`);
        const message = await response.json();
        console.log(message);
      
        const messageDetails = document.getElementById('message');
        messageDetails.innerHTML = `
        full name   : ${message.full_name}
        email       : ${message.email}
        subject     : ${message.subject}
        message     : ${message.message}
        `
        
    } catch (error) {
        console.error(error);
    }
}