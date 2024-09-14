function firstChar(text) {
  // your code here

	// iterate over each character in the string
	for(let i = 0; i< text.length; i++) {
		//check if the character is not a space
		if(text[i] !== ' ') {
			return text[i];
		}
	}
	//if no space character is found
	//return an empty string
	return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
