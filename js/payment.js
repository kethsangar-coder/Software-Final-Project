    function calculatePayment() {
        // 1. ດຶງຂໍ້ມູນຈາກ localStorage
        const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        
        // 2. ຄິດໄລ່ລາຄາລວມທັງໝົດ
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // 3. ສະແດງຜົນ (ໃຊ້ toLocaleString ເພື່ອໃສ່ຈຸດໃຫ້ຕົວເລກອ່ານງ່າຍ)
        const totalBeforeEl = document.getElementById('totalBefore');
        const netAmountEl = document.getElementById('netAmount');

        if (totalBeforeEl && netAmountEl) {
            totalBeforeEl.innerText = total.toLocaleString() + "$";
            netAmountEl.innerText = total.toLocaleString() + "$";
        }
    }

    // ເອີ້ນໃຊ້ Function ທັນທີທີ່ໂຫຼດໜ້າ
    document.addEventListener('DOMContentLoaded', calculatePayment);
