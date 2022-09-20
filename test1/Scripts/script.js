
 $("#btn_convert").on('click', function () {
    html2canvas(document.getElementById("html-content-holder"),		{
        allowTaint: true,
        useCORS: true
    }).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        document.getElementById("previewImg").appendChild(canvas);			anchorTag.download = "filename.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
    });
});
var element = $("#html-content-holder"); // global variable
var getCanvas; // global variable

    $("#btn-Preview-Image").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#previewImg").append(canvas);                getCanvas = canvas;
             }
         });
    });