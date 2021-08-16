// scripts/deploy.js
async function main() {
    // ethers is avaialble in the global scope
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying the contracts with the account:",
        await deployer.getAddress()
    );

    const NortToken = await ethers.getContractFactory("NortToken");
    console.log("Deploying Nort Token...");
    // const nortToken = await upgrades.deployProxy(NortToken, ['Nort Token', 'NT'], {
    //     initializer: 'initialize'
    // });
    const nortToken = await NortToken.deploy('Nort Token', 'NT');
    console.log("Nort token deployed to:", nortToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });