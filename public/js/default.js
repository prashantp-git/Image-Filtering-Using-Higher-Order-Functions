let slash = "/"
let dir = "images"
let filename = dir + slash + "default.jpg";
let embossKernel = [[-2, -1, 0], [-1, 1, 1], [0, 1, 2]];
let edgeKernel = [[0, 1, 0], [1, -4, 1], [0, 1, 0]];
let sharpenKernel = [[0, -1, 0], [-1, 5, -1], [0, -1, 0]];
let outlineKernel = [[-1, -1, -1], [-1, 8, -1], [-1, -1, -1]];

function changeSrcImg(thisObj) {
    let reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("src-img").src = e.target.result;
    }
    reader.readAsDataURL(thisObj.files[0]);
    filename = dir + slash + thisObj.files[0].name;
}

function sharpen(img) {
    let f = function(err, data) {
        document.getElementById("processed-img").setAttribute("src", data);
        /*let a = document.createElement('a');
        a.href = document.getElementById("processed-img").src;
        a.download = "test.png";
        a.click();*/
    };
    higherOrderProcessor(sharpenKernel, filename, f)    
}


function outline(img) {
    let f = function(err, data) {
        document.getElementById("processed-img").setAttribute("src", data);
    };
    higherOrderProcessor(outlineKernel, filename, f)    
}

function emboss(img) {
    let f = function(err, data) {
        document.getElementById("processed-img").setAttribute("src", data);
    };
    higherOrderProcessor(embossKernel, filename, f)    
}

function edge(img) {
    let f = function(err, data) {
        document.getElementById("processed-img").setAttribute("src", data);
    };
    higherOrderProcessor(edgeKernel, filename, f)    
}

function custom(img) {
    let f = function(err, data) {
        document.getElementById("processed-img").setAttribute("src", data);
    };
    let customKernel = [];
    for (let i = 0; i < 5; i++) { 
        let row = [];
        for (let j = 0; j < 5; j++) { 
            row.push(document.getElementById("matrix["+i+"]["+j+"]").value);
        }
        customKernel.push(row);
    }
    higherOrderProcessor(customKernel, filename, f)    
}
