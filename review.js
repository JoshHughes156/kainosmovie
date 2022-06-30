function addReview(name, description) {
    var parentDiv = document.getElementById("castlist");
    var s = "<div id='div2' style='outline-style: solid;'><p class='castname' style='text-transform: capitalize;'>NAME</p><p>DESCRIPTION</p></div>";
    s = s.replace(new RegExp('NAME', 'g'), name);
    s = s.replace(new RegExp('DESCRIPTION', 'g'), description);
    parentDiv.insertAdjacentHTML('afterend', s);
}

function loadReviewsList() {
    var castnames = ["IGN: 4/5", "Times: 5/5"]; // Hard coded as I cannot figure out how to read from a text file
    var descriptions = ["Too many stars", "Lightsabers look cool"];
    for (let i = 0; i < castnames.length; i++) {
        addReview(castnames[i], descriptions[i]);
    }
}