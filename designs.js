$(function () {
    //creating the grid
    $('#sizePicker').submit(function makeGrid(event) {
        event = event || window.event;
        const height = $('#input_height').val();
        const width = $('#input_width').val();
        const canvas = $('#pixel_canvas');
        event.preventDefault();
        canvas.children().remove();
        var grid = "";
        for (var i = 0; i < height; i++) {
            grid += "<tr>";

            for (var j = 0; j < width; j++) {
                grid += "<td></td>";
            }
            grid += "</tr>";
        }
        canvas.append(grid);
    });

    //quickpicker handling
    const color = $('#colorPicker');
    var red = $(".red");
    var orange = $(".orange");
    var yellow = $(".yellow");
    var green = $(".green");
    var blue = $(".blue");
    var indigo = $(".indigo");
    var violet = $(".violet");

    $(red).click(function () {
        color.val('#ff0000');
    });
    $(orange).click(function () {
        color.val('#ff7f00');
    });
    $(yellow).click(function () {
        color.val('#ffff00');
    });
    $(green).click(function () {
        color.val('#00ff00');
    });
    $(blue).click(function () {
        color.val('#0000ff');
    });
    $(indigo).click(function () {
        color.val('#4b0082');
    });
    $(violet).click(function () {
        color.val('#9400d3');
    });


    //double click erasing
    $('#pixel_canvas').on('dblclick', 'td', function () {
        $(this).css("backgroundColor", "transparent");
    });

    //draw both by clicking once or dragging
    $('#pixel_canvas').on('mousedown', 'td', function () {
        $('#pixel_canvas').on('mouseleave', 'td', function () {
            $(this).css('background-color', color.val());
        });
        $('#pixel_canvas').on('mouseup', 'td', function () {
            $('#pixel_canvas').off('mouseleave');
            $(this).css('background-color', color.val());
        });
    });
});
