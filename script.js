const user = {
  firstname: 'Harry',
  lastname: 'Protter',
}

const createUserWithNewLastName = (newLastName, user) => {
  return {...user, lastname: newLastName}
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);