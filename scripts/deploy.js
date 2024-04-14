const hre = require("hardhat");

async function main(){
  //const ChatApp = await hre.ethers.getContractFactory("ChatApp");
 //const chatApp = await ChatApp.deploy();
 ChatApp = await hre.ethers.deployContract("ChatApp");
  await ChatApp.waitForDeployment();
  
  //console.log(`Contract Address: ${chatApp.address}`);
  console.log(ChatApp.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});