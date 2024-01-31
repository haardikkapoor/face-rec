Webcam.set({
    crop_width:350,
    crop_height:300,
    image_format:"png",
    png_quality: 100,
})

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera").innerHTML = '<img id="selfie" src="' + data_uri + '">'
    });
    
}


model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/boVGrayHl/model.json", modelLoaded)


function modelLoaded(){
    console.log("Teachable machine is loaded");
}


function check(){
    img=document.getElementById('selfie');
    model.classify(img, gotresult);
}

function gotresult(error, results){
     if(error){
        console.error(error);
     } else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
     }
             }
