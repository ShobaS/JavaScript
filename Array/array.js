// print object by id
let printById = (arr, id) => {
  let filteredItem = arr.filter((item) => {
    return item.id === id;
  });
  return filteredItem[0].name;
};

const arr = [
  {
    id: 12,
    name: "Ram",
  },
  {
    id: 32,
    name: "Shyam",
  },
];

console.log(printById(arr, 12));
