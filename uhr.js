
function updateUhr() {
        const jetzt = new Date();
        const stunden = `String(jetzt.getHours()).padStart(2. "0")`;
        const minuten =  `String(jetzt.getMinutes()).padStart(2, "0")`;
        const sekunden = `String(jetzt.getSeconds()).padStart(2, "0")`;

        const uhrString =  `{stunden}:${minuten}:${sekunden}`;
	document.getElementById("uhr").textContent =uhrString;
}



updateUhr();

setInterval(updateUhr, 1000);

