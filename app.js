// from data.js
import { data } from "./data.js";
// const tableData = data;

function buildTable(data) {
  var table = document.getElementById("myTable");
  table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    // var colname = `name-${i}`
    // var colage = `age-${i}`
    // var colbirth = `birth-${i}`

    var row = `<tr>
                  <td>${data[i].datetime}</td>
                  <td>${data[i].city}</td>
                  <td>${data[i].state}</td>
                  <td>${data[i].country}</td>
                  <td>${data[i].shape}</td>
                  <td>${data[i].durationMinutes}</td>
                  <td>${data[i].comments}</td>

             </tr>`;
    table.innerHTML += row;
  }
}
buildTable(data);
// 7. Use this function to filter the table when data is entered.
function filterTable() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach((inputField) => {
      const tableRows = inputField
        .closest("table")
        .querySelectorAll("tbody > tr");
      const headerCell = inputField.closest("th");
      const otherHeaderCells = headerCell.closest("tr").children;
      const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
      const searchableCells = Array.from(tableRows).map(
        (row) => row.querySelectorAll("td")[columnIndex]
      );

      inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          const searchQuery = inputField.value.toLowerCase();

          for (const tableCell of searchableCells) {
            const row = tableCell.closest("tr");
            const value = tableCell.textContent.toLowerCase().replace(",", "");

            row.style.visibility = null;

            if (value.search(searchQuery) === -1) {
              row.style.visibility = "collapse";
            }
          }
        }
      });
    });
  });
}

filterTable();
