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

    //draw both by clicking once or dragging
    //LMB to draw, RMB to erase
    $('#pixel_canvas').on('mousedown', 'td', function (e) {
        var key = e.keyCode || e.which;

        switch (key) {
            case 1:
                $('#pixel_canvas').on('mouseleave', 'td', function () {
                    $(this).css('background-color', color.val());
                });
                $('#pixel_canvas').on('mouseup', 'td', function () {
                    $('#pixel_canvas').off('mouseleave');
                    $(this).css('background-color', color.val());
                });
                break;

            case 3:
                $('#pixel_canvas').on('mouseleave', 'td', function () {
                    $(this).css('background-color', "transparent");
                });
                $('#pixel_canvas').on('mouseup', 'td', function () {
                    $('#pixel_canvas').off('mouseleave');
                    $(this).css('background-color', "transparent");
                });
                break;
        }
    });

    //button for hiding the grid
    $('#end').click('#pixel_canvas', function () {
        $('td').toggleClass('finish');
    });
});
