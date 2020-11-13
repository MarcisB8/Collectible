var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(abi, "0xc1800f5BE2be7A28b6d35B986f35525228385388", {from: accounts[0]});
      console.log(contractInstance);
    });
    $("#mintButton").click(mint);
    $("#viewButton").click(view);
});

  var link;

  function mint(){

    var link = $("#linkInput").val();

    contractInstance.methods.mint(link).send(link)
    .on("transactionHash", function(hash){
      console.log(hash);
    })
    .on("confirmation", function(_id){
        console.log(_id);
    });
  }

  function view(){

    var id = parseInt($("#idInput").val());

    window.ethereum.enable().then(function(accounts){
      contractInstance.methods.viewCollectible(id).call({from:accounts[0]}).then(function(res){
        console.log (res);
        $("#linkOutput").text(res);
        var img = document.createElement("img");
        img.src = (res);
        var src = document.getElementById("imageOutput");
        src.appendChild(img);
      })
    })
  }

  function darkMode() {   /* Toggles dark mode on body */
   var element = document.body;
   element.classList.toggle("darkMode");
 }
