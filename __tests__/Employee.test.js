const Employee = require("../lib/Employee")

//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole()//returns 'employee'

test('tests employee constructor object', () => {
    const employee = new Employee('Alec', 5, "alec@gmail.com");
    
    expect(employee.name).toBe('Alec');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('alec@gmail.com');
    
  });

  test('tests getName() method', () => {
    const employee = new Employee('Alec', 5, "alec@gmail.com");
    expect(employee.getName()).toBe('Alec');
  }); 

  test('test getId() method', () => {
    const employee = new Employee('Alec', 5, "alec@gmail.com");
    expect(employee.getId()).toBe(5);
  })

