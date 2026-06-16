document.addEventListener("DOMContentLoaded", function () {
    
    // Etkileşim 1: Ana Sayfa Buton Etkileşimi
    const heroBtn = document.getElementById("heroBtn");
    if (heroBtn) {
        heroBtn.addEventListener("click", function () {
            alert("Pınar Süt olarak sıfır atık ve sürdürülebilir ambalaj projelerimizle doğayı koruyoruz!");
        });
    }

    // KURAL 5 & 8: İletişim Sayfası Form Kontrolü ve Dinamik Geribildirim
    const contactForm = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // Sayfanın yenilenmesini engelle
            event.preventDefault();

            // Girdileri al ve boşluk temizliği yap
            const fullName = document.getElementById("fullName").value.trim();
            const message = document.getElementById("message").value.trim();

            // Doğrulama mekanizması
            if (fullName === "" || message === "") {
                feedback.innerHTML = `
                    <div class="alert alert-danger d-flex align-items-center" role="alert">
                        <i class="fa-solid fa-circle-exclamation me-2"></i>
                        <div><strong>Hata!</strong> Lütfen zorunlu alanları (* Ad Soyad ve Mesaj) eksiksiz doldurunuz.</div>
                    </div>`;
            } else {
                // Başarılı giriş simülasyon çıktısı
                feedback.innerHTML = `
                    <div class="alert alert-success d-flex align-items-center" role="alert">
                        <i class="fa-solid fa-circle-check me-2"></i>
                        <div>Teşekkür ederiz Sayın <strong>${fullName}</strong>. Mesajınız tüketici veri merkezimize simüle olarak başarıyla iletilmiştir.</div>
                    </div>`;
                
                // Formu sıfırla
                contactForm.reset();
            }
        });
    }
});