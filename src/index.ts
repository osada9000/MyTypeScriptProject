/**
 * This is sample file.
 */
interface IPerson {
  name: string;
  age: number;
}

const personList: IPerson[] = [
  { name: 'Taro', age: 30 },
  { name: 'Jiro', age: 20 },
  { name: 'Saburo', age: 10 },
  { name: 'yoshio', age: 10 },
];

const over20: IPerson[] = personList.filter((elm: IPerson) => elm.age >= 20);

over20.forEach((elm: IPerson) => {
  console.log(`Name: ${elm.name}, Age: ${elm.age}`);
});

for (const test in over20) {
  console.log('test: ', test);
}
