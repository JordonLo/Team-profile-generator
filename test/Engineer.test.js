const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jordon', 24, 'J.lor99@yahoo.com', 'Jordon23');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Jordon', 24, 'J.lor99@yahoo.com', 'Jordon23');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Jordon', 24, 'J.lor99@yahoo.com', 'Jordon23');

    expect(engineer.getRole()).toEqual("Engineer");
});