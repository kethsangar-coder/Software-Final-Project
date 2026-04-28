let currentPage = 1;      // ໜ້າປັດຈຸບັນ
const itemsPerPage = 16;  // ຈຳນວນສິນຄ້າຕໍ່ໜ້າ (4x4)
let filteredProducts = []; // ບ່ອນເກັບຂໍ້ມູນທີ່ກອງແລ້ວ


// 1. ຂໍ້ມູນສິນຄ້າ
const products = [
{
        id: 1,
        name: "iPhone 15 Pro Max (256GB) Blue Titanium",
        price: 1199,
        brand: "apple",
        category: "smart-phones",
        img: "assets/products/1.jpg",
        warranty: "1-year Apple Care",
        specs: {
            screen: "6.7 inch",
            chip: "A17 Pro chip (6‑core CPU)",
            display: "Super Retina XDR, ProMotion 120Hz",
            memory: "RAM 8GB / ROM 256GB",
            sim: "Dual eSIM or Nano-SIM & eSIM",
            os: "iOS 17",
            frontCam: "12MP TrueDepth",
            backCam: "48MP Main + 12MP Ultra Wide + 12MP Tele",
            charging: "27W Fast Charging / MagSafe",
            battery: "4,441 mAh",
            inBox: "iPhone x1, USB-C Charge Cable x1"
        }
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra (12/512GB)",
        price: 1299,
        brand: "samsung",
        category: "smart-phones",
        img: "assets/products/2.webp",
        warranty: "1-year Official Warranty",
        specs: {
            screen: "6.8 inch",
            chip: "Snapdragon 8 Gen 3 for Galaxy",
            display: "Dynamic AMOLED 2X, 120Hz, 2600 nits",
            memory: "RAM 12GB / ROM 512GB",
            sim: "Dual Nano SIM",
            os: "Android 14 (One UI 6.1)",
            frontCam: "12MP",
            backCam: "200MP + 50MP + 12MP + 10MP",
            charging: "45W Fast Charging",
            battery: "5,000 mAh",
            inBox: "Phone x1, USB-C Cable x1, S-Pen x1"
        }
    },
    {
        id: 3,
        name: "OPPO A6 (6 128G) Aurora Gold",
        price: 9.99,
        brand: "oppo",
        category: "smart-phones",
        img: "assets/products/3.png",
        warranty: "1-year warranty",
        specs: {
            screen: "6.75 inch",
            chip: "Snapdragon 685 Octa-core 2.8 GHz",
            display: "LCD, HD+ 120Hz",
            memory: "RAM 6GB / ROM 128GB",
            sim: "Dual Nano Sim & SD card",
            os: "ColorOS 15",
            frontCam: "8MP",
            backCam: "50MP + 2MP",
            charging: "45W SUPERVOOC",
            battery: "7,000 mAh",
            inBox: "Phone x1, Charger x1, Case x1"
        }
    },
{
        id: 4,
        name: "Xiaomi Redmi Note 13 (8/256GB) Midnight Black",
        price: 199.00,
        brand: "xiaomi",
        category: "smart-phones",
        img: "assets/products/4.jpeg", 
        warranty: "1-year Warranty",
        specs: {
            screen: "6.67 inch",
            chip: "Snapdragon 685 (6nm) Octa-core 2.8GHz",
            display: "AMOLED, FHD+, 120Hz Adaptive",
            memory: "RAM 8GB / ROM 256GB",
            sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",
            os: "Android 13 (MIUI 14)",
            frontCam: "16MP",
            backCam: "108MP + 8MP + 2MP",
            charging: "33W Fast Charging",
            battery: "5,000 mAh",
            inBox: "Phone x1, 33W Adapter x1, Case x1, Screen Protect x1"
        }
    },
    {
        id: 5,
        name: "Google Pixel 8 Pro (12/256GB) Bay Blue",
        price: 999,
        brand: "google",
        category: "smart-phones",
        img: "assets/products/5.jpg",
        warranty: "1-year Store Warranty",
        specs: {
            screen: "6.7 inch",
            chip: "Google Tensor G3 (Titan M2)",
            display: "LTPO OLED, 120Hz, HDR10+",
            memory: "RAM 12GB / ROM 256GB",
            sim: "Nano-SIM & eSIM",
            os: "Android 14",
            frontCam: "10.5MP",
            backCam: "50MP Main + 48MP Ultra + 48MP Tele",
            charging: "30W Fast Charging",
            battery: "5,050 mAh",
            inBox: "Phone x1, USB-C Cable x1, Quick Switch Adapter"
        }
    },
    {
        id: 6,
        name: "Xiaomi 14 Ultra (16/512GB) Black",
        price: 1099,
        brand: "xiaomi",
        category: "smart-phones",
        img: "assets/products/6.jpeg",
        warranty: "1-year Global Warranty",
        specs: {
            screen: "6.73 inch",
            chip: "Snapdragon 8 Gen 3 (4nm)",
            display: "LTPO AMOLED, 1B colors, 120Hz",
            memory: "RAM 16GB / ROM 512GB",
            sim: "Dual Nano SIM",
            os: "HyperOS (Android 14)",
            frontCam: "32MP",
            backCam: "50MP Leica Main + 50MP + 50MP + 50MP",
            charging: "90W HyperCharge / 80W Wireless",
            battery: "5,000 mAh",
            inBox: "Phone x1, 90W Adapter x1, Case x1"
        }
    },
    {
        id: 7,
        name: "OPPO Find X7 Ultra (16/256GB)",
        price: 950,
        brand: "oppo",
        category: "smart-phones",
        img: "assets/products/7.jpg",
        warranty: "1-year Official Warranty",
        specs: {
            screen: "6.82 inch",
            chip: "Snapdragon 8 Gen 3",
            display: "LTPO AMOLED, 120Hz, 4500 nits",
            memory: "RAM 16GB / ROM 256GB",
            sim: "Dual Nano SIM",
            os: "ColorOS 14",
            frontCam: "32MP",
            backCam: "50MP Main + 50MP + 50MP + 50MP (Quad Camera)",
            charging: "100W SUPERVOOC",
            battery: "5,000 mAh",
            inBox: "Phone x1, 100W Adapter x1, Case x1"
        }
    },
    {
        id: 8,
        name: "MacBook Pro 14 (M3 Max) 16/1TB",
        price: 3199,
        brand: "apple",
        category: "computer-laptops",
        img: "assets/products/8.png",
        warranty: "1-year Apple Care",
        specs: {
            processor: "Apple M3 Max (14-core CPU)",
            ram: "36GB Unified Memory",
            storage: "1TB SSD",
            screen: "14.2-inch Liquid Retina XDR",
            gpu: "30-core GPU",
            battery: "Up to 18 hours",
            weight: "1.61 kg"
        }
    },
    {
        id: 9,
        name: "ASUS ROG Zephyrus G16 (2025)",
        price: 2499,
        brand: "asus",
        category: "computer-laptops",
        img: "assets/products/9.png",
        warranty: "2-year Global Warranty",
        specs: {
            processor: "Intel Core Ultra 9 185H",
            ram: "32GB LPDDR5X",
            storage: "2TB NVMe PCIe 4.0",
            screen: "16-inch OLED, 2.5K, 240Hz",
            gpu: "NVIDIA RTX 4080 12GB",
            keyboard: "RGB Backlit",
            weight: "1.85 kg"
        }
    },
    {
        id: 10,
        name: "Dell XPS 13 (9340) OLED",
        price: 1599,
        brand: "dell",
        category: "computer-laptops",
        img: "assets/products/10.png",
        warranty: "1-year Premium Support",
        specs: {
            processor: "Intel Core Ultra 7 155H",
            ram: "16GB LPDDR5X",
            storage: "512GB SSD",
            screen: "13.4-inch 3K+ OLED Touch",
            gpu: "Intel Arc Graphics",
            battery: "55Whr Fast Charge",
            weight: "1.19 kg"
        }
    },
    {
        id: 11,
        name: "Lenovo Legion Pro 7i Gen 9",
        price: 2699,
        brand: "lenovo",
        category: "computer-laptops",
        img: "assets/products/11.png",
        warranty: "3-year Legion Ultimate Support",
        specs: {
            processor: "Intel Core i9-14900HX",
            ram: "32GB DDR5 (5600MHz)",
            storage: "1TB SSD Gen4",
            screen: "16-inch WQXGA, 240Hz, 500 nits",
            gpu: "NVIDIA RTX 4090 16GB",
            cooling: "Legion Coldfront 5.0",
            weight: "2.8 kg"
        }
    },
    {
        id: 12,
        name: "HP Spectre x360 14 (2025)",
        price: 1450,
        brand: "hp",
        category: "computer-laptops",
        img: "assets/products/12.png",
        warranty: "1-year Onsite Service",
        specs: {
            processor: "Intel Core Ultra 5 125H",
            ram: "16GB RAM",
            storage: "1TB SSD",
            screen: "14-inch 2.8K OLED Touch (2-in-1)",
            gpu: "Intel Arc Graphics",
            webcam: "9MP AI Camera",
            battery: "Up to 13 hours"
        }
    },
    {
        id: 13,
        name: "Acer Predator Helios Neo 16",
        price: 1399,
        brand: "acer",
        category: "computer-laptops",
        img: "assets/products/13.jpg",
        warranty: "3-year Warranty (Parts & Labor)",
        specs: {
            processor: "Intel Core i7-14700HX",
            ram: "16GB DDR5",
            storage: "512GB NVMe SSD",
            screen: "16-inch WQXGA 165Hz",
            gpu: "NVIDIA RTX 4060 8GB",
            keyboard: "4-Zone RGB",
            weight: "2.6 kg"
        }
    },
    {
        id: 14,
        name: "MSI Katana 15 B13V",
        price: 1150,
        brand: "msi",
        category: "computer-laptops",
        img: "assets/products/14.jpg",
        warranty: "2-year Warranty",
        specs: {
            processor: "Intel Core i7-13620H",
            ram: "16GB DDR5",
            storage: "1TB SSD",
            screen: "15.6-inch FHD 144Hz IPS",
            gpu: "NVIDIA RTX 4050 6GB",
            os: "Windows 11 Home"
        }
    },
    {
        id: 15,
        name: "Microsoft Surface Laptop 6",
        price: 1299,
        brand: "microsoft",
        category: "computer-laptops",
        img: "assets/products/15.jpeg",
        warranty: "1-year Limited Hardware Warranty",
        specs: {
            processor: "Intel Core Ultra 7",
            ram: "16GB RAM",
            storage: "256GB Removable SSD",
            screen: "13.5-inch PixelSense Touch",
            ports: "USB-C with Thunderbolt 4",
            weight: "1.27 kg"
        }
    },
    {
        id: 16,
        name: "Razer Blade 16 (2025)",
        price: 3599,
        brand: "razer",
        category: "computer-laptops",
        img: "assets/products/16.jpeg",
        warranty: "1-year Limited Warranty",
        specs: {
            processor: "Intel Core i9-14900HX",
            ram: "32GB DDR5",
            storage: "2TB SSD",
            screen: "16-inch Dual Mode Mini-LED",
            gpu: "NVIDIA RTX 4090 16GB",
            chassis: "CNC Aluminum Unibody"
        }
    },
    {
        id: 17,
        name: "ASUS Vivobook S 14 OLED",
        price: 899,
        brand: "asus",
        category: "computer-laptops",
        img: "assets/products/17.png",
        warranty: "2-year Global Warranty",
        specs: {
            processor: "AMD Ryzen 7 8845HS",
            ram: "16GB LPDDR5X",
            storage: "512GB SSD",
            screen: "14-inch 3K OLED 120Hz",
            gpu: "Radeon 780M Graphics",
            weight: "1.3 kg"
        }
    },
    {
        id: 18,
        name: "LG Gram 17 (2025)",
        price: 1799,
        brand: "lg",
        category: "computer-laptops",
        img: "assets/products/18.jpeg",
        warranty: "1-year Warranty",
        specs: {
            processor: "Intel Core Ultra 7",
            ram: "32GB LPDDR5X",
            storage: "1TB SSD",
            screen: "17-inch WQXGA IPS",
            battery: "77Whr",
            weight: "1.35 kg (Ultra-light)"
        }
    },
    {
        id: 19,
        name: "Gigabyte G5 KF",
        price: 950,
        brand: "gigabyte",
        category: "computer-laptops",
        img: "assets/products/19.jpg",
        warranty: "2-year Warranty",
        specs: {
            processor: "Intel Core i5-12500H",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            screen: "15.6-inch FHD 144Hz",
            gpu: "NVIDIA RTX 4060 8GB",
            weight: "1.9 kg"
        }
    },
    {
        id: 20,
        name: "Lenovo Yoga Slim 7i Aura Edition",
        price: 1350,
        brand: "lenovo",
        category: "computer-laptops",
        img: "assets/products/20.jpeg",
        warranty: "2-year Premium Care",
        specs: {
            processor: "Intel Core Ultra 7 (Series 2)",
            ram: "32GB LPDDR5X",
            storage: "1TB SSD",
            screen: "15.3-inch 2.8K 120Hz PureSight",
            ai: "47 TOPS NPU",
            weight: "1.46 kg"
        }
    },
    {
        id: 21,
        name: "Acer Swift Go 14 AI",
        price: 849,
        brand: "acer",
        category: "computer-laptops",
        img: "assets/products/21.jpg",
        warranty: "2-year Warranty",
        specs: {
            processor: "Intel Core Ultra 5 125H",
            ram: "16GB LPDDR5X",
            storage: "512GB SSD",
            screen: "14-inch OLED 90Hz",
            gpu: "Intel Arc Graphics",
            ai_features: "Acer PurifiedView & Voice"
        }
    },
    {
        id: 22,
        name: "Huawei MateBook X Pro 2025",
        price: 1899,
        brand: "huawei",
        category: "computer-laptops",
        img: "assets/products/22.png",
        warranty: "1-year Warranty",
        specs: {
            processor: "Intel Core Ultra 9",
            ram: "32GB RAM",
            storage: "2TB SSD",
            screen: "14.2-inch OLED 120Hz Touch",
            weight: "980g (Super Light)",
            battery: "70Whr"
        }
    },
    {
        id: 23,
        name: "Dell Alienware m18 R2",
        price: 3299,
        brand: "dell",
        category: "computer-laptops",
        img: "assets/products/23.jpeg",
        warranty: "1-year Premium Support Plus",
        specs: {
            processor: "Intel Core i9-14900HX",
            ram: "64GB DDR5",
            storage: "4TB (2x 2TB) RAID 0",
            screen: "18-inch QHD+ 165Hz",
            gpu: "NVIDIA RTX 4090 16GB",
            keyboard: "CherryMX Mechanical"
        }
    },
    {
        id: 24,
        name: "HP Victus 16 (2025)",
        price: 1050,
        brand: "hp",
        category: "computer-laptops",
        img: "assets/products/24.png",
        warranty: "1-year Warranty",
        specs: {
            processor: "AMD Ryzen 7 7840HS",
            ram: "16GB DDR5",
            storage: "512GB SSD",
            screen: "16.1-inch FHD 144Hz",
            gpu: "NVIDIA RTX 4050 6GB",
            os: "Windows 11"
        }
    },
    {
        id: 25,
        name: "MSI Stealth 14 Studio",
        price: 1999,
        brand: "msi",
        category: "computer-laptops",
        img: "assets/products/25.jpeg",
        warranty: "2-year Warranty",
        specs: {
            processor: "Intel Core i7-13700H",
            ram: "16GB DDR5",
            storage: "1TB SSD",
            screen: "14-inch QHD+ 240Hz IPS",
            gpu: "NVIDIA RTX 4070 8GB",
            weight: "1.7 kg"
        }
    },
    {
        id: 26,
        name: "Samsung Galaxy Book4 Ultra",
        price: 2399,
        brand: "samsung",
        category: "computer-laptops",
        img: "assets/products/26.jpeg",
        warranty: "1-year Warranty",
        specs: {
            processor: "Intel Core Ultra 9",
            ram: "32GB LPDDR5X",
            storage: "1TB SSD",
            screen: "16-inch Dynamic AMOLED 2X Touch",
            gpu: "NVIDIA RTX 4070",
            ecosystem: "Galaxy Link Support"
        }
    },
    {
        id: 27,
        name: "Lenovo IdeaPad Slim 5i",
        price: 749,
        brand: "lenovo",
        category: "computer-laptops",
        img: "assets/products/27.png",
        warranty: "2-year Warranty",
        specs: {
            processor: "Intel Core i5-13500H",
            ram: "16GB DDR5",
            storage: "512GB SSD",
            screen: "15.6-inch FHD OLED",
            weight: "1.79 kg",
            os: "Windows 11 Home"
        }
    }
];

