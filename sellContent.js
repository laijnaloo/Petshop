
function doModal(header, image, specieImage, specie, city, sellerName, description) {
    html =  '<div id="dynamicModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
    html += '<div class="modal-dialog modal-lg">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header modalHeader">';
    html += '<a class="close" data-dismiss="modal">×</a>';
    html += '</div>';
    html += '<div class="modal-body">';
    html +=  '<div class="col-sm-8">';
    html += '<img class="img-responsive" src="' + image +'">';
    html += '</div>';
    html +=  '<div class="col-sm-4">';
    html += '<h4 class="animalModuleHeader">'+header+'</h4>';
    html += '<div class="col-sm-4 specieText contentText moduleText"> ';
    html += '<img class="animalIcon" src="' + specieImage + '">';
    html += specie;
    html += '</div>'; //close specietext
    html += '<div id="placeModule" class="col-sm-4 placeText contentText moduleText"> ';
    html += '<img class="animalIcon col-sm-6" src="Icons/placeMarkerDark.png">';
    html += '<div id="placeTextModule" class="col-sm-6">' ;
    html += city;
    html +='</div>';
    html += '</div>'; //close place
    html += '<div id="userModule" class="col-sm-4"> ';
    html += '<img class="animalIcon" src="Icons/user.png">';
    html += sellerName;
    html += '</div>'; //close seller name
    html += '<div class="col-sm-8" id="descriptionModule">'; //div for description
    html += description;
    html += '</div>';//close description
    html += '</div>'; //close column with info
    html += '</div>';
    html += '<div class="modal-footer">';
    html += '<span class="btn btn-primary" data-dismiss="modal">Close</span>';
    html += '</div>';  // content
    html += '</div>';  // dialog
    html += '</div>';  // footer
    html += '</div>';  // modalWindow
    $('body').append(html);
    $("#dynamicModal").modal();
    $("#dynamicModal").modal('show');

    $('#dynamicModal').on('hidden.bs.modal', function (e) {
        $(this).remove();
    });
}