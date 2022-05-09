//school
//getSchool
//getRole()//overridden to return 'intern'

test('creates a player object', () => {
    const Intern = new Intern('John');
  
    expect(Intern.name).toBe('John');
    expect(Intern.school).toEqual(expect.any(Number));
    expect(Intern.getSchool).toEqual(expect.any(school));
    expect(Intern.role).toEqual(expect(Intern));//im curious if this is right or not, pretty sure i need to create a function ()
  });