// 2. ດຶງຂໍ້ມູນ Favorite
let favorites = JSON.parse(localStorage.getItem('myFavorites')) || [];

// 3. Function ສະແດງຜົນ (Render)
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    const count = document.getElementById('count');
    if (!grid) return;

    grid.innerHTML = '';
    if (count) count.innerText = items.length;

    if (items.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-10">ບໍ່ພົບສິນຄ້າ</p>`;
        return;
    }

    items.forEach(product => {
        const isFavorite = favorites.includes(product.id);
        const heartClass = isFavorite ? 'text-red-500' : 'text-gray-300';
        const heartFill = isFavorite ? 'currentColor' : 'none';

        grid.innerHTML += `
            <div class="bg-[#180836] rounded-xl overflow-hidden shadow-lg group relative border border-gray-800">
                <button type="button" onclick="event.preventDefault(); toggleFavorite(${product.id})" class="absolute top-3 right-3 z-10 ${heartClass}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="${heartFill}" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
                <a href="detail.html?id=${product.id}" class="block w-full h-48 bg-white p-4">
                    <img src="${product.img}" class="w-full h-full object-contain group-hover:scale-110 transition">
                </a>
                <div class="p-4">
                    <h3 class="text-white font-bold truncate">${product.name}</h3>
                    <span class="text-purple-300 font-bold">${product.price.toLocaleString()}$</span>
                </div>
            </div>
        `;
    });
}

