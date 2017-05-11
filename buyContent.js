/**
 * Created by Lina Andersson on 2017-03-31.
 */


function AnimalObject(name, specie, price, header, description, city, sellerName, sellerPhone, sellerEmail, image, specieImage, specieImageDark) {
    this.name = name;
    this.specie = specie;
    this.price = price + ' KR';
    this.header = header;
    this.description = description;
    this.city = city;
    this.sellerName = sellerName;
    this.sellerPhone = sellerPhone;
    this.sellerEmail = sellerEmail;
    this.image = image;
    this.specieImage = specieImage;
    this.specieImageDark = specieImageDark;
}

//list of all the animals
function getAnimals() {
    animalInfoList = [];

    animalInfoList.push(new AnimalObject("Doris", "Cat", "500", "Sweet cat looking for new home",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis tristique, " +
        "ullamcorper nisl sed, vulputate purus. Duis lobortis luctus sagittis. Suspendisse sit " +
        "amet nibh velit. Vivamus pulvinar eget leo in suscipit. Pellentesque a consequat ipsum, " +
        "sit amet lobortis arcu. Suspendisse a arcu tortor. Sed non hendrerit purus, ac aliquam nunc.", "Skellefteå",
        "Adam Risberg", "0734562345", "adamrisberg@gmail.com", "cats/dorisnamn.jpg", "Icons/cat.png", "Icons/catDark.png"));

    animalInfoList.push(new AnimalObject("Midori", "Cat", "100", "Midori needs a new home",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis tristique, " +
        "ullamcorper nisl sed, vulputate purus. Duis lobortis luctus sagittis. Suspendisse sit " +
        "amet nibh velit. Vivamus pulvinar eget leo in suscipit. Pellentesque a consequat ipsum, " +
        "sit amet lobortis arcu. Suspendisse a arcu tortor. Sed non hendrerit purus, ac aliquam nunc.", "Skellefteå",
        "Anna Nilsson", "0734576545", "annanilsson@gmail.com", "cats/DSC_1574.jpg", "Icons/cat.png", "Icons/catDark.png"));

    animalInfoList.push(new AnimalObject("Sigge", "Cat", "100", "Lazy cat for sale",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis tristique, " +
        "ullamcorper nisl sed, vulputate purus. Duis lobortis luctus sagittis. Suspendisse sit " +
        "amet nibh velit. Vivamus pulvinar eget leo in suscipit. Pellentesque a consequat ipsum, " +
        "sit amet lobortis arcu. Suspendisse a arcu tortor. Sed non hendrerit purus, ac aliquam nunc.", "Stockholm",
        "Olivia Cederstedt", "07´05672345", "cederstedt90@gmail.com", "cats/kisse.jpg", "Icons/cat.png", "Icons/catDark.png"));

    animalInfoList.push(new AnimalObject("Nala", "Cat", "10000", "Norweigan forest cat looking for new home",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis tristique, " +
        "ullamcorper nisl sed, vulputate purus. Duis lobortis luctus sagittis. Suspendisse sit " +
        "amet nibh velit. Vivamus pulvinar eget leo in suscipit. Pellentesque a consequat ipsum, " +
        "sit amet lobortis arcu. Suspendisse a arcu tortor. Sed non hendrerit purus, ac aliquam nunc.", "Uppsala",
        "Johanna Renberg", "0769382345", "renberg.johanna@gmail.com", "cats/sand250.jpg", "Icons/cat.png", "Icons/catDark.png"));

    animalInfoList.push(new AnimalObject("-", "Cat", "500", "Six super sweet kittens for sale",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis tristique, " +
        "ullamcorper nisl sed, vulputate purus. Duis lobortis luctus sagittis. Suspendisse sit " +
        "amet nibh velit. Vivamus pulvinar eget leo in suscipit. Pellentesque a consequat ipsum, " +
        "sit amet lobortis arcu. Suspendisse a arcu tortor. Sed non hendrerit purus, ac aliquam nunc.", "Uppsala",
        "Linus Carlsson", "0704852345", "carlsonen@gmail.com", "cats/katt1.jpg", "Icons/cat.png", "Icons/catDark.png"));

    animalInfoList.push(new AnimalObject("Winter", "Cat", "700", "Kitten ready for a new home",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis tristique, " +
        "ullamcorper nisl sed, vulputate purus. Duis lobortis luctus sagittis. Suspendisse sit " +
        "amet nibh velit. Vivamus pulvinar eget leo in suscipit. Pellentesque a consequat ipsum, " +
        "sit amet lobortis arcu. Suspendisse a arcu tortor. Sed non hendrerit purus, ac aliquam nunc.", "Göteborg",
        "Ida Olsson", "0709562387", "ida.lisa.olsson@gmail.com", "cats/DSC_0150.jpg", "Icons/cat.png", "Icons/catDark.png"));

    return animalInfoList;
}

