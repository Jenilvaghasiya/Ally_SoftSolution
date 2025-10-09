let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputbtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  ulEl.innerHTML += `
    <li>
      <a target='_blank' href='${inputEl.value}'>
        ${inputEl.value}
      </a>
    </li>
  `;
  inputEl.value = ""
});
