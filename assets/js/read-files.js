function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0];
    if (f) {
        var r = new FileReader();
        r.onload = function(e) {
            var contents = e.target.result;
            // console.log("Where the content is: ",contents.split("\n"))
            mainEntry(contents);
        }
        console.log(r.readAsText(f));
    } else {
        alert("Failed to load file");
    }
}

function mainEntry(fileContentLoaded) {
    //        this is an example use
    //        console.log("Where the content is: ",fileContentLoaded.split("\n"))
    var splitContent = fileContentLoaded.split("\n");
    //call method
    //do logic
    var result = splitOnSpace(splitContent[0]);
    console.log(result)
}

function splitOnSpace(s) {
    // reset strings
    var obj = {
        before: "",
        after: ""
    }
    // accumulate before space
    var i = 0;
    while (i < s.length && s[i] != " ") {
        obj.before += s[i];
        i++;
    }
    // skip the space
    i++;
    // accumulate after space
    while (i < s.length) {
        obj.after += s[i];
        i++;
    }
    return obj;
}


let fileInput = document.getElementById('fileinput');
fileInput.addEventListener('change', readSingleFile, false);