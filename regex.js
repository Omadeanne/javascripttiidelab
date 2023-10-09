// Regexp golf
function regexTest(regex, str) {
    if (regex.test(str)) {
        console.log(`The string "${str}" matches the regular expression "${regex}".`);
    } else {
        console.log(`The string "${str}" does not match the regular expression "${regex}".`);
    }
}

regexTest(/ca[rt]/, "car");
regexTest(/pr?op/, "pop");
regexTest(/ferr(et|y|ari)/, "ferret");
regexTest(/.ious/, "curious");
regexTest(/\s[.,;:]/, ".");
regexTest(/\w{7,}/, "supercalifragilisticexpialidocious");
regexTest(/[^eE]/, "ab");


// Quoting style
function quotingStyle(text) {
    return text.replace(/(?<!\w)'(.*?)'(?!\w)/g, '"$1"');
}
const text = "She said, 'Don't you want to be happy?'";
console.log(quotingStyle(text));


function numbersAgain(str) {
    const regex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/
    return regex.test(str);
}
console.log(numbersAgain('-5e-3'));