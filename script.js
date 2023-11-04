// function to show image when we click on a image
function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;
    
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
    }
    // function to hide the image when we click on cross button
    function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
    }
    

    var words = ['Frontend Developer .', 'Work On Html , Css , Javascript .', '6 Month Experience on Shopify Developer .', 'Already Work On Shopify Developer .'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
    var wordflick = function () {
    setInterval(function () {
        if (forwards) {
        if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
            }
        }
        }
        else {
        if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
            i = 0;
            }
        }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
        if (forwards) {
            offset++;
        }
        else {
            offset--;
        }
        }
        $('.word').text(part);
    },speed);
    };

    $(document).ready(function () {
    wordflick();
    });


   