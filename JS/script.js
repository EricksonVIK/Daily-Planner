// creating variable to store daily plan
var dayPlan = [
    {
        id: "0",
        hour: "06",
        time: "06",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "07",
        time: "07",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "08",
        time: "08",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "4",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "5",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "6",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "1",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "2",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    
    {
        id: "9",
        hour: "3",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "10",
        hour: "4",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "11",
        hour: "5",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "12",
        hour: "6",
        time: "18",
        meridiem: "pm",
        reminder: ""
    },
    
]

// date for header
function todayDate(){
    var currentDate =moment().format('dddd, mmmm Do');
    $("#currentDay").text(currentDate);
}