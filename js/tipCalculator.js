let calc = document.getElementById('submitTotal').onclick = function() {

  const billTotal = Number(document.getElementById('totalBill').value) {
    const tip5 = billTotal * 0.05;
    const tip10 = billTotal * 0.10;
    const tip15 = billTotal * 0.15;
    const tip20 = billTotal * 0.20;

    const totalTip5 = billTotal + tip5;
    const totalTip10 = billTotal + tip10;
    const totalTip15 = billTotal + tip15;
    const totalTip20 = billTotal + tip20;

    document.getElementById('tip').innerHTML = `$${tip5.toFixed(2)} for a 5% tip (Total: ${totalTip5.toFixed(2)}) <br> $${tip10.toFixed(2)} for a 10% tip (Total: ${totalTip10.toFixed(2)}) <br> $${tip15.toFixed(2)} for a 15% tip (Total: ${totalTip15.toFixed(2)}) <br> $${tip20.toFixed(2)} for a 20% tip (Total: ${totalTip20.toFixed(2)}) <br>`
  }

}
