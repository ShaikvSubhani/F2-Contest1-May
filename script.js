/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(student){
    if(student.marks>50){
      console.log(student);
    }
  
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log

  arr.forEach(function(student){
    if(student.marks>50){
      console.log(student)
    }

  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let failed_Students = arr.filter((student) => student.marks < 50)
  console.log(failed_Students);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr=[
    {id:4,name:"subhani",age:"25",marks:99},
    {id:4,name:"sub",age:"27",marks:56},
    {id:4,name:"hani",age:"28",marks:50},

  ];

  let concatenateArray=arr.concat(newArr);
  console.log(concatenateArray);
}
