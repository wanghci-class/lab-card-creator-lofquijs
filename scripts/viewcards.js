let cards = JSON.parse(localStorage.getItem('cards'));
let template = document.getElementById('card-template');


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);

    let cardView = template.content.cloneNode(true);
    let titleText = cardView.querySelector(".title-text");
    let fromText = cardView.querySelector(".from-text");
    let toText = cardView.querySelector(".to-text");
    let subtitleText = cardView.querySelector(".subtitle-text");
    let messageText = cardView.querySelector(".message-text");

    titleText.textContent = card.title;
    fromText.textContent = card.from;
    toText.textContent = card.to;
    subtitleText.textContent = card.subtitle;
    messageText.textContent = card.message;

    let deleteButton = cardView.querySelector(".delete-btn");
    if (deleteButton) {
        deleteButton.addEventListener("click", () => {
            console.log(i);
            cards.splice(i, 1);
            localStorage.setItem('cards', JSON.stringify(cards));
            location.reload();
        });
    }

    titleText.addEventListener("input", updateCard);
    fromText.addEventListener("input", updateCard);
    toText.addEventListener("input", updateCard);
    subtitleText.addEventListener("input", updateCard);
    messageText.addEventListener("input", updateCard);

    function updateCard() {
        card.title = titleText.textContent;
        card.from = fromText.textContent;
        card.to = toText.textContent;
        card.subtitle = subtitleText.textContent;
        card.message = messageText.textContent;

        localStorage.setItem('cards', JSON.stringify(cards));
    }

    document.querySelector('main#card-list').appendChild(cardView);
}


