let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

// Check if there are leads in local storage and if so, set myLeads to the stored leads and render them
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// Render the list of leads in the unordered list element
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
             <li>
                 <a target='_blank' href='${leads[i]}'>
                     ${leads[i]}
                 </a>
             </li>
         `;
  }
  ulEl.innerHTML = listItems;
}

// Delete all leads from local storage on double click of the delete button
deleteBtn.addEventListener("dblclick", function () {
  console.log("double clicked!");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// Add a new lead to the list and save it to local storage on click of the input button
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
