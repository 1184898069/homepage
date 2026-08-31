
(function () {
  const store = window.SHIPNET_STORE || { priceUsd: 49, creemPaymentLink: "" };
  const root = document.documentElement;
  const saved = localStorage.getItem("shipnet_lang");
  const start = saved || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en");
  setLang(start);

  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(root.getAttribute("data-lang") === "zh" ? "en" : "zh"));
  });

  document.querySelectorAll("[data-price]").forEach((el) => {
    el.textContent = "$" + store.priceUsd;
  });

  const buy = document.getElementById("buy");
  buy.addEventListener("click", () => {
    const link = (store.creemPaymentLink || "").trim();
    if (link) {
      window.location.href = link;
      return;
    }
    document.getElementById("connect-modal").classList.add("show");
  });

  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("connect-modal").classList.remove("show");
  });

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    localStorage.setItem("shipnet_lang", lang);
    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      btn.textContent = lang === "zh" ? "EN" : "中文";
    });
  }
})();
