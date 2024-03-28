const cards = JSON.parse(localStorage.getItem('cards'));

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    console.log(card);
}


const template = document.getElementById('card-template');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardView = template.content.cloneNode(true);
    const titleText = cardView.querySelector(".title-text");
    const fromText = cardView.querySelector(".from-text");
    const toText = cardView.querySelector(".to-text");
    const subtitleText = cardView.querySelector(".subtitle-text");
    const messageText = cardView.querySelector(".message-text");

    titleText.textContent = card.title;
    fromText.textContent = card.from;
    toText.textContent = card.to;
    subtitleText.textContent = card.subtitle;
    messageText.textContent = card.message;

    const deleteButton = cardView.querySelector(".delete-btn");
    if (deleteButton) {
        deleteButton.addEventListener("click", () => {
            console.log(i);
            cards.splice(i, 1);
            localStorage.setItem('cards', JSON.stringify(cards));
            location.reload();
        });
    }

    document.querySelector('main#card-list').appendChild(cardView);
}

