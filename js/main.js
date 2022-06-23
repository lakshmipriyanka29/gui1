import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot");
/**
tableCsv.setHeader(["ID","Name","Age"]);
*/
const csvFileInput = document.querySelector("#csvFileInput");
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

function redirect()
{
  var url = "./encrypt.html";
  window.location(url);
}
