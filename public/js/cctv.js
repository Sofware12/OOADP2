function addCamera() {
    var camera = document.createElement("div");
    camera.innerHTML = "test";
    var div = document.getElementById('div#SecurityCameras')
    document.div.appendChild(camera);
}

function renameCamera(camera) {
    var newName = prompt("Please enter camera name.");
    if (newName == null) {
        alert("Action cancelled.");   
    } 
    else{
        camera.innerHTML = newName;
        alert("Action successful.");
    }
}