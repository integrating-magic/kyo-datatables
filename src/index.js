//Here we're importing items we'll need. You can add other imports here.

var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  // TODO: 1. get found set of data from FileMaker.

  // TODO: 2. get the columns from the first row of the data.

  // TODO: 5. OPTIONAL: Create a new table with some of the columns

  // Options here
  const options = {
    paging: true,
    pageLength: 20,
    searching: true,
    colReorder: true,
    columns: columns,
    data: data,
  };

  // Create the DataTable, after destroying it if already exists
  if (table) table.destroy();
  // TODO: 3. create the DataTable with the options
  // TODO: 4. add row click event listener
};
