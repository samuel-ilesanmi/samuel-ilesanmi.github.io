//declare the vaariables used 
let height, width, color, reset;
function makeGrid() { //calling a function to design the grid

    //selecting the input size
    $("#pixel-canvas").html("");
    height= $("#input_height").val();
    width= $("#input_width").val();
    if (height > 100 || width > 100 || height < 1  || width < 1){ //setting the maximum and minimum value for the input
	    if(!error.classList.contains("error")) {
		    error.classList.toggle("error");
		    error.innerText = "The dimension of the grid must not be greater than 100 and lesser than 0"; //displays error message when the input is greater  than the fixed size
		    restore();
	    }

    } else {
    	//creating a loop to design the grid when the input dosent exceed the fixed size
	    error.innerText = "";
	    $("div").removeClass("error");
	    for (let m = 0; m < height; m++) {
		    $("#pixel_canvas").append("<tr></tr>");
	    }
	    for (let n = 0; n < width; n++) {
		    $("#pixel_canvas tr").each(function () {
			    $(this).append("<td></td>");
		    });
	    }
    }
}

//selecting the input color
color = $('#colorPicker');
$(document).on("mousedown", "tr td", function () {
    let colorValue = color.val();
    $(this).css('background-color', colorValue);
    $('tr td').bind("mousemove", function () {
        let colorValue = color.val();
        $(this).css('background-color', colorValue);
    }).mouseup(function() {
        $('td').unbind('mousemove');
    });
    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "#c0c0c0")
    })
});
reset = $("#pixel_canvas").html();
function restore() {
    $("#pixel_canvas").html(reset);
}

