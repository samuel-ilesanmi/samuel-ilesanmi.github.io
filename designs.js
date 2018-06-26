// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//declare the vaariables used 
let height, width, color, reset;
function makeGrid() { //calling a function to design the grid

    //selecting the input size
    $("#pixel-canvas").html("");
    height= $("input-height").val();
    width= $("input-width").val();
    if (height > 100 || width > 100 || height < 1  || width < 1){ //setting the maximum and minimum value for the input
	    if(!error.classList.contains("error")) {
		    error.classList.toggle("error");
		    error.innerText = "The dimension of the grid must be lesser than or equal 100 and greater than 0"; //displays error message when the input is greater  than the fixed size
		    restore();
	    }

    } else {
    	//creating a loop to design the grid when the input dosent exceed the fixed size
	    error.innerText = "";
	    $("div").removeClass("error");
	    for (let m = 0; m < height; m++) {
		    $('#pixel-canvas').appened('<tr></tr>');
	    }
	    for (let n = 0; n < width; n++) {
		    $('#pixel-canvas tr').each(function () {
			    $(this).append('<td></td>');
		    });
	    }

    }

}


