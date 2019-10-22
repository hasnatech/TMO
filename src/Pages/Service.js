
var val;

function setValue(input) {
    val = input;
}

function getValue() {
   return val;
}

module.exports = {
    setValue: setValue,
    getValue: getValue,
};