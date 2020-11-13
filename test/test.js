const Collectible = artifacts.require("Collectible");
//const truffleAssert = require("truffle-assertions");

contract ("Collectible", async function (){

    let instance;

    before(async function(){
        instance = await Collectible.deployed();
    });

    it("should mint a token and return its ID", async function (){
      //  await truffleAssert.passes(instance.mint("ipfs.infura.io/ipfs/QmSZVjGrP7FkrzcEZWhnLkQyK5LYHK4hf11gwVe5MutLj5") === 0, truffleAssert.ErrorType.REVERT);
        assert(instance.mint("ipfs.infura.io/ipfs/QmSZVjGrP7FkrzcEZWhnLkQyK5LYHK4hf11gwVe5MutLj5") == 0, "should return correct ID")
    });

    it("should return the token by ID", async function (){
      //  await truffleAssert.passes(instance.viewCollectible(0) === "ipfs.infura.io/ipfs/QmSZVjGrP7FkrzcEZWhnLkQyK5LYHK4hf11gwVe5MutLj5", truffleAssert.ErrorType.REVERT);
        instance.mint("ipfs.infura.io/ipfs/QmSZVjGrP7FkrzcEZWhnLkQyK5LYHK4hf11gwVe5MutLj5");
        assert(instance.viewCollectible(0) === "ipfs.infura.io/ipfs/QmSZVjGrP7FkrzcEZWhnLkQyK5LYHK4hf11gwVe5MutLj5", "should return correct token")
    });

});
