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
        Receipt Number  : ${tracking.no_resi}
        Origin          :
        Destination     :
        Sender          :
        Recipient       :
        Status          :
        `
    } catch (error) {
        console.error(error);
    }
}