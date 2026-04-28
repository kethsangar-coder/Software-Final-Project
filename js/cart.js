function renderCart() {
    const cartList = document.getElementById('cartList');
    const subTotalEl = document.getElementById('subTotal');
    const finalTotalEl = document.getElementById('finalTotal');
    
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // 1. ກວດເບິ່ງວ່າຖ້າບໍ່ມີສິນຄ້າ
    if (cart.length === 0) {
        cartList.innerHTML = `<div class="text-center py-12 text-lg">There are no order yet</div>`;
        subTotalEl.innerText = "0.00$";
        finalTotalEl.innerText = "0.00$";
        return;
    }

    let total = 0;

    // 2. ສະແດງລາຍການສິນຄ້າ
    cartList.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="grid grid-cols-7 gap-4 items-center py-4 border-b border-white/10 text-sm">
                <div class="flex justify-center">
                    <img src="${item.img}" class="w-16 h-16 object-contain bg-white rounded p-1">
                </div>
                <span class="font-medium">${item.name}</span>
                <span>${item.price.toLocaleString()}$</span>
                <span>${item.quantity}</span>
                <span>0.00$</span>
                <span class="text-[#A855F7] font-bold">${itemTotal.toLocaleString()}$</span>
                <button onclick="removeItem(${index})" class="text-right text-red-400 hover:text-red-600 transition-colors">
                    Delete
                </button>
            </div>
        `;
    }).join('');

    // 3. ອັບເດດລາຄາລວມໃຫ້ສະແດງຜົນ
    subTotalEl.innerText = total.toLocaleString() + ".00$";
    finalTotalEl.innerText = total.toLocaleString() + ".00$";
}

// 4. Function ສຳລັບລຶບສິນຄ້າ
function removeItem(index) {
    if (confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຈະລຶບສິນຄ້ານີ້?")) {
        let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        
        // ລຶບສິນຄ້າອອກຈາກ Array ຕາມຕຳແໜ່ງ Index
        cart.splice(index, 1);
        
        // ເກັບຂໍ້ມູນໃໝ່ລົງ localStorage
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        
        // ເອີ້ນ Render ໃໝ່ເພື່ອໃຫ້ໜ້າເວັບອັບເດດທັນທີ
        renderCart();
    }
}

// ເອີ້ນໃຊ້ເມື່ອໂຫຼດໜ້າ
document.addEventListener('DOMContentLoaded', renderCart);