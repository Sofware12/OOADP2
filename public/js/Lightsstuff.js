
function Savetime() {
    var timestamp1 = Date(); console.log(timestamp)
}

var slider = document.getElementById("myRange", "myRange1", "myRange2", "myRange3");
var output = document.getElementById("demo", "demo1", "demo2", "demo3");
output.innerHTML = slider.value;


function sliderupdate(sliderId, outputId) {
    return function () {
        var output = document.getElementById(outputId);
        output.innerHTML = this.value;
        console.log("this.value");
        // make an ajax call to save the value.
        let reading = this.value;
        var formdata = new FormData();
        formdata.append('reading', reading);
        $.ajax({
            url: '/Light2/slidereading/',
            type: 'POST',
            data: JSON.stringify({ sliderId: sliderId, reading: reading }),
            dataType: "json",
            contentType: "application/json",
            processData: false,
            'success': (data) => {

            }
        })
    }
}
var myRangeSlider = document.getElementById("myRange");
myRangeSlider.oninput = sliderupdate(1, "demo");
