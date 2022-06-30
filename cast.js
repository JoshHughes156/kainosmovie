function addCasting(name, picturelink, description) {
    var parentDiv = document.getElementById("castlist");
    var s = "<div id='div1' style='outline-style: solid;'><a href='LINK'><img src='assets/castpics/NAME.jpeg' alt='NAME' width='75' height='100' style='display: inline;'></a><p class='castname' style='text-transform: capitalize;'>NAME</p><p>DESCRIPTION</p></div>"
    s = s.replace(new RegExp('LINK', 'g'), picturelink);
    s = s.replace(new RegExp('NAME', 'g'), name);
    s = s.replace(new RegExp('DESCRIPTION', 'g'), description);
    parentDiv.insertAdjacentHTML('afterend', s);
}

function loadCastingList() {
    var castnames = ["chewbacca", "darth vader"]; // Hard coded as I cannot figure out how to read from a text file
    var piclinks = ["https://www.imdb.com/name/nm6934058/", "https://www.imdb.com/title/tt0086190/characters/nm0000469"]
    var descriptions = ["Chewbacca is a furry creature", "He is someone's father"];
    for (let i = 0; i < castnames.length; i++) {
        addCasting(castnames[i], piclinks[i], descriptions[i]);
    }
}