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

//Objects
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



// // Arrays
// const bottle1 = {
//   size: 'large',
//   colors: 'yellow'
// }

// const bottle2 = {
//   size: 'small',
//   colors: 'blue'
// }

// const bottles = [bottle1, bottle2];
// bottles.push(bottle1);
// bottles.push(bottle2);
// bottles;
// bottles[1].colors

// const date = new Date();
// date.toString();
// date.getMonth();
// date.getFullYear();

// // if else statements
// //giconst age = 18;
// if (age >= 18) {
//   'You are true';
// } else {
//   'You are false';
// }

// // for loop
// for (let i = 0; i <= 5; i++) {
//   console.log('We did it!');
// }

// // Functions
// // Defining a function
// function login(username, password) {
//   // validate username and password
//   if (!username || !password) {
//     return 'Username or password not provided';
//   }
//   // verify username and password
//   if (username == 'mickeymond' && password == '1234') {
//     return 'User is logged in';
//   } else {
//     return 'Invalid username or password';
//   }
// }
// // Invoking a function
// login('mickeymond');



// //Basic Arithmetic Operations
// 11 + 12;
// 1 + 45;
// 2 + 2 + 42 - 12;
// 45 / 3;
// 54 * 2;
// 14 % 3;

//Converting strings to numbers
Number ('2') + Number ('2') * Number ('6')


// Strings in JavaScript
// Concatenation
const firstname = 'Felix';
const lastname = 'Kojo';
const middlename = '';


firstname + ' ' + lastname;


// Template literal
`${firstname} ${middlename} ${lastname}`;


//String Methods


let fullName = 'Felix Kojo'
fullName.length
fullName. toUpperCase()
fullName.toLowerCase()
fullName.charAt(3)
fullName.slice(0,5)
fullName.split("")
fullName.replace("Kojo", "Cefa")
fullName.indexOf("Kojo")


//string conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 18000
console.log(`GHS$(amount)`)
amount.toString()


// Write a function that will add a participant to our Google Classroom
// let email = prompt ('Enter email')
// let passcode = prompt ('Enter passcode')


const participants =[];
function addParticipant(email) {
  // Check if email was provided
  if (email === undefined || email === null) {
	return 'No email Provided'
  }
  // Add email to participants
  participants.push(email);
  return 'Participant added';
}

addParticipant('mickeymond@yahoo.com');
addParticipant('mickeymoused@yahoo.com');
addParticipant();
participants;




// //  Arrays in JavaScript
// const users = [
//   {
//     username: 'favoritegirl',
//     password: '1234',
//     email: 'favorite@gmail.com'
//   },
//   {
//   username: 'jheyjay',
//     password: '6160',
//     email: 'jheyjay@gmail.com'
//   }
// ]


// // Write a function that will take a user with firstname, lastname and return fullname;

// Array Methods in JavaScript

function fullName(user) {
  return {
    ...user,
      fullName: `${user.firstname} ${user.lastname}`
  };
}

const user = {
firstname: 'Blac',
lastname: 'Drax'
}
fullName (user);

// Array map
const users = [
{firstname: 'Blac', lastname: 'Monster'},
{firstname: 'Opiod', lastname: 'Grinder'},
{firstname: 'lopiod', lastname: 'Under'},
{firstname: 'Above', lastname: 'Joestar'},
{firstname: 'Luffy', lastname: 'Perndrakon'},
]

users.map(fullName);

// Square of Numbers

function square (number) {
return number ** 2;
}

square(9)

const numbers = [9,6,3,8,5];
numbers.map(square)

// Array filter
function isEven(number) {
return number % 2 === 0;
}

isEven(9)
numbers.filter(isEven);



// Write a function that will allow a user to reset their password


// const user = {
//   email: 'kokomoney@gmail.com',
//   password: '1234'
// }


// function resetPassword (password){
//   if (password === '1234'){
//     return 'Login Password'
//   }
//   else {
//     return 'Reset password'
//   }
 
 
// }


// resetPassword ('2345')


function resetPassword(email, newPassword){
  // Check if email and new password was provided
    if (!email || !newPassword){
      return 'Email or password not provided';
    }
    //
    if (email === user.email){
      user.password =newPassword;
      return 'Password reset successful'
    }
 
  // Check if provided email is correct
  if (email !== user.email) {
    return 'Incorrect email'
  }
   
  }
 
 
  user;
  resetPassword('kokomoney@gmail.com', 6790);
  user;





