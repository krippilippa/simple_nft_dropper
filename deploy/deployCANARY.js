async function main() {
    const CanaryNFT = await ethers.getContractFactory("CanaryNFT");
    const canaryNFT = await CanaryNFT.deploy('0x254b3682d4b13ccbaf35d1b3142332b89f52fba9');

    console.log("CanaryNFT address:", canaryNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });


        //npx hardhat verify --network BSCMainnet 0x23fF55bCcFb446864814D19EDDd11FB42615D50A
    //npx hardhat run deploy/deployCANARY.js --network BSCMainnet 



    // THIS IS THE LIVE ONE 0x254b3682d4b13ccbaf35d1b3142332b89f52fba9