let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deletebtn = document.getElementById("delete-btn");
const tabbtn = document.getElementById("tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

deletebtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputbtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

tabbtn.addEventListener("click", function () {
  // The query options are now in a single object
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // 'tabs' will be an array of tabs that match the query.
    // In this case, it should be an array with just one tab object.
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
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
