const Alphabet = {
    BINARY: "01",
    TRIPLE: "012",
    OCTAL: "01234567",
    DECIMAL: "0123456789",
    HEXA_DECIMAL: "0123456789abcdef",
    ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
    ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ALPHA: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ALPHA_NUMERIC:
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    M_AND_MS: "broyga",
};

function convert(input, source, target) {
    // converting to decimal
    let decimal = 0;
    for (let i = 0; i < input.length; i++) {
        decimal = decimal * source.length + source.indexOf(input[i]);
    }

    // converting to target
    let res = "";
    for (let i = parseInt(decimal); i > 0; ) {
        res = target[i % target.length] + res;
        i = Math.floor(i / target.length);
    }
    return res ? res : target[0];
}

console.log(convert("101", Alphabet.BINARY, Alphabet.DECIMAL));
