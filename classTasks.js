// Task 1

// class Student {
//     constructor(name, age) {

//     this.name = name;

//     this.age = age;

//     this.technologies = [];

//     this.status = 'Junior';

//     this.setTechnologies = function(technologies) {

//     this.technologies = [

//     ...this.technologies,

//     ...technologies,

//     ];

//     }

//     this.setNewStatus = function(newStatus) {

//     this.status = newStatus;

//     }

//     }
// }
//     const student = new Student('Maxim', 20);

//     student.setTechnologies(['HTML', 'CSS', 'JavaScript']);

//     student.setNewStatus('Middle');

//     console.log(student);


// Task 2

// class Person {
//  constructor(name, age) {
//      this.name = name;
//      this.age = age;
//  }

//  compareAge(newPerson) {
//      if (this.age > newPerson.age) {
//          alert(`${this.name} older ${newPerson.name}`);
//      } else if (this.age < newPerson.age) {
//          alert(`${this.name} younger ${newPerson.name}`);
//      }
//  }
// }

// const person1 = new Person('Maxim', 24);
// const person2 = new Person('Svetlana', 36);
// const person3 = new Person('Irina', 23);

// person1.compareAge(person2); // Maxim is younger than Svetlana
// person2.compareAge(person3); // Svetlana is older than Irina
// person3.compareAge(person1); // Irina is younger than Maxim

// Task 3
// class CarService {
//     static DefaultWorkingHours = {
//         from: '9:00',
//         till: '20:00',
//     }
//     constructor(serviceName, workingHours) {
//         this.serviceName = serviceName;
//         this.workingHours = workingHours;
//         this.DefaultWorkingHoursFrom = Number(CarService.DefaultWorkingHours.from.split(':')[0]);
//         this.DefaultWorkingHoursTill = Number(CarService.DefaultWorkingHours.till.split(':')[0]);
//         this.workingHoursFrom = Number(workingHours.from.split(':')[0]);
//         this.workingHoursTill = Number(workingHours.till.split(':')[0]);
//     }

//     repairCar(carName) {
//         this.carName = carName;
//         if (!carName) {
//             console.log("You need to specify the name of the car in order to repair it")
//         } else {
//             if (this.DefaultWorkingHoursFrom < this.workingHoursFrom && this.DefaultWorkingHoursTill > this.workingHoursTill) {
//                 console.log(`Now we will repair your car ${this.carName} Please wait`)

//             } else {
//                 console.log('Unfortunately, we are closed now.')
//             }
//         }
//     }

// }

// const carService = new CarService('RepairCarNow', { from: '10:00', till: '19:00' });
// carService.repairCar('BMW');

// const test = new CarService('RepairCarNow', { from: '12:00', till: '15:00' });
// test.repairCar('Tesla');


// Task 4
// class Dictionary {
//   constructor(name) {
//     this.name = name;
//     this.words = [];
//   }

//   add(word, description) {
//     if (!this.words.find((w) => w.word === word)) {
//       this.words.push({ word, description });
//     }
//   }

//   remove(word) {
//     this.words = this.words.filter((w) => w.word !== word);
//   }

//   get(word) {
//     const foundWord = this.words.find((w) => w.word === word);
//     return foundWord ? foundWord.description : null;
//   }

//   showAllWords() {
//     this.words.forEach((w) => console.log(`${w.word} - ${w.description}`));
//   }
// }


// const dictionary = new Dictionary('Explanatory Dictionary');
// dictionary.add('JavaScript', 'popular programming language');
// dictionary.add('Web developer', 'A person who creates new services and sites or maintains and supplements existing ones');

// dictionary.remove('JavaScript');
// dictionary.showAllWords();

// Task 5

// class wordDictionary extends Dictionary {
//   constructor(name) {
//     super(name);
//   }

//   add(word, description) {
//     if (!(word in this.words)) {
//       const wordObj = {
//         word: word,
//         description: description,
//         isDifficult: true
//       };
//       this.words[word] = wordObj;
//     }
//   }
// }

// const wordDictionary = new wordDictionary('Hard words');
// wordDictionary.add('amateur', 'One who practices science or art without special training, having only a superficial knowledge.');
// wordDictionary.add('neologism', 'A new word or expression, as well as the new meaning of the old word.');
// wordDictionary.add('quantum', 'The indivisible part of some quantity in physics.');

// wordDictionary.remove('neologism');
// wordDictionary.showAllWords();

// Task 6

// class Dictionary {
//   #name;
//   #words;

//   constructor(name) {
//     this.#name = name;
//     this.#words = {};
//   }

//   addNewWord(word, description) {
//     const newWord = {
//       word: word,
//       description: description,
//       isDifficult: false,
//     };
//     this.#words[word] = newWord;
//   }

//   add(word, description) {
//     if (!this.#words[word]) {
//       this.addNewWord(word, description);
//     } else {
//       console.log(`${word} already exists in the dictionary`);
//     }
//   }

//   remove(word) {
//     if (this.#words[word]) {
//       delete this.#words[word];
//     } else {
//       console.log(`${word} not found in the dictionary`);
//     }
//   }

//   showAllWords() {
//     for (const [word, details] of Object.entries(this.#words)) {
//       console.log(`${word} - ${details.description}`);
//     }
//   }

//   get mainName() {
//     return this.#name;
//   }

//   set setMainName(newName) {
//     this.#name = newName;
//   }

//   get allWords() {
//     return this.#words;
//   }
// }

// class wordDictionary extends Dictionary {
//   add(word, description) {
//     const newWord = {
//       word: word,
//       description: description,
//       isDifficult: true,
//     };
//     this.#words[word] = newWord;
//   }
// }

// const wordDictionary = new wordDictionary('Difficult words');
// wordDictionary.add('amateur', 'One who practices science or art without special training, having only a superficial knowledge.');
// wordDictionary.add('neologism', 'A new word or expression, as well as the new meaning of the old word.');
// wordDictionary.add('quantum', 'The indivisible part of some quantity in physics.');

// wordDictionary.remove('neologism');
// wordDictionary.showAllWords();

// console.log(wordDictionary.mainName);
// wordDictionary.setMainName = 'New Dictionary';
// console.log(wordDictionary.mainName);
// console.log(wordDictionary.allWords);


// Task 7

// class Developer {
//     constructor(fullName, age, position) {
//         this.fullName = fullName;
//         this.age = age;
//         this.position = position || "Junior";
//         this.technologies = [];
//     }

//     code() { }

//     learnNewTechnology(technology) {
//         this.technologies.push(technology);
//     }
// }

// class JuniorDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age, "Junior");
//         this.technologies = ["HTML", "CSS", "JavaScript"];
//     }

//     code() {
//         console.log("Junior developer is writing code...");
//     }
// }

// class MiddleDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age, "Middle");
//         this.technologies = ["HTML", "CSS", "JavaScript", "React"];
//     }

//     code() {
//         console.log("Middle developer is writing code...");
//     }
// }

// class SeniorDeveloper extends Developer {
//     constructor(fullName, age) {
//         super(fullName, age, "Senior");
//         this.technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
//     }

//     code() {
//         console.log("Senior developer is writing code...");
//     }
// }

// const juniorDeveloper = new JuniorDeveloper("Anastasia", 20);
// const middleDeveloper = new MiddleDeveloper("Igor", 25);
// const seniorDeveloper = new SeniorDeveloper("Maxim", 30);

// juniorDeveloper.code();
// middleDeveloper.code();
// seniorDeveloper.code();

// console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position);
// console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position);
// console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position); 
