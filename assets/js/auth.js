/* ==========================================
   CARDS STORE
   AUTH SCRIPT
   Version : 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOGIN FORM
    ========================== */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            if (email === "") {

                alert("Please enter your email.");

                return;

            }

            if (!email.includes("@")) {

                alert("Please enter a valid email address.");

                return;

            }

            if (password === "") {

                alert("Please enter your password.");

                return;

            }

            if (password.length < 6) {

                alert("Password must be at least 6 characters.");

                return;

            }

            const button = loginForm.querySelector(".login-btn");

            button.disabled = true;
            button.textContent = "Logging In...";

            setTimeout(() => {

                alert("✅ Login successful (Demo Mode).\n\nIn the next milestone this will connect to Supabase.");

                button.disabled = false;
                button.textContent = "Login";

            }, 1500);

        });

    }

    /* ==========================
       SHOW / HIDE PASSWORD
    ========================== */

    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    if (togglePassword && passwordInput) {

        togglePassword.addEventListener("click", () => {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";
                togglePassword.textContent = "🙈";

            } else {

                passwordInput.type = "password";
                togglePassword.textContent = "👁";

            }

        });

    }

});