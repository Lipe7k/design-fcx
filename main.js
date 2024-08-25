function openModal(src) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");

    var img = new Image();
    img.src = src;

    img.onload = function() {
        modalImg.src = src;
        modalImg.style.width = img.width + 'px';
        modalImg.style.height = img.height + 'px';
        modal.style.display = "flex";
    }
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
