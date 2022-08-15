import Dropdown from "bootstrap/js/dist/dropdown";
import Modal from "bootstrap/js/dist/modal";

const dropdownElementList = Array.prototype.slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {return new Dropdown(dropdownToggleEl)})

new Modal(document.querySelector('#exampleModal'), {
    backdrop:'static'
})

// backdrop: Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn’t close the modal when clicked.