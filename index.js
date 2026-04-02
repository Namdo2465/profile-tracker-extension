let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Check if there are leads in local storage and if so, set myLeads to the stored leads and render them
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// Delete all leads from local storage on double click of the delete button
deleteBtn.addEventListener("dblclick", function () {
  console.log("double clicked!");
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

// Add a new lead to the list and save it to local storage on click of the input button
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

// Render the list of leads in the unordered list element
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
           <li>
               <a target='_blank' href='${myLeads[i]}'>
                   ${myLeads[i]}
               </a>
           </li>
       `;
  }
  ulEl.innerHTML = listItems;
}
