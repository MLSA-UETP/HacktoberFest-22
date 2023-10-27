const loadPics = async () => {
            
    const key = "_6BxmIaoA4_E59wZFWYzf_2cfbVSZo7S-QMrnuDcLJE";
    const term = document.getElementById("term").value;
    if(term.length === 0){
        alert("Please enter a search term");
    }else{

        console.log(term)
        fetch(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)
        .then((res) => res.json())
        .then((json) => {
            const pics = json.results;
                    pics.map(res => {
                //console.log(pics)

                    const img = document.createElement("img")
                    img.setAttribute("src",res.urls.small)
                    img.setAttribute("width", 300)
                    img.setAttribute("height", 300)

                    document.querySelector("#pics").appendChild(img)
                    
                })
                
            })
        }
}