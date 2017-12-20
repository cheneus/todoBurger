$(function()  {
   console.log("micheal")
    var $newItemInput = $("input.new-item");

    $(document).on("click", ".delete", deleteTodo);
    $(document).on("click", ".eat", toggleComplete);

    function deleteTodo(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      //   $.ajax({
      //     method: "DELETE",
      //     url: "/api/todos/" + id
      //   }).done(getTodos);
      // }
    }
    var updateBurger = (burger) => {
    	// UPDATE `burgers_db`.`burgers` SET `devoured`='1' WHERE `id`='1';
    	console.log("before axios")
      console.log(burger)
     //  axios.put('/save', {
     //    data: burger
     //  })
     $.ajax({
       url: '/update',
       type: 'PUT',
       data: {id : burger},
     })
     .done(function() {
       console.log("success");
     })
     .fail(function() {
       console.log("error");
     })
     .always(function() {
       console.log("complete");
     });
     
      // $.ajax({
      // 	url:'/update',
      // 	type: 'PUT',
      // 	data: burger
      // })
      // .done((response)=>{
      // 	console.log("test");
      // })
    }

    function toggleComplete(event) {
      var burger = $(this).parent().data("burger");
      console.log("burger"+burger)
      updateBurger(burger);
    }
  });