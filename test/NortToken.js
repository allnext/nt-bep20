const {
    expect
} = require("chai");
const {
    ethers
} = require("hardhat");
const {
    bountyAddress,
    marketingAddress,
    developmentAddress,
    teamAddress,
    liquidityAddress
} = require('../secrets.json')

describe("Nort token contract", () => {
    let NortToken;
    let nortToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    // `beforeEach` will run before each test, re-deploying the contract every
    // time. It receives a callback, which can be async.
    beforeEach(async () => {
        NortToken = await ethers.getContractFactory("NortToken");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        nortToken = await NortToken.deploy('Nort Token', "NT", bountyAddress, marketingAddress, developmentAddress, teamAddress, liquidityAddress);
        token = await nortToken.deployed();
        console.log("Nort test token deployed to:", token.address);
        return;
    })

    describe("Deployed to correct owner", async () => {
        it("Should assign the total supply of tokens to the owner", async () => {
            const ownerBalance = await nortToken.balanceOf(owner.address);
            expect(ownerBalance).to.equal(ownerAllocation)
        })
    })

})