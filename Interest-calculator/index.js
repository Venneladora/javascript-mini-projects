function calculateCI() {
    let P = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value) / 100;
    let t = Number(document.getElementById("year").value);
    let n = Number(document.getElementById("nooftimes").value);

    if (P <= 0 || r <= 0 || t <= 0 || n <= 0) {
        alert("Please enter valid values!");
        return;
    }

    let A = P * Math.pow((1 + r / n), n * t);
    let CI = A - P;

    document.getElementById("total-amount").innerText = "₹" + A.toFixed(2);
    document.getElementById("ci-amount").innerText = "₹" + CI.toFixed(2);
}

function resetFields() {
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("year").value = "";
    document.getElementById("nooftimes").value = "";

    document.getElementById("total-amount").innerText = "₹0.00";
    document.getElementById("ci-amount").innerText = "₹0.00";
}