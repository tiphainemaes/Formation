function conversionDollar(euro) {
    let dollar = 0;

    dollar = parseFloat(euro) * 1.24;

    console.log(euro);
    console.log(dollar);

    document.getElementById("dollar").value = dollar;
}

function conversionEuro(dollar) {
    let euro = 0;

    euro = parseFloat(dollar) * 0.81;

    console.log(euro);
    console.log(dollar);

    document.getElementById("euro").value = euro;
}