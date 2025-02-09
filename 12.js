// Get the task list and form elements
const taskListUl = document.getElementById('task-list-ul');
const taskFormForm = document.getElementById('task-form-form');
const addTaskBtn = document.getElementById('add-task-btn');

// Add event listener to the add task button
addTaskBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const taskName = document.getElementById('task-name').value;
	const taskDescription = document.getElementById('task-description').value;
	// Add the task to the task list
	taskListUl.innerHTML += `
		<li class="task-list-item">
			${taskName}
			<p>${taskDescription}</p>
			<button class="delete-task-btn">Delete</button>
		</li>
	`;
	// Clear the form fields
	taskFormForm.reset();
});

// Add event listener to the delete task button
taskListUl.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete-task-btn')) {
		e.target.parentNode.remove();
	}
});

// Get the statistics elements
const statsCompleted = document.getElementById('stats-completed');
const statsPending = document.getElementById('stats-pending');

// Update the statistics
function updateStatistics() {
	const completedTasks = document.querySelectorAll('.task-list-item.completed');
	statsCompleted.textContent = completedTasks.length;
	const pendingTasks = document.querySelectorAll('.task-list-item.pending');
	statsPending.textContent = pendingTasks.length;
}

// Update the statistics every 1 second
setInterval(updateStatistics, 1000);