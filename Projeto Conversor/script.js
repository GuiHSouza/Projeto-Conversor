function convert() {
    const dollarValue = parseFloat(document.getElementById("dollarValue").value);
    const exchangeRate = 5.79; 
    if (!isNaN(dollarValue) && dollarValue > 0) {
        const realValue = dollarValue * exchangeRate;
        document.getElementById("result").innerText = `R$ ${realValue.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Por favor, insira um valor válido em dólares.";
    }
}
