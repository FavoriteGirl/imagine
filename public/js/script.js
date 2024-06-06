const btn = document.getElementById('btn');
btn.onclick = function () {
    console.log('You Clicked Me!');
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
}

//variables
const pi = 3.142;
let username = 'favoritegirl';
let age = 28;
let present = false;

//Objets
const person = {
    username: 'favoritegirl',
    age: 28,
    present: false,
    child: {
        name: 'Roy',
        age: '14',
        friend: {
            name: 'Jude',
            age: '16',
            school: {
                name: 'crig',
                age: '20',
            }
        }
    }
}
console.log(person.username);
person.age = 30;
console.log(person.child.friend.school)

// Arrays
const bottle1 = {
    size: 'large',
    colors: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    colors: 'blue'
  }
  
  const bottles = [bottle1, bottle2];
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[1].colors
  
  const date = new Date();
  date.toString();
  date.getMonth();
  date.getFullYear();
  
  // if else statements
  //giconst age = 18;
  if (age >= 18) {
    'You are true';
  } else {
    'You are false';
  }
  
  // for loop
  for (let i = 0; i <=5; i++) {
    console.log('We did it!');
  }

   // Functions
// Defining a function
function login(username, password) {
  // validate username and password
  if (!username || !password) {
    return 'Username or password not provided';
  }
  // verify username and password
  if (username == 'mickeymond' && password =='1234') {
    return 'User is logged in';
  } else {
    return 'Invalid username or password';
  }    
}
// Invoking a function
login('mickeymond');



//Basic Arithmetic Operations
11+12;
1+45;
2+2+42-12;
45/3;
54*2;
14 % 3;
