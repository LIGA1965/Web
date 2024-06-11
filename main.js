var DropJav = document.getElementById("dropdownButton");
var myDropdown = document.getElementById("myDropdown")
function toggleDropdown()
{
    myDropdown.classList.toggle("active")
}
DropJav.addEventListener("click", toggleDropdown)