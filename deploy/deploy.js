async function main() {
    const BasicNFTdropper = await ethers.getContractFactory("BasicNFTdropper");
    const basicNFTdropper = await BasicNFTdropper.deploy('0x254b3682d4b13ccbaf35d1b3142332b89f52fba9');

    console.log("basicNFTdropper address:", basicNFTdropper.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });


    //npx hardhat verify --network BSCMainnet 0x23fF55bCcFb446864814D19EDDd11FB42615D50A
    //npx hardhat run deploy/deploy.js --network BSCMainnet 
    //THIS IS THE LIVE CNR ALLWAYS DOUBLE CHECK 0x254b3682d4b13ccbaf35d1b3142332b89f52fba9