//Creates the frames where the information about the animals is showed
function createAnimalFrames(){

    var animals = getAnimals();

    for (var i = 0; i < animals.length; i++){

        var parentDiv = document.getElementById('buyContent');

        var frameDiv = document.createElement('div');
        frameDiv.className = 'col-sm-4 frameHeight';

        var animalFrame = document.createElement('div');
        animalFrame.className = 'animalFrame';


        var img = document.createElement('img');
        img.src ="cats/dorisnamn.jpg";
        img.className = "img-responsive";
        img.id = "image" + i;

        var animalInfoDiv = document.createElement('div');
        animalInfoDiv.className = 'animalInfoDiv';

        var specieText = document.createElement('p');
        specieText.className = 'col-sm-6 specieText contentText';
        specieText.id = "specieText"+i;

        var specieP = document.createElement('p');
        specieP.className = 'specieText contentText col-sm-9';
        specieP.id = "specieP"+i;

        var imgIcon = document.createElement('img');
        imgIcon.className = "animalIcon col-sm-3";
        imgIcon.id = "imageIcon" + i;

        var placeText = document.createElement('p');
        placeText.className = 'col-sm-6 placeText contentText';
        placeText.id = "placeText"+i;

        var placeP = document.createElement('p');
        placeP.className = 'placeText contentText col-sm-11';
        placeP.id = "placeP"+i;

        var imgPlace = document.createElement('img');
        imgPlace.src ="Icons/placeMarker.png";
        imgPlace.className = "animalIcon col-sm-1";
        imgPlace.id = "imagePlace" + i;

        var headlineText = document.createElement('p');
        headlineText.className = 'headlineText contentText';
        headlineText.id = "headlineText"+i;

        var priceText = document.createElement('p');
        priceText.className = 'priceText contentText';
        priceText.id = "priceText"+i;

        changeAnimalFrameText(animals[i],priceText,headlineText,placeP, imgIcon, specieP,img);

        setOnclickAttributes(animals[i], animalFrame);

        //place the content in the parent div

        parentDiv.appendChild(frameDiv);

        frameDiv.appendChild(animalFrame);

        animalFrame.appendChild(img);

        animalFrame.appendChild(animalInfoDiv);

        animalInfoDiv.appendChild(specieText);

        specieText.appendChild(imgIcon);

        specieText.appendChild(specieP);

        animalInfoDiv.appendChild(placeText);

        placeText.appendChild(imgPlace);

        placeText.appendChild(placeP);

        animalFrame.appendChild(headlineText);

        animalFrame.appendChild(priceText);
    }
}

//change text inside of div
function changeAnimalFrameText(animal, priceText, headlineText, placeP, imageIcon, specieP, image){
    priceText.innerHTML = animal.price;
    headlineText.innerHTML = animal.header;
    placeP.innerHTML = animal.city;
    imageIcon.src = animal.specieImage;
    specieP.innerHTML = animal.specie;
    image.src = animal.image;
}

function setOnclickAttributes(animal, animalFrame){
    animalFrame.onclick = function() {doModal(animal.header, animal.image, animal.specieImageDark, animal.specie, animal.city, animal.sellerName, animal.description)};
}