// 4. Function ກອງຂໍ້ມູນ (Filter) - ແກ້ໄຂ Error ຢູ່ບ່ອນນີ້
function applyFilters() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const priceRange = document.getElementById('priceRange');
    const maxPrice = priceRange ? parseFloat(priceRange.value) : 5000;
    
    const selectedCats = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value);
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(el => el.value);

    // ກອງຂໍ້ມູນແລ້ວເກັບລົງໃນ Global Variable
    filteredProducts = products.filter(p => {
        const matchSearch = (p.name || "").toLowerCase().includes(searchText);
        const matchPrice = p.price <= maxPrice;
        const matchCat = selectedCats.length === 0 || selectedCats.includes((p.category || "").toLowerCase());
        const matchBrand = selectedBrands.length === 0 || selectedBrands.includes((p.brand || "").toLowerCase());
        return matchSearch && matchPrice && matchCat && matchBrand;
    });

    currentPage = 1; // ເວລາ Filter ໃໝ່ ໃຫ້ກັບໄປໜ້າ 1 ສະເໝີ
    updateDisplay(); // ເອີ້ນ Function ສະແດງຜົນ
}
function updateDisplay() {
    // 1. ຄິດໄລ່ຕຳແໜ່ງເລີ່ມຕົ້ນ ແລະ ສິ້ນສຸດຂອງສິນຄ້າໃນໜ້ານັ້ນ
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredProducts.slice(startIndex, endIndex);

    // 2. ສະແດງສິນຄ້າ (ໃຊ້ Function renderProducts ເດີມແຕ່ສົ່ງໄປແຕ່ 16 ອັນ)
    renderProducts(paginatedItems);

    // 3. ສະແດງປຸ່ມປ່ຽນໜ້າ
    renderPagination();
}

