function ClozeCard (text, cloze) {
	if (this instanceof ClozeCard){
		if(!text.toLowerCase().includes(cloze.toLowerCase())) {
			var errorMessage = cloze + " does not appear in " + text;
			console.log(errorMessage);
			throw new Error(errorMessage);
		}
	this.cloze = cloze;
	this.partial = text.replace(cloze, " ... ");
	this.fullText = text;
} else {
	return new ClozeCard (text, cloze);
}
};


module.exports = ClozeCard;