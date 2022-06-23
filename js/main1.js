import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot1");
/**
tableCsv.setHeader(["ID","Name","Age"]);
*/
const csvFileInput = document.querySelector("./data/original_data.csv");
//const buttonInput = document.querySelector("#buttonInput");
const tableCsv = new TableCsv(tableRoot);

csvFileInput.addEventListener("change", (e) => {
  Papa.parse(csvFileInput.files[0], {
    delimiter: ",",
    skipEmptyLines: true,
    complete: (results) => {
      tableCsv.update(results.data.slice(1), results.data[0]);
    }
  });
});
