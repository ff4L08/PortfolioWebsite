const galleryElementN1 = document.getElementById('galleryColumnNarrow1')
const galleryElementN2 = document.getElementById('galleryColumnNarrow2')
const galleryElementW1 = document.getElementById('galleryColumnWide1')
const galleryElementW2 = document.getElementById('galleryColumnWide2')


var gallerycolumnsNarrow = [galleryElementN1, galleryElementN2]
var gallerycolumnsWide = [galleryElementW1, galleryElementW2]
var gallerycolumnsNarrowImages = [[], []]
var gallerycolumnWideImages = [[], []]

height = [[0, 0], [0, 0]]

indexes = [0, 0]


const imagesDir = "images/GalleryImages/"
var imageNames = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"]; 

// function galleryChangeColumns(width) {
//     mainWidth = width 
//     if (mainWidth < 700){
//         console.log("1 columns")
//     } else if (mainWidth < 1400) {
//         console.log("2 columns")
//     } else if (mainWidth < 2100) {
//         console.log("3 columns")
//     } else {
//         console.log("4 columns")
//     }
// }

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

            dimension = SortImagesBasedOnDimension(element)
            if (dimension == "wide"){
                Wide = 1

                gallerycolumnsWide[indexes[Wide]].appendChild(imgElement);
                gallerycolumnWideImages[indexes[Wide]].push(element)

                UpdateColumnHeight(imgElement, indexes[Wide], 1)

                min = 9999
                for (let index = 0; index < height[Wide].length; index++) {
                    const element = height[Wide][index];
                    if (element < min){
                        min = element
                        indexes[Wide] = index
                        console.log(index)
                    }
                }

                // if (indexes[0] == (gallerycolumnsWide.length - 1)){
                //     indexes[0] = 0
                // } else {
                //     indexes[0] += 1
                // }

            } else if (dimension ==  "narrow"){
                Narrow = 0
                
                gallerycolumnsNarrow[indexes[Narrow]].appendChild(imgElement)
                gallerycolumnsNarrowImages[indexes[Narrow]].push(element)

                UpdateColumnHeight(imgElement, indexes[Narrow], 0)

                min = 9999
                for (let index = 0; index < height[Narrow].length; index++) {
                    const element = height[Narrow][index];
                    if (element < min){
                        min = element
                        indexes[Narrow] = index
                        console.log(index)
                    }
                }

                // if (indexes[1] == (gallerycolumnsNarrow.length - 1)){
                    
                //     indexes[1] = 0
                // } else {
                //     indexes[1] += 1
                // }
            }

            

            
        } catch (error) {
            console.error("Could not fetch or display images:", error);
            // Display a message to the user if images fail to load
            galleryElement.innerHTML = '<p>Failed to load images. Please try again later.</p>';
        }
    });
}
function SortImagesBasedOnDimension(imageName) {
    const img = new Image();
    var getimageDir = imagesDir + imageName
    img.src = getimageDir;

    if (img.height > img.width) {
        console.log("narrow")
        return "narrow"
    } else {
        console.log("wide")

        return "wide"
    }
}


function findLowestPointOfTheColumns(gallerycolumnsimagesNames, isNarrow) {
    for (let i = 0; i < gallerycolumnsimagesNames.length; i++) {
        gallerycolumnsimagesNames[i].forEach(element => {
            const img = new Image();
            var getimageDir = imagesDir + element
            img.src = getimageDir;
            imgwidth = img.width
            imgheight = img.height
            heightRatio = imgheight/imgwidth

            height[isNarrow][i] = +(heightRatio.toFixed(2))

        })
    }

    console.log(height)
}

function UpdateColumnHeight(img, index, isImgNarrow) {
    imgwidth = img.width
    imgheight = img.height
    heightRatio = imgheight/imgwidth

    height[isImgNarrow][index] += +(heightRatio.toFixed(2))

    console.log(height)
}

loadImages(imageNames)
console.log(height)


// while (true){
//     galleryChangeColumns(window.width)
// }

// imageAvailable = true
// imageName = 0
// while (imageAvailable) {


//     // imageName += 1;
//     // directoryName = "images/GalleryImages/" + String(imageName) + "png";

//     // var img = document.createElement("img");
//     // img.src = directoryName;
//     // gallery.appendChild(img)
// }
