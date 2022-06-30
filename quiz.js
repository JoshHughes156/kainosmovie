function make_box() {
    let i;
    for (i = 0; i = 4; i++) {
        var myDiv = document.getElementById("quiz");
        
        // creating checkbox element
        var checkbox = document.createElement('input');
            
        // Assigning the attributes
        // to created checkbox  
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";
            
        // creating label for checkbox
        var label = document.createElement('label');
            
        // assigning attributes for
        // the created label tag
        label.htmlFor = "id";
            
        // appending the created text to
        // the created label tag
        label.appendChild(document.createTextNode(''));
            
        // appending the checkbox
        // and label to div
        myDiv.appendChild(checkbox);
        myDiv.appendChild(label);
        console.log(i);
    }
}   