function renderPagination() {
    const paginationArea = document.getElementById('paginationControls');
    if (!paginationArea) return;

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    if (totalPages <= 1) {
        paginationArea.innerHTML = ''; // ຖ້າມີໜ້າດຽວ ບໍ່ຕ້ອງໂຊປຸ່ມ
        return;
    }

    paginationArea.innerHTML = `
        <div class="flex items-center justify-center gap-4 mt-10 mb-20">
            <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} 
                class="w-10 h-10 flex items-center justify-center rounded-lg bg-[#31225d] text-white disabled:opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <span class="w-10 h-10 flex items-center justify-center rounded-lg bg-[#A855F7] text-white font-bold">
                ${currentPage}
            </span>

            <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} 
                class="w-10 h-10 flex items-center justify-center rounded-lg bg-[#31225d] text-white disabled:opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    `;
}

function changePage(page) {
    currentPage = page;
    updateDisplay();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // ເລື່ອນຂຶ້ນເທິງສຸດເວລາປ່ຽນໜ້າ
}

// 5. Function ປຸ່ມຫົວໃຈ
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index === -1) { favorites.push(productId); } 
    else { favorites.splice(index, 1); }
    localStorage.setItem('myFavorites', JSON.stringify(favorites));
    applyFilters();
}

// 6. Function ປິດ-ເປີດເມນູ Filter (ແກ້ໄຂ Error: toggleFilter is not defined)
function toggleFilter() {
    const content = document.getElementById('filterContent');
    if (content) {
        content.classList.toggle('hidden');
    }
}

// ເລີ່ມຕົ້ນເຮັດວຽກ
document.addEventListener('DOMContentLoaded', () => {
    applyFilters();
});