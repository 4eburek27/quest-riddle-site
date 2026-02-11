function donate(button, goal) {

    let card = button.closest(".card");
    let raisedElement = card.querySelector(".raised");
    let bar = card.querySelector(".bar");

    let raised = parseInt(raisedElement.innerText);
    raised += 100;

    raisedElement.innerText = raised;

    let percent = (raised / goal) * 100;
    bar.style.width = percent + "%";
}

window.onload = function() {
    document.querySelectorAll(".card").forEach(card => {
        let raised = parseInt(card.querySelector(".raised").innerText);
        let goal = card.querySelector("button").getAttribute("onclick").match(/\d+/)[0];
        let percent = (raised / goal) * 100;
        card.querySelector(".bar").style.width = percent + "%";
    });
}
