
//1.
var reviews =[];

    // getting hold of the HTML form elements by their id's
    TYPE_ELEMENT = document.getElementById("type"),
    NAME_ELEMENT = document.getElementById("name"),
    SCORE_ELEMENT = document.getElementById("score"),
    COMMENT_ELEMENT = document.getElementById("comment"),
   
    // getting hold of the HTML element we want to populate by its id
    REVIEWS_ELEMENT = document.getElementById("review");
 
 
// 2.2
// Creating a new DVD object using a function
function newREV(type,name, score,comment) {
    // creating a DVD object
    var REV = {
        type: type,
        name: name,
        score: score,
        comment: comment
    };
 
    return REV;
}
 
// 2.4
// clearing the form
function resetForm() {
    // for text input elements use .value
    // for radio buttons use .checked
    TYPE_ELEMENT.value = "";
    NAME_ELEMENT.value = "";
    SCORE_ELEMENT.value = 0;
    COMMENT_ELEMENT.value = "";

  

}
 
// 2.5
// display each DVD in the student_list array
function updateReviews() {
    var i,
        currentREV,
        currentREVHTML;
    
    // clear the DVD_LIST_ELEMENT
    REVIEWS_ELEMENT.innerHTML = "";
    
    // add each DVD in the dvd_list, to the DVD_LIST_ELEMENT
    for (i = 0; i < reviews.length; i++) {
        currentREV = reviews[i];
 
        // change the CSS class depending on if they're available or not
        //if (currentDVD.available) {
           // currentDVDHTML = '<div class="available">' + (i + 1) + '. ' + currentDVD.title + ' ' + currentDVD.length + ' ' +currentDVD.genre +' -  Available</div>';
       // } else {
           // currentDVDHTML = '<div class="notavailable">' + (i + 1) + '. ' + currentDVD.title + ' ' + currentDVD.length + ' ' +currentDVD.genre +' - Not Available</div>';
       // }
 
        // populate the DVD_LIST_ELEMENT
        REVIEWS_ELEMENT.innerHTML = REVIEWS_ELEMENT.innerHTML + currentREVHTML;
 
    }
    }
 
//2.
function addREV() {
    // 2.1
    // get the details from the form
           if(TYPE_ELEMENT.value==""){
               alert("Please chose type type");
               return false;
            }
            if(NAME_ELEMENT.value == ""){
                        alert("Please enter name");
                        return false;
            }
            if(SCORE_ELEMENT.value == ""){
                        alert("Please select the score");
                        return false;
            }
    var REV_type = TYPE_ELEMENT.value,
        REV_name = NAME_ELEMENT.value,
        REV_score = SCORE_ELEMENT.value,
        REV_comment = COMMENT_ELEMENT.value,
        // 2.2
        // make a new DVD using the details
        REV = newREV(REV_type,REV_name,REV_score,REV_comment);
    // 2.3
    // add the DVD to the DVD_list array
    reviews.push(REV);
 
    // 2.4
    // clear form
    resetForm();
 
    // 2.5
    // update the D List in the interface
    updateReviews();
}

//jquery
$("#hideImages").click(function () {
    $(".img").hide();
});
$("#showImages").click(function () {
    $(".img").show();
});
//$("a").click(function () {
    //$(this).css("background-color", "darkolivegreen");
//});

$(".Flex1").dblclick(function () {
    $(this).css("background-color", "cadetblue");
});

$(".Flex2").dblclick(function () {
    $(this).css("background-color", "darkseagreen");
});
$(".Flex3").dblclick(function () {
    $(this).css("background-color", "darkkhaki");
});


$(".Flex4").dblclick(function () {
    $(this).css("background-color", "lightblue");
});

$(".Flex5").dblclick(function () {
    $(this).css("background-color", "burlywood");
});
$(".Flex6").dblclick(function () {
    $(this).css("background-color", "bisque");
});


 $("#HideArticle").click(function () {
        $("#Art").fadeToggle("slow");
 });

 $("form").submit(function () {
 alert("Submitted");
 });


 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides.length }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
 }