


// ==========================================
// 1. SELECTING DOM ELEMENTS
// ==========================================

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");

const filters = document.querySelectorAll(".filter");

const clearCompletedBtn = document.getElementById("clear-completed");
const emptyMessage = document.getElementById("empty-message");


// ==========================================
// 2. APPLICATION STATE
// ==========================================

let todos = [];

let currentFilter = "all";

let nextId = 1;


// ==========================================
// 3. CREATE A TODO ELEMENT
// ==========================================

function createTodoElement(todo) {

    // Create list item
    const li = document.createElement("li");

    li.className = "todo-item";

    li.dataset.id = todo.id;

    if (todo.completed) {
        li.classList.add("completed");
    }

    // Create task text
    const span = document.createElement("span");

    span.className = "todo-text";

    span.textContent = todo.text;

    span.title = "Double-click to edit task";

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.type = "button";

    deleteButton.className = "delete-button";

    deleteButton.textContent = "Delete";

    deleteButton.setAttribute("aria-label", `Delete ${todo.text}`);

    // Add elements to list item
    li.append(span, deleteButton);

    return li;
}


// ==========================================
// 4. DISPLAY TASKS
// ==========================================

function renderTodos() {

    // Clear existing list
    todoList.innerHTML = "";

    // Filter tasks according to selected filter
    let filteredTodos = todos.filter(function(todo) {

        if (currentFilter === "active") {
            return !todo.completed;
        }

        if (currentFilter === "completed") {
            return todo.completed;
        }

        return true;

    });

    // Display filtered tasks
    filteredTodos.forEach(function(todo) {

        const todoElement = createTodoElement(todo);

        todoList.appendChild(todoElement);

    });

    // Show empty message when no tasks match
    emptyMessage.hidden = filteredTodos.length > 0;

    if (filteredTodos.length === 0 && todos.length > 0) {

        emptyMessage.textContent =
            "No tasks found in this category.";

    } else if (todos.length === 0) {

        emptyMessage.textContent =
            "No tasks yet. Add your first task!";

    }

    // Update task statistics
    updateStats();

}


// ==========================================
// 5. ADD A NEW TASK
// ==========================================

function addTodo(text) {

    // Remove unnecessary spaces
    const trimmedText = text.trim();

    // Prevent empty tasks
    if (trimmedText === "") {
        input.focus();
        return;
    }

    // Create a new task object
    const newTodo = {

        id: nextId++,

        text: trimmedText,

        completed: false

    };

    // Add task to array
    todos.push(newTodo);

    // Return to All filter when adding a task
    currentFilter = "all";

    // Update active filter buttons
    updateFilterButtons();

    // Display updated tasks
    renderTodos();

    // Clear input
    input.value = "";

    // Focus input for next task
    input.focus();

}


// ==========================================
// 6. TOGGLE TASK COMPLETION
// ==========================================

function toggleTodo(id) {

    todos = todos.map(function(todo) {

        if (todo.id === id) {

            return {
                ...todo,
                completed: !todo.completed
            };

        }

        return todo;

    });

    renderTodos();

}


// ==========================================
// 7. DELETE A TASK
// ==========================================

function deleteTodo(id) {

    todos = todos.filter(function(todo) {

        return todo.id !== id;

    });

    renderTodos();

}


// ==========================================
// 8. UPDATE TASK STATISTICS
// ==========================================

function updateStats() {

    // Count incomplete tasks
    const remainingTasks = todos.filter(function(todo) {

        return !todo.completed;

    }).length;

    // Display remaining tasks
    itemsLeft.textContent =
        `${remainingTasks} ${remainingTasks === 1 ? "item" : "items"} left`;

}


// ==========================================
// 9. FILTER TASKS
// ==========================================

function filterTodos(filter) {

    currentFilter = filter;

    updateFilterButtons();

    renderTodos();

}


// Update active filter appearance
function updateFilterButtons() {

    filters.forEach(function(button) {

        const isActive =
            button.dataset.filter === currentFilter;

        button.classList.toggle("active", isActive);

        button.setAttribute("aria-pressed", isActive);

    });

}


// ==========================================
// 10. ADD TASK FORM EVENT
// ==========================================

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Add task
    addTodo(input.value);

});


// ==========================================
// 11. EVENT DELEGATION
// ONE CLICK LISTENER ON THE PARENT UL
// ==========================================

todoList.addEventListener("click", function(event) {

    // Find the nearest task
    const todoItem = event.target.closest(".todo-item");

    // Stop if click was outside a task
    if (!todoItem || !todoList.contains(todoItem)) {
        return;
    }

    // Get task ID
    const id = Number(todoItem.dataset.id);

    // Check whether delete button was clicked
    const deleteButton = event.target.closest(".delete-button");

    if (deleteButton) {

        deleteTodo(id);

        return;

    }

    // Toggle completion when task text or item is clicked
    if (event.target.closest(".todo-text") ||
        event.target === todoItem) {

        toggleTodo(id);

    }

});


// ==========================================
// 12. FILTER BUTTON EVENTS
// ==========================================

filters.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedFilter = button.dataset.filter;

        filterTodos(selectedFilter);

    });

});


// ==========================================
// 13. CLEAR COMPLETED TASKS
// ==========================================

clearCompletedBtn.addEventListener("click", function() {

    todos = todos.filter(function(todo) {

        return !todo.completed;

    });

    renderTodos();

});


// ==========================================
// 14. BONUS: EDIT TASKS
// DOUBLE CLICK TO EDIT
// ==========================================

todoList.addEventListener("dblclick", function(event) {

    const taskText = event.target.closest(".todo-text");

    if (!taskText) {
        return;
    }

    const todoItem = taskText.closest(".todo-item");

    const id = Number(todoItem.dataset.id);

    const todo = todos.find(function(item) {

        return item.id === id;

    });

    if (!todo) {
        return;
    }

    // Create editing input
    const editInput = document.createElement("input");

    editInput.type = "text";

    editInput.className = "edit-input";

    editInput.value = todo.text;

    editInput.setAttribute("aria-label", "Edit task");

    // Replace task text with editing input
    taskText.replaceWith(editInput);

    editInput.focus();

    editInput.select();

    // Save edited task
    function saveEdit() {

        const newText = editInput.value.trim();

        if (newText !== "") {

            todo.text = newText;

        }

        renderTodos();

    }

    // Keyboard events
    editInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            saveEdit();

        }

        if (event.key === "Escape") {

            renderTodos();

        }

    });

});


// ==========================================
// 15. INITIALIZE APPLICATION
// ==========================================

renderTodos();

console.log("ELVIS To-Do List application initialized successfully!");
