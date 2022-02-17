async function main() {
    // We get the contract to deploy
    const ChromiaNetResolver = await ethers.getContractFactory("ChromiaNetResolver");
    const chromiaNetResolver = await ChromiaNetResolver.deploy();

    console.log("CNR address:", chromiaNetResolver.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });