let petNames = ['Gans', 'Fiona', 'Kesha', 'Ryan'];

console.log(  petNames  );

for (let i = 0; i < petNames.length; i++) {
  console.log( petNames[i] );

  printHello(petNames[i]);

  if (petNames[i].length < 5) {
    console.log('Name: ' + petNames[i] + ' is short!');
  } else {
    console.log('Name: ' + petNames[i] + ' is long!');
  }

}




let myName = ' ';

console.log(myName.length);


if (myName) {
  console.log('Hello, ' + myName);
} else {
  console.log('Hello, tovarishc');
}


function printHello(name) {
  if (name) {
    console.log('Hello, ' + name);
  } else {
    console.log('Hello, tovarishc');
  }
}

printHello();
printHello('Enot');

