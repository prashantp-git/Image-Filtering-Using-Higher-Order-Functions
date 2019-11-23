function higherOrderProcessor(kernel, imgPath, postprocessor){
    Jimp.read(imgPath)
        .then(image => {
            // Take the image and sharpen it using the convolution matrix
            image.convolute(kernel);
            //image.write("test_edgedetect.png"); //saving the image
            image.getBase64(Jimp.AUTO, postprocessor);})
        .catch(err => {
            console.log("Error" + err);
    });
}