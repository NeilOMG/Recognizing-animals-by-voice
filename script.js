function startClassification() {

    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PWXQQ5T6c/model.json", modelLoaded)

}

function modelLoaded() {

    classifier.classify(gotResult)
}

function gotResult(error, result) {

    if (error) {
        console.error(error)
    }
    else {
        console.log(result)

        r = Math.floor(Math.random() * 255) + 1
        g = Math.floor(Math.random() * 255) + 1
        b = Math.floor(Math.random() * 255) + 1

        document.getElementById("result_sound").style.color = "rgb(" + r + "," + g + "," + b + ")"
        document.getElementById("result_accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")"
        document.getElementById("result_sound").innerHTML = "I can hear " + result[0].label
        document.getElementById("result_accuracy").innerHTML = "Accuracy " + (result[0].confidence * 100).toFixed(2) + "%"

        img1 = document.getElementById("img1")

        if (result[0].label == "Meowing") {

            img1.src = "cat.gif"
        }
        else if (result[0].label == "Mooing") {
            img1.src = "cow.gif"

        }
        else if (result[0].label == "Barking ") {
            img1.src = "dog.gif"
        }
        else if (result[0].label == "Roar") {
            img1.src = "lion-roar.gif"
        }
        else {
            img1.src = "listen.gif"
        }
    }
}