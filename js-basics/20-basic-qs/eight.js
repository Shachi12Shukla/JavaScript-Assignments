// Find student with highest average mark
let student_marks = { A: [80, 90], B: [70, 75, 85] };

// expected output : A

let highest_avg = 0;
let top_student;

for(let student in student_marks){
    let marks = student_marks[student];
    
    let sum = 0;
    for(let mark of marks){
        sum = sum + mark;
    }

    let average = sum/marks.length;

    if(average > highest_avg){
        highest_avg = average;
        top_student = student;
    }

}
console.log(top_student);