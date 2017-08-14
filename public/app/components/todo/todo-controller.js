function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()


	// Use this getTodos function as your callback for all other edits


	function getTodos() {
		todoService.getTodos(draw)
	}


	function draw(todosArr) {

		var todoElem = document.getElementById("todo-list");
		var todoCount = document.getElementById("todo-count");


		todoCount.innerHTML = todosArr.length;
		var template = '<ul>'
		for (var i = 0; i < todosArr.length; i++) {
			var todo = todosArr[i];

			template += `
	  
	  <li><button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button><input id='${todo._id}' onclick= "app.controllers.todoController.toggleTodoStatus('${todo._id}')" type="checkbox">${todo.description}</li>
	  
	  `
		}
		template += '<ul>'
		todoElem.innerHTML = template;
		checkStatus(todosArr)
	}

	function checkStatus(arr) {
		for (i = 0; i < arr.length; i++) {
			var todo = arr[i]
			if (todo.completed == true) {
				var x = document.getElementById(todo._id)
				x.checked = true;
			}

		}

	}



	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var newTodo = e.target.description.value

		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: newTodo
		
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO

		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}


	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	getTodos();
}


