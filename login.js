document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // 1. ຈັດການການ Login ເມື່ອກົດ Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // ຢຸດການ reload ໜ້າເວັບ

        const phone = document.getElementById('PhoneN').value;
        const password = document.getElementById('pass').value;

        // ຕົວຢ່າງການກວດສອບເງື່ອນໄຂເບື້ອງຕົ້ນ
        if (phone === "02012345678" && password === "123456") {
            message.style.color = "green";
            message.textContent = "ເຂົ້າສູ່ລະບົບສຳເລັດ!";

            setTimeout(() => {
            window.location.href = "../index.html"; 
              }, 1500);
        } else {
            message.style.color = "red";
            message.textContent = "ເບີໂທ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ!";
        }
    });

    // 2. ຈັດການປຸ່ມ Google
    document.getElementById('google').addEventListener('click', () => {
        alert('ກຳລັງເຊື່ອມຕໍ່ກັບ Google...');
    });

    // 3. ຈັດການປຸ່ມ Facebook
    document.getElementById('facebook').addEventListener('click', () => {
        alert('ກຳລັງເຊື່ອມຕໍ່ກັບ Facebook...');
    });

    // 4. ຈັດການລິ້ງ Forget Password
    document.getElementById('FG').addEventListener('click', (e) => {
        e.preventDefault();
        alert('ລະບົບກຳລັງສົ່ງລິ້ງກູ້ຄືນລະຫັດຜ່ານໄປຫາເບີໂທຂອງທ່ານ.');
    });

    // 5. ຈັດການປຸ່ມ Register
    document.getElementById('Regis').addEventListener('click', (e) => {
        e.preventDefault();
        alert('ໄປທີ່ໜ້າລົງທະບຽນ...');
    });
});