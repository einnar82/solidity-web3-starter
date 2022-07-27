const TestContract = artifacts.require("TestContract")

contract("TestContract", (accounts) => {
    let contract

    before(async () => {
        contract = await TestContract.deployed();
    });

    it('deploys successfully', async () => {
        const address = contract.address;
        assert.notStrictEqual(address, '');
        assert.notStrictEqual(address, null);
        assert.notStrictEqual(address, undefined);
        assert.notStrictEqual(address, 0x0);
    })

    it('has a greet method', async () => {
        const message = await contract.greet();
        assert.equal(message, 'Hello, world!');
    })

});