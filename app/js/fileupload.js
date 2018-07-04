// (function () {
    var dialog = require('electron').remote.dialog;
    var fs = require('fs');
    FileUploadBehavior = function () {

    };

    FileUploadBehavior.openFile = function () {

        dialog.showOpenDialog(function (fileNames) {

            if (fileNames === undefined) return;

            var fileName = fileNames[0];
            console.log(fileName);
            fs.readFile(fileName, 'utf-8', function (err, data) {

                // document.getElementById("editor").value = data;
                console.log("data",data);

            });

        });

    }
// });



