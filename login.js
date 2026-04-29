document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // =========================
    // 1. LOGIN SYSTEM
    // =========================
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const phone = document.getElementById('PhoneN').value;
        const password = document.getElementById('pass').value;

        // ຕົວຢ່າງ login (mock)
        if (phone === "02012345678" && password === "123456") {

            const userData = {
                name: "Thee",
                img: "IMG/Thae la berd.jpg"
            };

            // ບັນທຶກ user ລົງ localStorage
            localStorage.setItem("user", JSON.stringify(userData));

            message.style.color = "green";
            message.textContent = "Login success!";

            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1200);

        } else {
            message.style.color = "red";
            message.textContent = "Phone or password incorrect!";
        }
    });

    // =========================
    // 2. GOOGLE LOGIN (mock)
    // =========================
    document.getElementById('google').addEventListener('click', () => {
        const userData = {
            name: "Google User",
            img: "IMG/google-user.png"
        };

        localStorage.setItem("user", JSON.stringify(userData));

        alert('Login with Google...');
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 800);
    });

    // =========================
    // 3. FACEBOOK LOGIN (mock)
    // =========================
    document.getElementById('facebook').addEventListener('click', () => {
        const userData = {
            name: "Facebook User",
            img: "IMG/facebook-user.png"
        };

        localStorage.setItem("user", JSON.stringify(userData));

        alert('Login with Facebook...');
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 800);
    });

    // =========================
    // 4. FORGET PASSWORD
    // =========================
    document.getElementById('FG').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Reset link sent to your phone number.');
    });

    // =========================
    // 5. REGISTER
    // =========================
    document.getElementById('Regis').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Go to register page...');
    });
});