
function removeDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function MorseCodeTranslate() {
    var MorseCodeUserInput =  document.getElementById("MorseCodeUserInput").value;
    console.log("MorseCodeUserInput: " + MorseCodeUserInput)
    var MorseCodeUserInputChanged = MorseCodeUserInput.replaceAll("-", "_")
    console.log("MorseCodeUserInputChanged: " + MorseCodeUserInputChanged)
    var MorseCodeUserInputWithSpaces = MorseCodeUserInputChanged.replaceAll("_", "_ ")
    console.log("MorseCodeUserInputWithSpaces: " + MorseCodeUserInputWithSpaces)
    var MorseCodeUserInputWithSpacesFixed = MorseCodeUserInputWithSpaces.replaceAll("_ /", "_/")
    console.log("MorseCodeUserInputWithSpacesFixed: " + MorseCodeUserInputWithSpacesFixed);
    var MorseCodeUserInputWithSpacesFixedError = MorseCodeUserInputWithSpacesFixed.replaceAll("_ |", "_|")
    console.log("MorseCodeUserInputWithSpacesFixedError: " + MorseCodeUserInputWithSpacesFixedError);
    var MorseCodeUserInputWithSpacesFixedFixed = MorseCodeUserInputWithSpacesFixedError.replaceAll("_ .", "_.")
    console.log("MorseCodeUserInputWithSpacesFixedFixed: " + MorseCodeUserInputWithSpacesFixedFixed);
    var MorseCodeUserInputWithSpacesFixedFixedWithoutVerticalLines = MorseCodeUserInputWithSpacesFixedFixed.replaceAll("|", "/");
    console.log("MorseCodeUserInputWithSpacesFixedFixedWithoutVerticalLines: " + MorseCodeUserInputWithSpacesFixedFixedWithoutVerticalLines);
    var length = MorseCodeUserInputWithSpacesFixedFixedWithoutVerticalLines.length * 7;
    console.log("Length: " + length)
    const MorseCode = MorseCodeUserInputWithSpacesFixedFixedWithoutVerticalLines.split("/");
    console.log("MorseCode: " + MorseCode)
    var result = "";
    for (let i=0; i < MorseCode.length; i++) {
        if (MorseCode[i] == "" ) {
            var result = result + " ";
        }
        else if (MorseCode[i] == "._" ) {
            var result = result + "a";
        } else if (MorseCode[i] == "_..." ) {
            var result = result + "b";
        } else if (MorseCode[i] == "_._.") {
            var result = result + "c";
        } else if (MorseCode[i] == "_..") {
            var result = result + "d";
        } else if (MorseCode[i] == ".") {
            var result = result + "e";
        } else if (MorseCode[i] == ".._.") {
            var result = result +   "f";
        } else if (MorseCode[i] == "_ _.") {
            var result = result + "g";
        } else if (MorseCode[i] == "....") {
            var result = result + "h";
        } else if (MorseCode[i] == "_ _ _ _") {
            var result = result + "ch";
        } else if (MorseCode[i] == "..") {
            var result = result + "i";
        } else if (MorseCode[i] == "._ _ _") {
            var result = result + "j";
        } else if (MorseCode[i] == "_._") {
            var result = result + "k";
        } else if (MorseCode[i] == "._..") {
            var result = result + "l";
        } else if (MorseCode[i] == "_ _") {
            var result = result + "m";
        } else if (MorseCode[i] == "_.") {
            var result = result + "n";
        } else if (MorseCode[i] == "_ _ _") {
            var result = result + "o";
        } else if (MorseCode[i] == "._ _.") {
            var result = result + "p";
        } else if (MorseCode[i] == "_ _._") {
            var result = result + "q";
        } else if (MorseCode[i] == "._.") {
            var result = result + "r";
        } else if (MorseCode[i] == "...") {
            var result = result + "s";
        } else if (MorseCode[i] == "_") {
            var result = result + "t";
        } else if (MorseCode[i] == ".._") {
            var result = result + "u";
        } else if (MorseCode[i] == "..._") {
            var result = result + "v";
        } else if (MorseCode[i] == "._ _") {
            var result = result + "w";
        } else if (MorseCode[i] == "_.._") {
            var result = result + "x";
        } else if (MorseCode[i] == "_._ _") {
            var result = result + "y";
        } else if (MorseCode[i] == "_ _..") {
            var result = result + "z";
        } else if (MorseCode[i] == "._ _ _ _") {
            var result = result + "1";
        } else if (MorseCode[i] == ".._ _ _") {
            var result = result + "2";
        } else if (MorseCode[i] == "..._ _") {
            var result = result + "3";
        } else if (MorseCode[i] == "...._") {
            var result = result + "4";
        } else if (MorseCode[i] == ".....") {
            var result = result + "5";
        } else if (MorseCode[i] == "_....") {
            var result = result + "6";
        } else if (MorseCode[i] == "_ _...") {
            var result = result + "7";
        } else if (MorseCode[i] == "_ _ _..") {
            var result = result + "8";
        } else if (MorseCode[i] == "_ _ _ _.") {
            var result = result + "9";
        } else if (MorseCode[i] == "_ _ _ _ _") {
            var result = result + "0";
        } else if (MorseCode[i] == ".._ _..") {
            var result = result + "?";
        } else if (MorseCode[i] == ",") {
            var result = result + "_ _.._ _";
        } else if (MorseCode[i] == "._._._") {
            var result = result + ";";
        } else if (MorseCode[i] == "_.._.") {
            var result = result + "/";
        } else if (MorseCode[i] == "_..._") {
            var result = result + "=";
        } else if (MorseCode[i] == "_...._") {
            var result = result + "-";
        } else if (MorseCode[i] == "._ _ _ _.") {
            var result = result + "'";
        } else if (MorseCode[i] == "_._ _.") {
            var result = result + "(";
        } else if (MorseCode[i] == "_._ _._") {
            var result = result + ")";
        } else if (MorseCode[i] == "._.._.") {
            var result = result + "\"";
        } else if (MorseCode[i] == "_ _ _...") {
            var result = result + ":";
        } else if (MorseCode[i] == "._._.") {
            var result = result + "+";
        } else if (MorseCode[i] == "..__._") {
            var result = result + "_";
        } else if (MorseCode[i] == "._ _._.") {
            var result = result + "@";
        }
    }
    console.log("Result: " + result);
}

