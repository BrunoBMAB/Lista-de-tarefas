$("#form").submit(function(event) {
    event.preventDefault();
    var taskName = $("#Nome da tarefa").val();
    $("#lista de tarefas").append("<li>" + taskName + "</li>");
});

$("#lista de tarefas").on("click", "li", function() {
    $(this).toggleClass("done");
});