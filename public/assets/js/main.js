$(document).ready(function () {
    geoLocationInit();

 
});

/***********************************************************************
 *  Creación de mapa con ubicación actual
 ************************************************************************/

function geoLocationInit() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, fail);
    } else {
        alert("Navegador no soportado");
    }
}

function success(position) {
    console.log(position);
    var latval = position.coords.latitude;
    var lngval = position.coords.longitude;
    myLatLng = new google.maps.LatLng(latval, lngval);
    createMap(myLatLng);
    //loadMap();
}

function fail() {
    alert("Hubo un error");
}
//Create Map
function createMap(myLatLng) {

    // Creating map object
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 12,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
   
    var url = $('meta[name="uri"]').attr('content'); // llama a la url global que se encuantra en el head -> meta

    // creates a draggable marker to the given coords
    var vMarker = new google.maps.Marker({
        position: myLatLng,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          },
        draggable: true
    });

     // adds a listener to the marker
    // gets the coords when drag event ends
    // then updates the input with the new coords
    google.maps.event.addListener(vMarker, 'dragend', function (evt) {
        $("#txtLat").val(evt.latLng.lat().toFixed(6));
        $("#txtLng").val(evt.latLng.lng().toFixed(6));

        map.panTo(evt.latLng);
    });

    // centers the map on markers coords
    map.setCenter(vMarker.position);

    // adds the marker on the map
    vMarker.setMap(map);


    //LISTAR MAPAS 
    $.ajax({
        url: url,
        type: 'GET'
    }).done(function(data) {
        console.log(data);
        $(data).each(function(key,value){

            // creates a draggable marker to the given coords
            var vMarker1 = new google.maps.Marker({
                position: new google.maps.LatLng(value.lat, value.lng),
                title: value.name,
            });

            // centers the map on markers coords
            map.setCenter(vMarker1.position);

            // adds the marker on the map
            vMarker1.setMap(map);
        });
    }).fail(function() {

    });

}



/***********************************************************************
 *  CREAR
 ************************************************************************/

$('#form-create').submit(function(e){
    e.preventDefault();
    var url = $('meta[name="uri"]').attr('content'); // llama a la url global que se encuantra en el head -> meta
    var token = $('#token-create').val();
    $('#btn-create').css('display','none');                  //oculto boton guardar
    $('#btn-preload-create').css('display','inline-block');  //mostrar preload
    var data = $('#form-create').serialize();  //Guardo la data del form
    ClearFormError(); //metodo para limpiar el formulario de error

    $.ajax({
        url: url,
        headers:{'X-CSRF-TOKEN':token},
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function(data){
            toastr["success"]("Data creada con Exito");  // lanza notificaciones - success en este caso
            $('#btn-create').css('display','inline-block');
            $('#btn-preload-create').css('display','none');
            window.scrollTo(0,0);
            ClearForm();                                               // borrar datos formulario
            ClearFormError();                                          // borrar alerts error en formulario

        },
        error: function (error) {
            $.each( error.responseJSON.errors, function( key, value ) {
                $('#error-' + key).text(value);
            });

            toastr["error"]("Completá o corregí los datos indicados"); // lanza notificaciones - error en este caso
            $('#btn-create').css('display','inline-block');   // habilitar boton guardar
            $('#btn-preload-create').css('display','none');   // ocultar preload
        }
    });
    setTimeout(function() {
        $('#btn-create').css('display','inline-block');
        $('#btn-preload-create').css('display','none');
    },2000);

    return false;
});

function ClearForm(){
    $('#name').val('');
    $('#txtLat').val('');
    $('#txtLng').val('');
}

function ClearFormError(){
    $('#error-name').text('');
    $('#error-lat').text('');
    $('#error-lng').text('');
}




//Traducción DataTable
var espanol = {
    "sProcessing":     "Procesando...",
    "sLengthMenu":     "Mostrar _MENU_ registros",
    "sZeroRecords":    "No se encontraron resultados",
    "sEmptyTable":     "Ningún dato disponible en esta tabla",
    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":    "",
    "sSearch":         "Buscar:",
    "sUrl":            "",
    "sInfoThousands":  ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst":    "Primero",
        "sLast":     "Último",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
}

