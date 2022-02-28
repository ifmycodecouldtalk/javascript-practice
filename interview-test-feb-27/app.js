// global variables
let inputDate = prompt("Welcome! Enter a date in 2022 below to find nearest holidays:", "MM/DD/YYYY");
let inputDateinDays = convertDateToDays(inputDate);
let holidayNames = ["Washington's Birthday", "Good Friday", "Memorial Day", "Juneteenth", "Independence Day", "Labor Day", "Columbus Day", "Thanksgiving Break", "Holiday Break"];
let holidayDates = ["02/21/2022", "04/15/2022", "05/30/2022", "06/20/2022", "07/04/2022", "09/05/2022", "10/10/2022", "11/24/2022", "12/26/2022"];
let holidayDatesInDays = holidayDates.map(convertDateToDays);
let daysApart = [];
let totalHappiness = 0;
let happinessOfEachDay = [];



// calculations
for (let i = 0; i < holidayDatesInDays.length; i++) {
    daysApart[i] = compareDays(inputDateinDays, holidayDatesInDays[i]);
    totalHappiness += calculateHappiness(inputDateinDays, holidayDatesInDays[i]);
}

console.log(totalHappiness);
let closestHolidayIndex = indexOfMinNumberInArray(daysApart);
console.log(closestHolidayIndex);
let closestHoliday = "The closest holiday is: " + holidayNames[closestHolidayIndex];
let closestHolidayDate = "The date of this holiday is: " + holidayDates[closestHolidayIndex];

// printing to HTML
if (validateDate(inputDate)) {
    let displayUserDate = document.getElementById("userDate");
    displayUserDate.innerHTML = "The date you entered was: " + inputDate;
    let displayClosestHolidayDate = document.getElementById("closestHolidayDate");
    displayClosestHolidayDate.innerHTML = closestHolidayDate;
    let displayClosestHolidayName = document.getElementById("closestHolidayName");
    displayClosestHolidayName.innerHTML = closestHoliday;
    let displayHappiness = document.getElementById("totalHappinessCount");
    displayHappiness.innerHTML = "Your total happiness is: " + totalHappiness;
}




// global functions
function convertDateToDays(date) {
    let totalDays = 0;
    let holidayDateArray = date.split("/");
    let holidayMonth = parseInt(holidayDateArray[0]);
    let holidayDay = parseInt(holidayDateArray[1]);

    for (let i = 1; i <= holidayMonth; i++) {
        switch (i) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                totalDays += 31;
                break;
            case 2:
                totalDays += 28;
                break;
            default:
                totalDays += 30;
        }        
    }
    totalDays += holidayDay;
    return totalDays;
}

function validateDate(date) {
    let dateArray = date.split("/");
    let dateMonth = parseInt(dateArray[0]);
    let dateDay = parseInt(dateArray[1]);
    let dateYear = parseInt(dateArray[2]);
    if (dateMonth < 1 || dateMonth > 12 || dateDay < 1 || dateDay > 31 || dateYear != 2022) {
        alert("An invalid date was entered. Be sure it is in the format MM/DD/YYYY");
        return false;
    }
    return true;
}

function compareDays(date1, date2) {
    if (date1 > date2)
        return date1 - date2;
    else
        return date2 - date1;
}

function indexOfMinNumberInArray(dateArray) {
    let low = dateArray[0];
    let indexOfLow = 0;

    for (let i = 0; i <= dateArray.length; i++) {
        if (dateArray[i] < low) {
            low = dateArray[i];
            indexOfLow = i;
        }
    }
    return indexOfLow;
}

function calculateHappiness(date1, date2) {
    let daysApart = date2 - date1;
    if (daysApart > 0 && daysApart < 30) {
        return 10;
    } else if (daysApart > 30 && daysApart < 60) {
        return 5;
    } else if (daysApart > 60 && daysApart < 90) {
        return 1;
    }
    return 0;
}