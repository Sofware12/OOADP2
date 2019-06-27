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

function sendTime() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    formdata.append('date', today);
    $.ajax({
        url: '/cctv/sendFootage/',
        type: 'POST',
        data: JSON.stringify({today}),
        dataType: "json",
        contentType: "application/json",
        processData: false,
        'success': (data) => {

        }
    })
}