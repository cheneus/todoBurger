$(() => {
  var $newItemInput = $("input.new-item");

  $(document).on("click", ".delete", deleteTodo);
  $(document).on("click", ".eat", toggleComplete);

  function deleteTodo(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/todos/" + id
    }).done(getTodos);
  }

    function updateTodo(todo) {
    $.ajax({
      method: "PUT",
      url: "/api/todos",
      data: todo
    }).done(getTodos);
  }

  function toggleComplete(event) {
    var todo = $(this).parent().data("burger");
    console.log(burger)
    // todo.complete = !todo.complete;
    // updateTodo(todo);
  }
})
