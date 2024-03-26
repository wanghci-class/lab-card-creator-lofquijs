document.getElementById("preview").addEventListener("click", function() {
    var to = document.getElementById("to").value;
    var from = document.getElementById("from").value;
    var title = document.getElementById("title").value;
    var subtitle = document.getElementById("subtitle").value;
    var message = document.getElementById("message").value;

    document.querySelector(".title-text").textContent = title;
    document.querySelector(".subtitle-text").textContent = subtitle;
    document.querySelector(".to-text").textContent = to;
    document.querySelector(".message-text").textContent = message;
    document.querySelector(".from-text").textContent = from;
  });

  document.getElementById("save").addEventListener("click", function(event) {
    event.preventDefault();

    var cards = localStorage.getItem("cards");
    if (cards) {
      cards = JSON.parse(cards); 
    } else {
      cards = []; 
    }

    var newCard = {
      to: document.getElementById("to").value,
      from: document.getElementById("from").value,
      title: document.getElementById("title").value,
      subtitle: document.getElementById("subtitle").value,
      message: document.getElementById("message").value
    };

    cards.push(newCard);

    localStorage.setItem("cards", JSON.stringify(cards));
  });