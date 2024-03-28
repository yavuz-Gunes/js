let userName;

do {
    userName = prompt("Lütfen Kullanıcı Adınızı Giriniz:");
    if (userName === null || userName.trim() === "") {
        alert("Kullanıcı adı boş bırakılamaz!");
    }
} while (userName === null || userName.trim() === "");

let değişen = document.getElementById("myName");
değişen.innerHTML = userName;


 function updateClock() {
    // Şu anki zamanı al
    var now = new Date();

    // Saat, dakika ve saniyeyi al
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    // Saati, dakikayı ve saniyeyi iki basamaklı olarak göstermek için gerekirse başlarına sıfır ekle
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    // Formatı oluştur
    var currentTime = hour + ":" + minute + ":" + second;

    // Oluşturulan saati ekrana yaz
    document.getElementById("myClock").innerText = currentTime;
}


setInterval(updateClock, 1000);