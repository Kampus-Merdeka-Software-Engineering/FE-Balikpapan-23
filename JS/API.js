// const API_BASE_URL = 'https://be-balikpapan-23-'

const fetchReceiptById = async () => {
    const id_receipt = document.getElementById('lacak').value;
    console.log(id_receipt);
    try {
        const response = await fetch(`${API_BASE_URL}/tracking/${id_receipt}`);
        const tracking = await response.json();
        console.log(tracking);

        const receiptDetails = document.getElementById('modal-lacak');
        receiptDetails.innerHTML = `
        Receipt Number  : ${receipt.dat}
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