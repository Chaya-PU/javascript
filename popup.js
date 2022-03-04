//this function will calculate the current age
function calculateAge()
{
    var dob = prompt("Enter the Date of birth in the following formate(MM-DD-YYYY)");
    let isconfirmed = confirm("Please confirm your entered Date of Birth is correct or not "+dob);
    if(isconfirmed)
    {
        let dobobj = new Date(dob);
        let birthyear = dobobj.getFullYear();

        let curDate = new Date();
        let curYear = curDate.getFullYear();

        let age = curYear - birthyear;

        document.write("Your Age is: "+age);
    }
    else
    {
        alert("Please enter valid Date Of Birth");
    }
}
calculateAge();