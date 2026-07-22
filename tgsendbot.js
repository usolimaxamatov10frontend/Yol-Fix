let token = "8990191602:AAFeFNg1gKOh2VI1N4dZIJwAvxLwVIa6Flg"
let tgID = "6421571071"
let nameInput = document.getElementById("ism");
let phoneInput =+ document.getElementById("telefon");
let addressInput = document.getElementById("manzil");
let additionalInput = document.getElementById("qoshimcha-izoh");
let submitButton = document.getElementById("submit");

if(phoneInput.value.length < 9 || phoneInput.value.length > 13) {
  alert("Telefon raqami 9 dan 13 gacha bo'lishi kerak");
  return;
}else if(isNaN(phoneIInput.value)) {
  alert("Telefon raqami faqat raqamlar bo'lishi kerak");
  return;
}

function sendTGBot() {
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: tgID,
      text: `Ism: ${nameInput.value}\nTelefon: ${phoneInput.value}\nManzil: ${addressInput.value}\nQo'shimcha izoh: ${additionalInput.value}`,
    }),
  });
  nameInput.value = "";
  phoneInput.value = "";
  addressInput.value = "";
  additionalInput.value = "";
}

submitButton.addEventListener("click", sendTGBot) 