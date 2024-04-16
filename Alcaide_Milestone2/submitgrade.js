const students = [
    {
        code: 136194,
        studname: "ALCAIDE, HANNAH BEA REYES",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 128852,
        studname: "ANO, JESUS RICARDO TEJANO",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 142104,
        studname: "ARAPOC, BEATRICE JAN GOMEZ",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 133118,
        studname: "BELEN, HALEY MACKENZIE UBALDE",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 144272,
        studname: "DAGATAN, TRISTAN KYLE MALNEGRO",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 142744,
        studname: "DOBLI, FERDINAND JOHN FRANCISCO",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 129322,
        studname: "LABRADOR, THONY DANIELLE ALIBANGBANG",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 143804,
        studname: "LANAJA,  CHRIS LAWRENCE JUAN",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 132703,
        studname: "MARIFLOR, RIZAL KENT EXCOBAR",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 141743,
        studname: "NATIVIDAD, KARL JUSTIN ANGELO SALON",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 142608,
        studname: "OPERIO, RAPHAEL MIGUEL DIZON",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 146083,
        studname: "PIMENTEL, JOB AARON TAN",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 137565,
        studname: "PUSTA, TISHA RYLE SAYMAN",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 128848,
        studname: "QUIANZON, EDWARD ANTHONY RIVAS",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    },
    {
        code: 129749,
        studname: "VENERACION, ISIAH GILMORE BUENAFLOR",
        prelim: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        midterm: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        prefinal: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"],
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
    }
];

const studentTable = document.getElementById('student-table').getElementsByTagName('tbody')[0];

students.forEach(student => {
    const newRow = studentTable.insertRow();
    Object.keys(student).forEach(key => {
        const newCell = newRow.insertCell();
        if (key === 'prelim' || key === 'midterm' || key === 'prefinal' || key === 'final') {
            const select = document.createElement('select');
            ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"].forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            select.value = student[key]; // Set default value
            newCell.appendChild(select);
        } else {
            newCell.textContent = student[key];
        }
    });
});

