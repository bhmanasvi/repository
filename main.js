https://teachablemachine.withgoogle.com/models/214s2L_Az/

Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot()
{
    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML= '<img src = "'+data_uri+'" id = "capture_image">';
    })
}

image_classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/214s2L_Az/model.json',modelready);

function modelready()
{
    console.log("Model is ready");
}
console.log(ml5.version);
