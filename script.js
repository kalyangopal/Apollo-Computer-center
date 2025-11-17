let count = 0;

function addStudent() {
    const name = document.getElementById("name").value;
    const courses = document.getElementById("courses").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const joiningDate = document.getElementById("joiningDate").value;
    const totalFees = document.getElementById("totalFees").value;

    if (!name || !courses || !mobileNumber || !joiningDate || !totalFees) {
        alert("Please fill all fields");
        return;
    }

    count++;

    const table = document
        .getElementById("studentTable")
        .getElementsByTagName("tbody")[0];

    const row = table.insertRow();

    row.insertCell(0).innerText = count;
    row.insertCell(1).innerText = name;
    row.insertCell(2).innerText = courses;
    row.insertCell(3).innerText = mobileNumber;
    row.insertCell(4).innerText = joiningDate;
    row.insertCell(5).innerText = totalFees;

    // Delete button
    const deleteCell = row.insertCell(6);
    deleteCell.innerHTML = `<button onclick="deleteRow(this)" style="background:red;color:white;padding:5px 10px;border:none;border-radius:5px;cursor:pointer;">Delete</button>`;

    // Reset fields
    document.getElementById("name").value = "";
    document.getElementById("courses").value = "";
    document.getElementById("mobileNumber").value = "";
    document.getElementById("joiningDate").value = "";
    document.getElementById("totalFees").value = "";
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();

    // Reorder serial numbers after deletion
    const rows = document.querySelectorAll("#studentTable tbody tr");
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1;
    });

    count = rows.length;
}

function exportToExcel() {
    const table = document.getElementById("studentTable");
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Students" });
    XLSX.writeFile(workbook, "students.xlsx");
}
