function Start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KusA0FbI_/model.json",modelready)
}
function modelready(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    console.log("gotResults")
}