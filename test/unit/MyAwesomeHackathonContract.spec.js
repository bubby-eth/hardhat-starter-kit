const { network, ethers } = require("hardhat")
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("My Awesome Hackathon Contract Unit Tests", async function () {
        async function deployMyAwesomeContract() {
            const myAwesomeContractFactory = await ethers.getContractFactory("MyAwesomeContract");
            const myAwesomeContract = await myAwesomeContractFactory.deploy();
            await myAwesomeContract.deployed();

            return myAwesomeContract;
        }

        it.only("should return message", async function () {
            const myAwesomeContract = await loadFixture(deployMyAwesomeContract);

            await myAwesomeContract.dummy(); //we are calling function
            const message = await myAwesomeContract.message();
            assert(message === "#BUIDL"); //reverts if not equal
        })
    })