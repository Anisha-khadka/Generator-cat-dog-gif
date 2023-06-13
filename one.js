function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-box1');
    image.src= "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function generateDog(){  
    var image= document.createElement('img');
    var div= document.getElementById('flex-box2');
    image.src="http://thedogapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}