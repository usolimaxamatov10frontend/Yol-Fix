let token = "8990191602:AAFeFNg1gKOh2VI1N4dZIJwAvxLwVIa6Flg"
let tgID = "6421571071"
let nameInput = document.getElementById("ism");
let phoneInput = document.getElementById("telefon");
let addressInput = document.getElementById("manzil");
let additionalInput = document.getElementById("qoshimcha-izoh");
let submitButton = document.getElementById("submit");

function sendTGBot() {
  if (
    ism.value.trim() === "" ||
    telefon.value.trim() === "" ||
    manzil.value.trim() === ""
) {
    alert("Iltimos, barcha majburiy maydonlarni to'ldiring!");
    return;
}
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: tgID,
      text: `✏️ Ism:  ${nameInput.value}\n📞 Telefon:  ${phoneInput.value}\n📢 Manzil:  ${addressInput.value}\n🗨️ Qo'shimcha izoh:  ${additionalInput.value}`,
    }),
  });
  nameInput.value = "";
  phoneInput.value = "";
  addressInput.value = "";
  additionalInput.value = "";
}

submitButton.addEventListener("click", sendTGBot) 