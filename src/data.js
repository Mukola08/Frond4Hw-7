import phone from "./phone.json";
import template from "./phone-template.hbs";

const list = document.querySelector(".list_js");
list.innerHTML = template({ phone });
