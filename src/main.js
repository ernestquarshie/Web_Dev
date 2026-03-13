const myDetails = {
    name: "Ernest Quarshie",
    height: "173cm",
    weight: "59kg",
    "marital status": "single",
    education: "Bachelor's degree in Computer Science",
    networth: null
};
console.log(myDetails["marital status"]);

const playerOne = {
    tag: "first",
    score: 100,
    level: 5
};

function progress(player) {
    console.log(player.score)   
}
progress(playerOne);