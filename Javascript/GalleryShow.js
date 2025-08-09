function hideTable() {
    // hides the gallery
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('ChangeBack').style.display = 'none';

    
}

function ReplaceImage() {
    // hides the image
    document.getElementById('mainImage').style.display = 'none';
    //show the grid
    document.getElementById('gallery').style.display = 'flex';
    document.getElementById('ChangeBack').style.display = 'block';
    document.getElementById('ShowGallery').style.display = 'none';

}

function ReplaceGallery() {
    // hides the image
    document.getElementById('mainImage').style.display = 'initial';
    //show the grid
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('ChangeBack').style.display = 'none';
    document.getElementById('ShowGallery').style.display = 'block';
}

hideTable()
