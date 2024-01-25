let n;
let lower = 'asdfghjklqwertyuiopzxcvbnm';
let upper = lower.toUpperCase();
let specialsymbol = '~!@#$%^&*()_+=-?/';
let num = '1234567890';
lower = [...lower];
upper = [...upper];
specialsymbol = [...specialsymbol];
num = [...num];
const randomnum = (something) => Math.floor(Math.random() * something.length);
function password() {
    let pass=''
    while (pass.length < n) {
        let x = lower[randomnum(lower)];
        let y = upper[randomnum(upper)];
        let c = num[randomnum(num)];
        let z = specialsymbol[randomnum(specialsymbol)];
        pass += x + y + c + z;
    }
    pass = pass.slice(0, n);
    return pass;
}
document.getElementById("submit").onclick = function () {
    n = document.getElementById("passwordlen").value;
    document.getElementById("passwordr").value=password();
}