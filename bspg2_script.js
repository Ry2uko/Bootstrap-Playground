function listenSearch(event) {
    search(document.getElementById("search_btn"), document.getElementById("nav_search").value.trim(), event.type);
}
function search(btn, input_val, event) {
    if(event === "click") {
        if(input_val.length >= 1)  {
            document.getElementById("nav_search").value = "";
            btn.children[0].classList = "fas fa-search";
        }
    }
    const listcollection = btn.parentElement.parentElement
    .getElementsByTagName("ul")[0].children;
    let regexp = new RegExp(input_val, "gi");
    if(input_val.length >= 1) {
        btn.children[0].classList = "fas fa-times";
    } else {
        btn.children[0].classList = "fas fa-search";
    }
    for(let i = 0; i < listcollection.length; i++) {
        if(event === "click") {
            listcollection[i].style.display = "block"
        } else {
            if(regexp.test(listcollection[i].innerText)) {
                listcollection[i].style.display = "block"
            } else {
                listcollection[i].style.display = "none"
            }
        }
    }
}
function rangeValue(id, range) {
    let queryVal = range.value;
    document.getElementById(id).innerHTML = "<b>Value: </b>" + queryVal;
}   
function changeRatio(ratio, rtxt) {
    let embed = document.getElementById("responsive_embed");
    let crntRatio = document.getElementById("currentratio");
    if(crntRatio.innerText.slice(7, crntRatio.innerText.length) === rtxt) return;
    embed.classList.remove(embed.classList[Object.keys(embed.classList).length - 1]);
    embed.classList.add("embed-responsive-" + ratio);
    crntRatio.innerText = "Ratio: " + rtxt;
}

//jQuery
$(document).ready(function() {
    $("#nav_search").on("keyup", listenSearch);
    $('.toast').toast('show')
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover").popover();
    $(".custom-file-input").on("change", function() {
        let fileName = $(this).val().split("\\").pop()
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName)
    });
})
