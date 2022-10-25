document.getElementById("plus-icon").addEventListener("click",() => {
  document.getElementById("right-side").style.display = "initial";

});
document.getElementById("cancel-icon").addEventListener("click",() => {
  document.getElementById("right-side").style.display = "none";
  document.getElementsByClassName("left").style.width = "100%";
})



var addbtn = document.getElementById("add-note");
// localStorage.clear();
showNotes();
addbtn.addEventListener("click",() => {
  let addTitle = document.getElementById("add-title");
    let addTxt = document.getElementById("add-des");
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});


function showNotes() {
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
 let html=""
 notesObj.forEach(function(element,index) {
    
    html+=`<div class="records">
    <div class="list">
    <div class="top">
        <h3 class = "heading-note">Note ${index+1} </h3>
        <h3 class="delete fa fa-trash" id="${index}" onclick="deleteNote(this.id)"></h3>
        </div>
        <hr>
        <h5 class="content-note">${element}</h5>
           
    </div>
</div>`;
 });

 let your_notes = document.getElementById("your_notes");
 if(notesObj.length != 0)
 {
your_notes.innerHTML = html;
 }
 else{
    your_notes.innerHTML = `<div class="no">
    <h2>Add your 1st note now</h2>
</div>`;
    
 }
}

function deleteNote(index) {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }
