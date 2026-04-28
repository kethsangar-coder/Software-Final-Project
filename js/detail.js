// 1. ປະກາດຕົວປ່ຽນໄວ້ຂ້າງນອກ (Global Scope) ເພື່ອໃຫ້ທຸກ Function ໃຊ້ຮ່ວມກັນໄດ້
let currentProduct = null; 

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    
    // ເກັບຂໍ້ມູນໃສ່ຕົວປ່ຽນ Global ທີ່ເຮົາປະກາດໄວ້ທາງເທິງ
    currentProduct = products.find(p => p.id === productId);

    if (currentProduct) {
        // ສະແດງຂໍ້ມູນພື້ນຖານ
        document.getElementById('detailName').innerText = currentProduct.name;
        document.getElementById('detailPrice').innerText = currentProduct.price.toLocaleString() + '$';
        document.getElementById('detailImg').src = currentProduct.img;
        document.getElementById('detailBrand').innerText = "Brand: " + (currentProduct.brand || "N/A").toUpperCase();
        document.getElementById('detailWarranty').innerText = currentProduct.warranty || "1-year warranty";
        document.getElementById('fullDetail').innerText = currentProduct.description || "No description provided.";

        // ສະແດງ Highlights
        const highlightList = document.getElementById('highlightList');
        if (highlightList && currentProduct.specs) {
            highlightList.innerHTML = "";
            const summarySpecs = [
                currentProduct.specs.screen, currentProduct.specs.chip,
                currentProduct.specs.display, currentProduct.specs.memory,
                currentProduct.specs.sim
            ];
            summarySpecs.forEach(text => {
                if(text) {
                    highlightList.innerHTML += `
                        <li class="flex items-start gap-2">
                            <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                            <span>${text}</span>
                        </li>`;
                }
            });
        }

        // ສະແດງຕາຕະລາງ Specs
        const container = document.getElementById('propertyContainer');
        if (container && currentProduct.specs) {
            container.innerHTML = ""; 
            Object.entries(currentProduct.specs).forEach(([key, value], index) => {
                const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                const bgColor = index % 2 === 0 ? 'bg-[#4F1F9B]/40' : 'bg-[#1e0e3a]/30';
                container.innerHTML += `
                    <div class="flex flex-col md:flex-row py-4 px-5 ${bgColor} rounded-lg">
                        <div class="w-full md:w-[25%] text-gray-300 font-medium">${label}:</div>
                        <div class="w-full md:w-[75%] text-white">${value}</div>
                    </div>`;
            });
        }

        // ເອີ້ນໃຊ້ Function ສຸ່ມສິນຄ້າ ຫຼັງຈາກທີ່ເຮົາຮູ້ແລ້ວວ່າ currentProduct ແມ່ນໂຕໃດ
        displayRandomProducts();
    }
});

function displayRandomProducts() {
    const randomGrid = document.getElementById('randomProductsGrid');
    if (!randomGrid || !currentProduct) return;

    // ກອງເອົາໂຕອື່ນທີ່ບໍ່ແມ່ນໂຕປັດຈຸບັນ
    let otherProducts = products.filter(p => p.id !== currentProduct.id);
    otherProducts.sort(() => 0.5 - Math.random());
    const randomSelection = otherProducts.slice(0, 4);

    randomGrid.innerHTML = randomSelection.map(p => `
        <a href="detail.html?id=${p.id}" class="group bg-[#1a1138] rounded-2xl p-4 transition-all hover:scale-105 border border-transparent hover:border-[#A855F7]">
            <div class="bg-white rounded-xl p-2 mb-4 aspect-square flex items-center justify-center overflow-hidden">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-contain group-hover:scale-110 transition-transform">
            </div>
            <h3 class="text-white text-sm font-medium line-clamp-2 mb-2">${p.name}</h3>
            <p class="text-[#A855F7] font-bold">${p.price.toLocaleString()}$</p>
        </a>
    `).join('');
}

function addToCart() {
    // ກວດເບິ່ງກ່ອນວ່າຂໍ້ມູນສິນຄ້າໂຫຼດມາແລ້ວບໍ່
    if (!currentProduct) {
        alert("ກະລຸນາລໍຖ້າຂໍ້ມູນໂຫຼດສັກຄູ່...");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const index = cart.findIndex(item => item.id === currentProduct.id);

    if (index > -1) {
        cart[index].quantity += 1;
    } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            img: currentProduct.img,
            quantity: 1
        });
    }

    localStorage.setItem('shoppingCart', JSON.stringify(cart));

    if(confirm("ເພີ່ມສິນຄ້າລົງໃນກະຕ່າແລ້ວ! ຕ້ອງການໄປໜ້າ Cart ເລີຍບໍ່?")) {
        window.location.href = "cart.html";
    }
}