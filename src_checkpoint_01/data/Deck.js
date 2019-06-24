class Deck {
constructor(name) {
this.name = name;
this.id = "deck:" + name;
this.cards = [];
}
setFromObject(ob) {
this.name = ob.name;
this.cards = ob.cards;
this.id = ob.id;
}
static fromObject(ob) {
let d = new Deck(ob.name);
d.setFromObject(ob);
return d;
}
addCard(card) {
this.cards = this.cards.concat(card);
}
}
export default Deck;