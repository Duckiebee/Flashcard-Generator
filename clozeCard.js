function ClozeCard (text, cloze) {
	var partialText = function() {
		var splitText = text.split(cloze);
		if(splitText[0] === cloze) {
			return " ... " + splitText[1];
		}
		else if(splitText[1] === cloze) {
			return splitText[0] + " ... ";
		}
		else {
			var errorMessage = cloze + " does not appear in " + text;
			console.log(errorMessage);
			alert(errorMessage);
			throw new Error(errorMessage);
		}
	}
	this.cloze = cloze;
	this.partial = partialText;
	this.fullText = text;
}


module.exports = ClozeCard;