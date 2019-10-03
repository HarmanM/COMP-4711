var showing = false;


class Artist {
  constructor(name, about, image) {
    this.name = name;
    this.about = about;
    this.image = image;
  }
}

function addBtnClick() {
  if (showing) {
    document.getElementById("artistName").style.display="none";
    document.getElementById("aboutArtist").style.display="none";
    document.getElementById("artistImage").style.display="none";
    document.getElementById("addArtistBtn").style.display="none";

    clearText();
    showing = false;
  }
   else {
     document.getElementById("artistName").style.display="inline-flex";
     document.getElementById("aboutArtist").style.display="inline-flex";
     document.getElementById("artistImage").style.display="inline-flex";
     document.getElementById("addArtistBtn").style.display="inline-flex";
     showing = true;
  }
}

function clearText() {

  document.getElementById("artistName").value = "";
  document.getElementById("aboutArtist").value = "";
  document.getElementById("artistImage").value = "";
}

function addArtistFromStorage(n, ab, imge, ID) {

  name = n;
  about = ab;
  imageURL = imge;

  table = document.getElementById('infoTable')
  newRow = table.insertRow();

  imageTD = newRow.insertCell(0);
  image = document.createElement("IMG");
  image.setAttribute("src", imageURL);
  image.setAttribute("class", "artistImage");
  imageTD.appendChild(image);

  nameAndInfoTD = newRow.insertCell(1);
  nameDiv = document.createElement("DIV");
  nameDiv.setAttribute("class", "name");
  nameHeading = document.createElement("H3");
  nameHeading.appendChild(document.createTextNode(name));
  nameDiv.appendChild(nameHeading);
  nameAndInfoTD.appendChild(nameDiv);

  aboutDiv = document.createElement("DIV");
  aboutDiv.setAttribute("class", "info");
  aboutText = document.createElement("p");
  aboutText.appendChild(document.createTextNode(about));
  aboutDiv.appendChild(aboutText);
  nameAndInfoTD.appendChild(aboutDiv);

  delbuttonTD = newRow.insertCell(2);
  delButton = document.createElement("button");
  delButton.setAttribute("onclick", "onDelete()");
  delButton.setAttribute("class", "delBtn");
  delButton.onclick = function() {onDelete(this, ID);};
  delButton.appendChild(document.createTextNode("Delete"));
  delbuttonTD.appendChild(delButton);

  clearText();
}


function addArtist() {
  name = document.getElementById("artistName").value;
  about = document.getElementById("aboutArtist").value;
  imageURL = document.getElementById("artistImage").value;

  table = document.getElementById('infoTable')
  newRow = table.insertRow();

  imageTD = newRow.insertCell(0);
  image = document.createElement("IMG");
  image.setAttribute("src", imageURL);
  image.setAttribute("class", "artistImage");
  imageTD.appendChild(image);

  nameAndInfoTD = newRow.insertCell(1);
  nameDiv = document.createElement("DIV");
  nameDiv.setAttribute("class", "name");
  nameHeading = document.createElement("H3");
  nameHeading.appendChild(document.createTextNode(name));
  nameDiv.appendChild(nameHeading);
  nameAndInfoTD.appendChild(nameDiv);

  aboutDiv = document.createElement("DIV");
  aboutDiv.setAttribute("class", "info");
  aboutText = document.createElement("p");
  aboutText.appendChild(document.createTextNode(about));
  aboutDiv.appendChild(aboutText);
  nameAndInfoTD.appendChild(aboutDiv);

  let ID = name + localStorage.length;

  delbuttonTD = newRow.insertCell(2);
  delButton = document.createElement("button");
  delButton.setAttribute("onclick", "onDelete()");
  delButton.setAttribute("class", "delBtn");
  delButton.onclick = function() {onDelete(this, ID);};
  delButton.appendChild(document.createTextNode("Delete"));
  delbuttonTD.appendChild(delButton);

  let user = new Artist(name, about, imageURL);
  localStorage.setItem(ID, JSON.stringify(user));

  clearText();

}


function onDelete(btn, ID) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  localStorage.removeItem(ID);

}

function addFromStorage() {

  for (var key in localStorage) {
    let name = JSON.parse(localStorage.getItem(key)).name;
    let about = JSON.parse(localStorage.getItem(key)).about;
    let imageURL = JSON.parse(localStorage.getItem(key)).image;
    console.log(name);

    addArtistFromStorage(name, about, imageURL, key);
  }
}

function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputBox");
  filter = input.value.toUpperCase();
  table = document.getElementById("infoTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1].getElementsByTagName("div")[0];
    console.log(td);
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

addFromStorage();
