const courses = [
    {
      courseNo: "ASF 4204",
      courseTitle: "Senior’s Integration Program",
      units: 3,
      prelim: "A", // percentage grade is 93%
      midterm: "A", // percentage grade is 94%
      prefinal: "A", // percentage grade is 92%
      final: "A", // percentage grade is 93%
    },
    {
      courseNo: "CS 4253",
      courseTitle: "Social Issues and Professional Practice",
      units: 3,
      prelim: "A", // percentage grade is 97%
      midterm: "A", // percentage grade is 99%
      prefinal: "A", // percentage grade is 92%
      final: "B+", // percentage grade is 89%
    },
    {
      courseNo: "CS 4256",
      courseTitle: "CS Elective",
      units: 3,
      prelim: "A", // percentage grade is 99%
      midterm: "C", // percentage grade is 79%
      prefinal: "A", // percentage grade is 98%
      final: "A", // percentage grade is 96%
    },
    {
      courseNo: "CS 4257",
      courseTitle: "Architecture and Organization",
      units: 3,
      prelim: "A", // percentage grade is 97%
      midterm: "D", // percentage grade is 75%
      prefinal: "A", // percentage grade is 99%
      final: "C+", // percentage grade is 83%
    },
    {
      courseNo: "IT 4258",
      courseTitle: "Information Assurance and Security",
      units: 3,
      prelim: "A", // percentage grade is 98%
      midterm: "F", // percentage grade is 71%
      prefinal: "A", // percentage grade is 100%
      final:'<img src="eval.png" alt="Evaluation Pending" data-bs-toggle="tooltip" data-bs-placement="top" title="You have a pending lecture evaluation for this subject.">', //You have a pending lecture evaluation for this subject.
    }
  ];

  const tableBody = document.querySelector('#mygrades-table tbody');
  const tableFoot = document.querySelector('#mygrades-table tfoot');

  let totalQualityPoints = 0;
  let totalUnits = 0;

  courses.forEach(course => {
    const { courseNo, courseTitle, units, prelim, midterm, prefinal, final } = course;
    const row = document.createElement('tr');

    const qpi = getQualityPoints(final) * units;
    totalQualityPoints += qpi;
    totalUnits += units;

    row.innerHTML = `
      <td>${courseNo}</td>
      <td>${courseTitle}</td>
      <td>${units}</td>
      <td data-bs-toggle="tooltip" data-bs-placement="top" title="${getTooltipContent(prelim)}">${prelim}</td>
      <td data-bs-toggle="tooltip" data-bs-placement="top" title="${getTooltipContent(midterm)}">${midterm}</td>
      <td data-bs-toggle="tooltip" data-bs-placement="top" title="${getTooltipContent(prefinal)}">${prefinal}</td>
      <td data-bs-toggle="tooltip" data-bs-placement="top" title="${getTooltipContent(final)}">${final}</td>
    `;

// If any grade is F, make it red and bold
if (final === 'F' || prefinal === 'F' || midterm === 'F' || prelim === 'F') {
    row.querySelectorAll('td').forEach(cell => {
      if (cell.textContent.trim() === 'F') {
        cell.style.color = 'red';
        cell.style.fontWeight = 'bold';
      }
    });
  }

  tableBody.appendChild(row);
});

// Calculate total QPI
const totalQPI = totalQualityPoints / totalUnits;

// Add Total QPI row
const totalQPIRow = document.createElement('tr');
totalQPIRow.innerHTML = `
  <td colspan="1"></td>
  <td>Total QPI: </td>
  <td colspan="4"></td>
  <td id="total-qpi-value" data-bs-toggle="tooltip" data-bs-placement="top" title="Total QPI: ${totalQPI.toFixed(2)}">${totalQPI.toFixed(2)}</td>
`;
tableBody.appendChild(totalQPIRow);




// Display total QPI
const totalQPICell = document.getElementById('total-qpi-value');
totalQPICell.innerText = totalQPI.toFixed(2);

// Determine passed or failed and equivalent letter grade
const passOrFail = totalQPI >= 2.0 ? 'Passed' : 'Failed';
let equivalentGrade;
if (totalQPI >= 3.5) {
  equivalentGrade = 'A';
} else if (totalQPI >= 3.0) {
  equivalentGrade = 'B+';
} else if (totalQPI >= 2.5) {
  equivalentGrade = 'B';
} else if (totalQPI >= 2.0) {
  equivalentGrade = 'C+';
} else if (totalQPI >= 1.5) {
  equivalentGrade = 'C';
} else if (totalQPI >= 1.0) {
  equivalentGrade = 'D';
} else {
  equivalentGrade = 'F';
}

// Apply hover effect to total QPI cell
totalQPICell.setAttribute('data-bs-toggle', 'tooltip');
totalQPICell.setAttribute('data-bs-placement', 'top');
totalQPICell.setAttribute('title', `Total QPI: ${totalQPI.toFixed(2)}<br>Passed/Failed: ${passOrFail}<br>Equivalent Grade: ${equivalentGrade}`);
new bootstrap.Tooltip(totalQPICell, {
  html: true // Enable HTML content in tooltips
});

  // Function to calculate tooltip content
  function getTooltipContent(grade) {
    // Check if the grade is a letter grade
    const isLetterGrade = ['A', 'B+', 'B', 'C+', 'C', 'D', 'F'].includes(grade);

    // If it's not a letter grade, return an empty string
    if (!isLetterGrade) return '';
    
    let percentage;
    switch (grade) {
      case 'A':
        percentage = '92-100%';
        break;
      case 'B+':
        percentage = '88-91%';
        break;
      case 'B':
        percentage = '84-87%';
        break;
      case 'C+':
        percentage = '80-83%';
        break;
      case 'C':
        percentage = '76-79%';
        break;
      case 'D':
        percentage = '72-75%';
        break;
      case 'F':
        percentage = 'below 72%';
        break;
      default:
        percentage = '';
    }

    // Determine passed or failed
    const passOrFail = grade === 'F' ? 'Failed' : 'Passed';

    return `Passed/Failed: ${passOrFail}<br>Actual Grade: ${getPercentageGradeValue(grade)}<br>Quantity Point Grade: ${getQualityPoints(grade)}`;
  }

  // Function to get percentage grade value
  function getPercentageGradeValue(grade) {
    switch (grade) {
      case 'A':
        return '97%';
      case 'B+':
        return '89%';
      case 'B':
        return '86%';
      case 'C+':
        return '82%';
      case 'C':
        return '78%';
      case 'D':
        return '74%';
      case 'F':
        return '71%';
      default:
        return '';
    }
  }

  // Function to get quality points based on grade
  function getQualityPoints(grade) {
    switch (grade) {
      case 'A':
        return 4.0;
      case 'B+':
        return 3.5;
      case 'B':
        return 3.0;
      case 'C+':
        return 2.5;
      case 'C':
        return 2.0;
      case 'D':
        return 1.0;
      case 'F':
        return 0;
      default:
        return 0;
    }
  }


  
  // Initialize Bootstrap tooltip
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      html: true // Enable HTML content in tooltips
    });
  });