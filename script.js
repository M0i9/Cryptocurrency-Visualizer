var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var lite = document.getElementById("litecoin");
var ste = document.getElementById("stellar");
var car = document.getElementById("cardano");
var dog = document.getElementById("dogecoin");
var pol = document.getElementById("polkadot");
var tet = document.getElementById("tether");
var neo = document.getElementById("neo");
var blu = document.getElementById("bluzelle");
var nan = document.getElementById("nano");
var das = document.getElementById("dash");
var tro = document.getElementById("tron");
var zc = document.getElementById("zcash");
var nem = document.getElementById("nem");
var bin = document.getElementById("binancecoin");
var io = document.getElementById("iota");
var eo = document.getElementById("theoscoin");
var vec = document.getElementById("vechain");
var dai = document.getElementById("dai");



var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cstellar%2Ccardano%2Cdogecoin%2Cpolkadot%2Ctether%2Cneo%2Cbluzelle%2Cnano%2Cdash%2Ctron%2Czcash%2Cnem%2Cbinancecoin%2Ciota%2Ctheoscoin%2Cvechain%2Cdai&vs_currencies=inr",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    lite.innerHTML = response.litecoin.inr;
    ste.innerHTML = response.stellar.inr;
    car.innerHTML = response.cardano.inr;
    dog.innerHTML = response.dogecoin.inr;
    pol.innerHTML = response.polkadot.inr;
    tet.innerHTML = response.tether.inr;
    neo.innerHTML = response.neo.inr;
    blu.innerHTML = response.bluzelle.inr;
    nan.innerHTML = response.nano.inr;
    das.innerHTML = response.dash.inr;
    tro.innerHTML = response.tron.inr;
    zc.innerHTML = response.zcash.inr;
    nem.innerHTML = response.nem.inr;
    bin.innerHTML = response.binancecoin.inr;
    io.innerHTML = response.iota.inr;
    eo.innerHTML = response.theoscoin.inr;
    vec.innerHTML = response.vechain.inr;
    dai.innerHTML = response.dai.inr;

});
