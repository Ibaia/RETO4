$(document).on("ready", function () {
    var input = "";
    $.ajax({
        method: "get",
        url: "../controller/cUsuarioInfo.php",
        dataType: "json",

        success: function (result) {
            console.log(result);
            $("body").append(
                /*html*/ `
                <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Usuario</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Nombre:<input type="text" id="editNombre " class="editInput" value="${result.nombre}"><br/><br/>
                apellido: <input type="text" id="editApellido" class="editInput" value="${result.apellido}"><br/><br/>
                nickname: <input type="text" id="editNick" class="editInput" value="${result.usuario}">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="save" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>`
            )
            $('.container').append(
               /*html*/ `
               <div class="row">
               <div class="col-xs-12 col-sm-8 col-md-8">
                   <div class="well well-sm">
                       <div class="row">
                           <div class="col-sm-6 col-md-4">
                               <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
                           </div>
                           <div class="col-sm-6 col-md-8">
                               <h4>
                                   ${result.nombre} "${result.usuario}" ${result.apellido}
                                   </h4>
                               
                               <p>
                                   <i class="glyphicon glyphicon-envelope"></i>${result.email}<br/>
                                   <i class="glyphicon glyphicon-gift"></i>June 02, 1988</p>
                               <!-- Split button -->
                                   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                       Editar
                                   </button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>`
            );
            $(".editInput").on("click", function () {

                if ($(this).val() != "") {
                    input = $(this).val();
                };
                console.log(input);
            })
            $(".editInput").on("blur", function () {
                if ($(this).val() == "") {
                    $(this).val(input);
                }
                console.log($(this).val());
            })
            $("#save").on("click", function () {
                nombre = $("#editNombre");
                nick = $("#editNick");
                apellido = $("#editApellido");
                $.ajax({
                    method: "get",
                    url: "../controller/cEditUsuario.php",
                    dataType: "json",
                    data: { "nombre": nombre, "apellido": apellido, "nickname": nick, "idUsuario": Response.idUsuario},
                    success: function (result) {
                        console.log(result);
                    }, error: function (xhr) {
                        alert("An error occured: " + xhr.status + " " + xhr.statusText);
                    }
                });
            });
        }, error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });

});