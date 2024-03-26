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