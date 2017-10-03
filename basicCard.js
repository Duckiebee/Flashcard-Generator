function BasicCard (front, back) {
	if (this instanceof BasicCard) {
	this.front = front;
	this.back = back;
} else {
	return new BasicCard (front, back);
}
};

var flashCard = new BasicCard("The apple is red", "red");
var flashCard2 = BasicCard("The apple is red", "red");

module.exports = BasicCard;