//Here we're importing items we'll need. You can add other imports here.

var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  // TODO: 1. get found set of data from FileMaker.
  const obj = JSON.parse(json);
  console.log(obj);
  const data = obj.data;
  console.log(data);

  // TODO: 2. get the columns from the first row of the data.
  const columns = [
    { title: "Company", data: "fieldData.CompanyName" },
    { title: "Street Address", data: "fieldData.StreetAddress" },
    { title: "State", data: "fieldData.State" },
    { title: "Zip", data: "fieldData.Zip" },
  ];
  // TODO: 5. OPTIONAL: Create a new table with some of the columns

  // Options here
  const options = {
    paging: true,
    pageLength: 13,
    searching: true,
    colReorder: true,
    columns: columns,
    autoWidth: true,
    data: data,
  };

  // Create the DataTable, after destroying it if already exists
  if (table) table.destroy();
  // TODO: 3. create the DataTable with the options
  table = $("#dtable").DataTable(options);

  // TODO: 4. add row click event listener
  $("#dtable tbody").on("dblclick", "tr", function () {
    const data = table.row(this).data();
    const id = data.fieldData.Id;
    const json = JSON.stringify({ id });
    // const json = JSON.stringify(data); //convert to string for FIleMaker to be able to parse.
    FileMaker.PerformScript("Get Row", id);
  });
};
