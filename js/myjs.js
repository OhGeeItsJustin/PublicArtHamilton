/*
 * I Justin Fallis, 000398973 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.
 * 
 * JavaScript File calls php file with ajax request to check if the input from
 * the input boxes are correct and if the user can add those input to the table.
 */
$(document).ready(function ()
{
    //varibles to tracker the input state
    inputTracker1 = 0;
    inputTracker2 = 0;
    inputTracker3 = 0;
    //when you keyup on the form it does a ajax request
    $("#form").keyup(function ()
    {
        $.ajax({
            type: 'post',
            url: 'parta.php',
            data: {"studentName": $("#studentName").val(), "studentID": $("#studentID").val(), "program": $("#program").val()},
            dataType: 'json',
            success: function (data)
            {
                //if the input state for the first input box is 1 put warning
                if (data[0] === "1")
                {
                    $("#firstForm").removeClass().addClass("form-group has-warning has-feedback");
                    $("#firstGlyphicon").removeClass().addClass("glyphicon glyphicon-warning-sign form-control-feedback");
                    $("#firstError").html("<strong>Student name may be fictitious.</strong>");
                    inputTracker1 = 2;
                //if the input state for the first input box is 2 put error
                } else if (data[0] === "2")
                {
                    $("#firstForm").removeClass().addClass("form-group has-error has-feedback");
                    $("#firstGlyphicon").removeClass().addClass("glyphicon glyphicon-remove form-control-feedback");
                    $("#firstError").html("<strong>Student name cannot contain digits.</strong>");
                    inputTracker1 = 3;
                //if the input state for the first input box is 3 put success
                } else if (data[0] === "3")
                {
                    $("#firstForm").removeClass().addClass("form-group has-success has-feedback");
                    $("#firstGlyphicon").removeClass().addClass("glyphicon glyphicon-ok form-control-feedback");
                    $("#firstError").html("");
                    inputTracker1 = 1;
                //if the input state to normal like when the page is loaded
                } else {
                    $("#firstForm").removeClass().addClass("form-group has-feedback");
                    $("#firstGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
                    $("#firstError").html("");
                    inputTracker1 = 0;
                }
                //if the input state for the second input box is 1 put warning
                if (data[1] === "1")
                {
                    $("#secondForm").removeClass().addClass("form-group has-warning has-feedback");
                    $("#secondGlyphicon").removeClass().addClass("glyphicon glyphicon-warning-sign form-control-feedback");
                    $("#secondError").html("<strong>Student ID is suspicious.</strong>");
                    inputTracker2 = 2;
                //if the input state for the second input box is 2 put error
                } else if (data[1] === "2")
                {
                    $("#secondForm").removeClass().addClass("form-group has-error has-feedback");
                    $("#secondGlyphicon").removeClass().addClass("glyphicon glyphicon-remove form-control-feedback");
                    $("#secondError").html("<strong>Student ID must only contain digits.</strong>");
                    inputTracker2 = 3;
                //if the input state for the second input box is 3 put success
                } else if (data[1] === "3")
                {
                    $("#secondForm").removeClass().addClass("form-group has-success has-feedback");
                    $("#secondGlyphicon").removeClass().addClass("glyphicon glyphicon-ok form-control-feedback");
                    $("#secondError").html("");
                    inputTracker2 = 1;
                //if the input state to normal like when the page is loaded
                } else {
                    $("#secondForm").removeClass().addClass("form-group has-feedback");
                    $("#secondGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
                    $("#secondError").html("");
                    inputTracker2 = 0;
                }
                //if the input state for the third input box is 1 put warning
                if (data[2] === "1")
                {
                    $("#thirdForm").removeClass().addClass("form-group has-warning has-feedback");
                    $("#thirdGlyphicon").removeClass().addClass("glyphicon glyphicon-warning-sign form-control-feedback");
                    $("#thirdError").html("<strong>Program may be fictitious.</strong>");
                    inputTracker3 = 2;
                //if the input state for the third input box is 2 put error
                } else if (data[2] === "2")
                {
                    $("#thirdForm").removeClass().addClass("form-group has-error has-feedback");
                    $("#thirdGlyphicon").removeClass().addClass("glyphicon glyphicon-remove form-control-feedback");
                    $("#thirdError").html("<strong>Program does not exist</strong>");
                    inputTracker3 = 3;
                //if the input state for the third input box is 3 put success
                } else if (data[2] === "3")
                {
                    $("#thirdForm").removeClass().addClass("form-group has-success has-feedback");
                    $("#thirdGlyphicon").removeClass().addClass("glyphicon glyphicon-ok form-control-feedback");
                    $("#thirdError").html("");
                    inputTracker3 = 1;
                //if the input state to normal like when the page is loaded
                } else {
                    $("#thirdForm").removeClass().addClass("form-group has-feedback");
                    $("#thirdGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
                    $("#thirdError").html("");
                    inputTracker3 = 0;
                }


            }
        });
    });
});
function myButton() {
    //if all the trackers states are success add a row to table and clear input boxes and set states back to 0
    if (inputTracker1 === 1 && inputTracker2 === 1 && inputTracker3 === 1)
    {
        $('#myTable').append('<tbody><tr><td>' + $("#studentName").val() + '</td><td>' + $("#studentID").val() + '</td><td>' + $("#program").val() + '</td></tr></tbody>');
        $('#studentName').val('');
        $('#studentID').val('');
        $('#program').val('');
        $("#thirdForm").removeClass().addClass("form-group has-feedback");
        $("#thirdGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
        $("#thirdError").html("");
        $("#secondForm").removeClass().addClass("form-group has-feedback");
        $("#secondGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
        $("#secondError").html("");
        $("#firstForm").removeClass().addClass("form-group has-feedback");
        $("#firstGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
        $("#firstError").html("");
        inputTracker1 = 0;
        inputTracker2 = 0;
        inputTracker3 = 0;
    }
    //if any of the trackers states are warning add a row to table with a warning background colour and clear input boxes and set states back to 0
    if ((inputTracker1 === 1 && inputTracker2 === 1 && inputTracker3 === 2) || (inputTracker1 === 1 && inputTracker2 === 2 && inputTracker3 === 1) || (inputTracker1 === 1 && inputTracker2 === 2 && inputTracker3 === 2) || (inputTracker1 === 2 && inputTracker2 === 1 && inputTracker3 === 1) || (inputTracker1 === 2 && inputTracker2 === 1 && inputTracker3 === 2) || (inputTracker1 === 2 && inputTracker2 === 1 && inputTracker3 === 1) || (inputTracker1 === 2 && inputTracker2 === 2 && inputTracker3 === 2) || (inputTracker1 === 2 && inputTracker2 === 2 && inputTracker3 === 1))
    {
        $('#myTable').append("<tbody><tr><td class='warning'>" + $("#studentName").val() + "</td><td class='warning'>" + $("#studentID").val() + "</td><td class='warning'>" + $("#program").val() + '</td></tr></tbody>');
        $('#studentName').val('');
        $('#studentID').val('');
        $('#program').val('');
        $("#thirdForm").removeClass().addClass("form-group has-feedback");
        $("#thirdGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
        $("#thirdError").html("");
        $("#secondForm").removeClass().addClass("form-group has-feedback");
        $("#secondGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
        $("#secondError").html("");
        $("#firstForm").removeClass().addClass("form-group has-feedback");
        $("#firstGlyphicon").removeClass().addClass("glyphicon form-control-feedback");
        $("#firstError").html("");
        $(".warning").removeClass().addClass("warning");
        inputTracker1 = 0;
        inputTracker2 = 0;
        inputTracker3 = 0;
    }
}
