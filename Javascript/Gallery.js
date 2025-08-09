const galleryElement1 = document.getElementById('galleryColumn1')
const galleryElement2 = document.getElementById('galleryColumn2')
const galleryElement3 = document.getElementById('galleryColumn3')
const galleryElement4 = document.getElementById('galleryColumn4')

var gallerycolumns = [galleryElement1, galleryElement2, galleryElement3, galleryElement4]
index = 0

const imagesDir = "images/GalleryImages/"
var imageNames = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]; 

function galleryChangeColumns(width) {
    mainWidth = width 
    if (mainWidth < 700){
        console.log("1 columns")
    } else if (mainWidth < 1400) {
        console.log("2 columns")
    } else if (mainWidth < 2100) {
        console.log("3 columns")
    } else {
        console.log("4 columns")
    }
}

function loadImages(imageNames) {
    
    console.log("start")

    imageNames.forEach(element => {
        try{
            const imgElement = document.createElement('img');

            var imageDir = imagesDir + element
            imgElement.src = imageDir;
            console.log("image directory: " + imageDir)

            //style changes
            imgElement.style.width = "100%";

            gallerycolumns[index].appendChild(imgElement);
            if (index != (gallerycolumns.length - 1)) {
                index += 1
            } else {
                index = 0
            }
            
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
