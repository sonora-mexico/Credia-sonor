

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
.then(r=>r.json())
.then(d=>console.log("BTC:", d.bitcoin.usd))

