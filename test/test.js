const { expect } = require("chai");
const { ethers } = require("hardhat");

async function set(){
    const BirdNFT = await ethers.getContractFactory("BirdNFT");
    const birdNFT = await BirdNFT.deploy();
    await birdNFT.deployed();
    return birdNFT;
}

describe("Simple test", function () {
    it("Should mint twice", async function () {
        const birdNFT = await set();

        const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
    
        await birdNFT.connect(owner).mintMany(0, [addr1.address,addr2.address,addr3.address]);
        await birdNFT.connect(owner).mintMany(3, [addr1.address,addr2.address,addr3.address]);
    });

    it("Should revert if index is negative", async function () {
        const birdNFT = await set();

        const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
    
        await expect(birdNFT.connect(owner).mintMany(-1, [addr1.address,addr2.address,addr3.address])).to.be.reverted;
    });

    it("Should revert if index is overlapping", async function () {
        const birdNFT = await set();

        const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
    
        await birdNFT.connect(owner).mintMany(0, [addr1.address,addr2.address,addr3.address]);
        await expect(birdNFT.connect(owner).mintMany(2, [addr1.address,addr2.address,addr3.address])).to.be.reverted;
    });

    it("Should mint even if startindex is skipping an id", async function () {
        const birdNFT = await set();

        const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
    
        await birdNFT.connect(owner).mintMany(0, [addr1.address,addr2.address,addr3.address]);
        await birdNFT.connect(owner).mintMany(4, [addr1.address,addr2.address,addr3.address]);
    });

    it("Should revert if endMint is true", async function () {
        const birdNFT = await set();

        const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();

        await birdNFT.connect(owner).endMint();
    
        await expect(birdNFT.connect(owner).mintMany(0, [addr1.address,addr2.address,addr3.address])).to.be.reverted;
    });

    it("Should revert if endMint is called but not owner", async function () {
        const birdNFT = await set();

        const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
    
        await expect(birdNFT.connect(addr1).endMint()).to.be.reverted;
    });

    it("Should return owner of id", async function () {
        const birdNFT = await set();

        const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
    
        await birdNFT.connect(owner).mintMany(0, [addr1.address,addr2.address,addr3.address]);

        expect(await birdNFT.ownerOf(0)).to.equal(addr1.address)
        expect(await birdNFT.ownerOf(1)).to.equal(addr2.address)
        expect(await birdNFT.ownerOf(2)).to.equal(addr3.address)
    });

    it("Should be able to mint to same address", async function () {
        const birdNFT = await set();

        const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
    
        await birdNFT.connect(owner).mintMany(0, [addr1.address,addr1.address,addr1.address]);

        expect(await birdNFT.ownerOf(0)).to.equal(addr1.address)
        expect(await birdNFT.ownerOf(1)).to.equal(addr1.address)
        expect(await birdNFT.ownerOf(2)).to.equal(addr1.address)
    });
});