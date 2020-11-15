# Collectible

This is Project 2 of IvanOnTech Academy journey. It is a smart contract which can be used to mint data as NFT token. To achieve this, the contract inherits from [OpenZeppelin ERC721 contract](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol).

The smart contract is deployed on Ropsten testnet and is free to use. If there was a need to monetize, the _mint()_ function could be _payable_, so a pre-defined amount of payment would be requested.

---
## Use cases

At its current form, the project enables to mint data on blockchain and save it in a decentralized way, as well as define and transfer ownership of this data. At the moment, such technology is mostly used for visual collectibles and artwork. This is also meant to be the main use case for this smart contract. 

The data minted would be a link to an image, and then this image would be retrieved when needed. This could happen on an application or marketplace where the frontend supports this. For testing purposes, a simple webpage and the necessary script is included in this repository. 

It is a duty of the minter to ensure that the data behind the minted link will be saved for as long as it may be needed. For this purpose, IPFS was considered as the best option. However, using pure IPFS would mean that someone must personally host the file and keep IPFS node running. Hence, Infura's IPFS service is used, which stores the data as long as it is accessed at least once every 6 months. 

---

## How to use

This section describes how to use the included webpage to interact with the smart contract.

#### Requirements

* MetaMask with Ropsten testnet enabled and some testnet ETH for gas;
* Windows Powershell (or alternative on other OS);
* Python (was tested on v3.8);
* A link to the file to be minted.

The webpage might not work on some versions of Chrome based browsers. For testing, Mozilla Firefox v82 was used.

File storage as such is not the aim of this project. Regarding Infura's IPFS, a detailed tutorial can be found [here](https://blog.infura.io/part-2-getting-started-with-ipfs-on-infura/?&utm_source=infurablog&utm_medium=newsletter&utm_campaign=monthly_update&utm_content=september_update).

#### 1. From the repository, download and place in one folder:

* _abi.js_
* _index.html_
* _main.js_
* _web3.min.js_

This will give a very boring but functional webpage. To see the webpage as designed, download also:

* _notebook.css_
* _background.png_
* _darkModeBackground.png_

#### 2. Open Powershell, navigate to the folder and run:
```
python -m http.server
```
On other operating systems the command may differ.
#### 3. Open Your browser and navigate to:
_http://localhost:8000/_

MetaMask should pop up and connect to the smart contract. If it doesn't, refresh the page.

Unlock Your MetaMask and switch to Ropsten testnet.

#### 4. To mint a new token, follow the instructions on the page.

Make sure to paste a full link! 

For example, if You mint:

_ipfs.infura.io/ipfs/QmSZVjGrP7FkrzcEZWhnLkQyK5LYHK4hf11gwVe5MutLj5_

the page will return only the link, not Your picture! Instead, mint:

_https://ipfs.infura.io/ipfs/QmSZVjGrP7FkrzcEZWhnLkQyK5LYHK4hf11gwVe5MutLj5_

#### 5. Open console and copy the logged transaction hash.

It will appear once You confirm the transaction.

#### 6. Head over to _ropsten.etherscan.io_, paste the hash and find out Your token ID.

Line 7, "Tokens transfered".

#### 7. Type the ID in VIEW field and enjoy Your token!

---
## Improvement points

#### 1. User interface

In order to retrieve the minted data, a token ID is needed, and this ID can be found out only through Etherscan. To improve user experience:

* The freshly minted token ID should be displayed on the page;
* The page should show all tokens belonging to the Ethereum address that is connected (or at least ID of these tokens).

#### 2. Transparency

By deploying the same technology on a non-transparent blockchain, more use cases could be enabled:

* Distribution or transfer of copyrighted digital content, access to which should be restricted to paid customers. It is one of the goals of [Tari project](https://www.tari.com/).
* Cross-chain transfers. By storing private keys or mnemonic seeds in a secure and decentralized way, it would be possible to take any digital asset and move it to the blockchain of the smart contract. [Emblem Vault](https://circuitsofvalue.com/) is planning to achieve this through [Secret Network](https://scrt.network/).
