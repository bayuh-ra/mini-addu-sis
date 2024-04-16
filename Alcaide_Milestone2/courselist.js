const courses = [
    {
        courseCode: "CS101",
        courseName: "Introduction to Computer Science",
        slots: 30,
        slotsOccupied: 20,
        slotsRemaining: 10,
        startTime: "9:00 AM",
        endTime: "10:30 AM",
        days: "MW"
    },
    {
        courseCode: "MATH202",
        courseName: "Calculus II",
        slots: 25,
        slotsOccupied: 20,
        slotsRemaining: 5,
        startTime: "11:00 AM",
        endTime: "12:30 PM",
        days: "TTH"
    },
    {
        courseCode: "ENG105",
        courseName: "English Composition",
        slots: 20,
        slotsOccupied: 12,
        slotsRemaining: 8,
        startTime: "1:00 PM",
        endTime: "2:30 PM",
        days: "F"
    }
]

const courseData = document.getElementById('course-data').getElementsByTagName('tbody')[0];
for (let course of courses){
    const newRow = courseData.insertRow();

    for(let field in course){
        const newCell = newRow.insertCell();
        newCell.innerHTML = course[field];
    }
}
