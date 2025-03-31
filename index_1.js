var selectedRow = null
function onFormSubmit(){
    if(isValid()){
    var formData = readFormData();
    if(selectedRow == null)
       insertNewRecord(formData);
       else
       updateRecord(formData);

    resetForm();
  }
}

  function readFormData(){
    var formData = {};
    formData["first_name"] = document.getElementById("first_name").value;
    formData["surname"] = document.getElementById("surname").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
  }
  
  function insertNewRecord(data) {
    var table = document.getElementById("first_name").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.first_name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.surname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a>Delete<a>`;
  }

  function resetForm() {
    document.getElementById("first_name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
  }
  function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("first_name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
  }
  function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.first_name;
    selectedRow.cells[0].innerHTML = formData.surname;
    selectedRow.cells[0].innerHTML = formData.phone;
    selectedRow.cells[0].innerHTML = formData.email;
  }

  function onDelete(td) {
           row = td.parentElement.parentElement;
           document.getElementById("userData").deleteRow(row.rowIndex);
           resetForm();
  }
  
  function validate() {
    isValid = true;
    if (document.getElementById("first_name").value =="") {
        isValid = false;
        document.getElementById("first_nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if(!document.getElementById("first_nameValidationError").classList.contains("hide"))
            document.getElementById("first_nameValidationError").classList.add("hide");
    }
    return isValid;
  }