//UC 1 if else condition
{
    const IS_ABSENT = 0;
    let empCheck= Math.floor(Math.random() * 10)%2;
    if(empCheck == IS_ABSENT){
        console.log("UC1- Employee Absent");
    }
    else{
        console.log("UC1- Employee Present");
    }
}
