import { auth } from "./firebase-config.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

  if (!user) {

    const loginPage = window.location.pathname.includes("/pages/")
      ? "login.html"
      : "pages/login.html";

    window.location.href = loginPage;

  }

});
