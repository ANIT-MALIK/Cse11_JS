function calculateGrade() {
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);
    if (s1 > 100 || s2 > 100 || s3 > 100 || s4 > 100 || s5 > 100) {
        alert("Marks cannot be more than 100");
        return;
    }

    let total = s1 + s2 + s3 + s4 + s5;
    let mark = total / 5;
    let grade;
    let feedback;

    if (mark >= 90) {
        grade = "A+";
        feedback = "Excellent work!";
    } 
    else if (mark >= 80) {
        grade = "A";
        feedback = "Great job!";
    } 
    else if (mark >= 70) {
        grade = "B";
        feedback = "Good effort!";
    } 
    else if (mark >= 60) {
        grade = "C";
        feedback = "You can improve.";
    } 
    else if (mark >= 50) {
        grade = "D";
        feedback = "Work harder!";
    } 
    else {
        grade = "F";
        feedback = "Needs improvement.";
    }

    let resultBox = document.getElementById("result");

    resultBox.innerHTML =
        "Total: " + total + "<br>" +
        "Percentage: " + mark + "%<br>" +
        "Grade: " + grade;

    if (mark >= 75) resultBox.style.color = "green";
    else if (mark >= 50) resultBox.style.color = "orange";
    else resultBox.style.color = "red";
    document.getElementById("feedback").innerText = feedback;

    document.getElementById("bar1").style.height = s1 + "px";
    document.getElementById("bar2").style.height = s2 + "px";
    document.getElementById("bar3").style.height = s3 + "px";
    document.getElementById("bar4").style.height = s4 + "px";
    document.getElementById("bar5").style.height = s5 + "px";
}