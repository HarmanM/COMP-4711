var showing = false;

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

  delbuttonTD = newRow.insertCell(2);
  delButton = document.createElement("button");
  delButton.setAttribute("onclick", "onDelete()");
  delButton.setAttribute("class", "delBtn");
  delButton.onclick = function() {onDelete(this);};
  delButton.appendChild(document.createTextNode("Delete"));
  delbuttonTD.appendChild(delButton);

}


function onDelete(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
