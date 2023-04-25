const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Jordon', 23, 'J.lor99@yahoo.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Jordon', 23, 'J.lor99@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
}); 