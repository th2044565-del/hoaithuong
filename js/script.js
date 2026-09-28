// =========================
// NÚT ĐỔI GIAO DIỆN
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// =========================
// FORM LIÊN HỆ
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Cảm ơn " + name +
        " đã liên hệ với Hoài Thương! 💜"
    );

    contactForm.reset();

});


// =========================
// HIỆU ỨNG KHI CUỘN
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function(section) {
    observer.observe(section);
});