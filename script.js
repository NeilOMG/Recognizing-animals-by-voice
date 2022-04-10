function startClassification(){

    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PWXQQ5T6c/model.json", modelLoaded )
    
    }
    
    function modelLoaded(){
    
    classifier.classify(gotResult)
    }
    
    function gotResult(error,result){
    
    if (error){
    console.error(error)
    }
    else{
    console.log(result)
    }
    }