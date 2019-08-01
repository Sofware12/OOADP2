window.addEventListener("load", function () {
    //  Init here.....
var slider = document.getElementById("myRange", "myRange1", "myRange2", "myRange3");
var output = document.getElementById("demo", "demo1", "demo2", "demo3");
output.innerHTML = slider.value;

var myRangeSlider = document.getElementById("myRange");
myRangeSlider.onmouseup = sliderupdate(1, "demo");
myRangeSlider.ontouchend = sliderupdate(1, "demo");


});

function Savetime() {
    var timestamp1 = Date(); console.log(timestamp)
}






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


// var myRangeSlider = document.getElementById("myRange1");
// myRangeSlider.oninput = sliderupdate(2, "demo1");

// var myRangeSlider = document.getElementById("myRange2");
// myRangeSlider.oninput = sliderupdate(3, "demo2");

// var myRangeSlider = document.getElementById("myRange3");
// myRangeSlider.oninput = sliderupdate(4, "demo3");