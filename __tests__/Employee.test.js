//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole()//returns 'employee'
cosnt Employee = require('../lib/Employee');
test('creates a player object', () => {
    const employee = new Player('Alec');
    
    expect(employee.name).toBe('Alec');
    expect(employee.Id).toEqual(expect.any(Number));
    expect(employee.emailAddress).toEqual(expect.any(emailAddress));
    expect(employee.officeNumber).toEqual(expect.any(officeNumber));
  });