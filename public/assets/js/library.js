

const getSearchResults=  (searchInput) => {
    
    //searchInput = localStorage.getItem("search")
    //var apiUrlWorkingSearch = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=" + searchInput;
    var apiUrlNotWorkingSearch = "http://api.deezer.com/search?q=" + searchInput;
    
    fetch(apiUrlNotWorkingSearch)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        // let resultArr = data.data;
        // resultArr.forEach((result)=> {
        //     let trackList = $("#trackResults")
        //     let newResult = $("li")
        //     newResult.text(result.title)
        //     trackList.append(newResult)

        // })
        
    })
    
    
    
}
window.onload = getSearchResults()