//github // github username
//getGithub()
//getRole()//Overridden to return 'engineer'
const Engineer = require('../lib/Engineer');
test('creates a player object', () => {
    const engineer = new engineer('Tammer');
  
    expect(engineer.name).toBe('Tammer');
    expect(engineer.githubUsername).toEqual(expect.any(githubUsername));
    expect(engineer.githubLink).toBe(expect.any(githubLink));
  });

  //should the github link be a toBe
