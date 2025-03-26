var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("activr-tab");
}
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// donwload cv
document.getElementById("downloadCV").addEventListener("click", function (e) {
  e.preventDefault();

  // Path to the CV file
  const filePath = "assets/mycv.pdf";

  // Create a temporary anchor element
  const tempLink = document.createElement("a");
  tempLink.href = filePath;
  tempLink.download = "FarrelIzzanMaulana-CV.pdf"; // Nama file yang akan diunduh

  // Append to the document and trigger download
  document.body.appendChild(tempLink);
  tempLink.click();

  // Remove the temporary link
  document.body.removeChild(tempLink);
});
