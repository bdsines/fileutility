// (function () {
    let Papa = require('papaparse');
    var dialog = require('electron').remote.dialog;
    var fs = require('fs');
    FileUploadBehavior = function () {

    };

    FileUploadBehavior.openFile = function () {

        dialog.showOpenDialog(function (fileNames) {

            if (fileNames === undefined) return;

            var fileName = fileNames[0];
            console.log(fileName);
            // var event = new CustomEvent('my-event', {bubbles: true, composed: true});

            
            fs.readFile(fileName, 'utf-8', function (err, data) {
                
                this.dispatchEvent(new CustomEvent('fileutility-file-selected',{detail: {"fileName": fileName,"filecontent":data}}));
                // document.getElementById("editor").value = data;
                console.log("data",data);

            });

        });

    }
    FileUploadBehavior.parseFile =function(fileName,fileObject){
        Papa.parse(fileObject,{
            header:true,
            complete:function(results){
                console.log("Papa Parsed It!",results);
                window.dispatchEvent(new CustomEvent('fileutility-file-parsed', {detail: {"fileName": fileName,"filecontent":results.data,"errors":results.errors}}));
            }
        })
    }
// });



