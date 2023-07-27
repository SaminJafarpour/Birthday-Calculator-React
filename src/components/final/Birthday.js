
import Condition from './Condition'


const Birthday=(props)=>{

    function isLeapYear(year) {
        // Leap years are divisible by 4 and either not divisible by 100 or divisible by 400
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    }

    function calculate(birthday) {
        // Get the current date
        var currentDate = new Date();
        // Get the user's birthday
        var birthdayDate = new Date(birthday);

        // Set the year of the birthday to the current year
        birthdayDate.setFullYear(currentDate.getFullYear());

        // If the birthday has already occurred this year, increment the year by 1
        if (birthdayDate < currentDate) {
            birthdayDate.setFullYear(currentDate.getFullYear() + 1);
        }

        // Check if the current year is a leap year
        const isCurrentYearLeap = isLeapYear(currentDate.getFullYear());

        // Check if the next year (the year of the birthday) is a leap year
        const isNextYearLeap = isLeapYear(birthdayDate.getFullYear());

        // If the current year and the next year are both leap years,
        // but the birthday is after February 29, we need to add one more day
        if (isCurrentYearLeap && isNextYearLeap && birthdayDate.getMonth() > 1 && currentDate.getMonth() <= 1) {
            birthdayDate.setDate(birthdayDate.getDate() + 1);
        }

        // Calculate the difference in milliseconds between the two dates
        var timeDiff = birthdayDate.getTime() - currentDate.getTime();

        // Calculate the number of days left
        var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

        return daysLeft;
    }


    console.log(calculate(props.userBirthday))
    let birthday=calculate(props.userBirthday)

return(
<div className="greeting">
    <Condition userBirthday={birthday} username={props.username}/>
</div>
)
}

export default Birthday