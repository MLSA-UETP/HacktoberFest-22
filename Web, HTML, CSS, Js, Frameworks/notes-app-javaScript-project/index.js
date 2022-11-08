console.log("This is working");
showNotes();

// // If user adds a note, add it to the localStorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);  // it will convert string into an array
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj)); // it will convert an array or object into string
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});


// // Function to show elements from localStorage.
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);  // it will convert string into an array
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick= "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
};


// Function to delete a note.

function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);  // it will convert string into an array
    }
    notesObj.splice(index, 1); // remove
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}



let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    // console.log("Input event fired", inputVal);
    let noteCard = document.getElementsByClassName("noteCard");

    Array.from(noteCard).forEach(function (element) {
        let carTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(carTxt);
        if (carTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
})



let date = new Date();
document.write(date);

