const galleryElement = document.getElementById('gallery')
const imagesDir = "images/GalleryImages/"
var imageNames = ["1.png", "2.png"]; 

function GetImageName() {

}

function loadImages(imageNames) {
    
    console.log("start")

    imageNames.forEach(element => {
        try{
            const imgElement = document.createElement('img');
            var imageDir = imagesDir + element
            imgElement.src = imageDir;
            console.log("image directory: " + imageDir)
            galleryElement.style.width = "100 px";
            galleryElement.appendChild(imgElement);
        } catch (error) {
            console.error("Could not fetch or display images:", error);
            // Display a message to the user if images fail to load
            galleryElement.innerHTML = '<p>Failed to load images. Please try again later.</p>';
        }
    });
}

loadImages(imageNames)

// imageAvailable = true
// imageName = 0
// while (imageAvailable) {


//     // imageName += 1;
//     // directoryName = "images/GalleryImages/" + String(imageName) + "png";

//     // var img = document.createElement("img");
//     // img.src = directoryName;
//     // gallery.appendChild(img)
// }
