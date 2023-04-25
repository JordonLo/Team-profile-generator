const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Jordon', 24, 'J.lor99@yahoo.com', 'JHBC');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Jordon', 24, 'J.lor99@yahoo.com', 'JHBC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Jordon', 24, 'J.lor@yahoo.com', 'JHBC');

    expect(intern.getRole()).toEqual("Intern");
}); 