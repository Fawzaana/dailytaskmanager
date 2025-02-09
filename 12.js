document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form-form');
    const taskListUl = document.getElementById('task-list-ul');
    const statsCompleted = document.getElementById('stats-completed');
    const statsPending = document.getElementById('stats-pending');

    // Function to update task statistics
    function updateStats() {
        const tasks = taskListUl.querySelectorAll('li');
        let completed = 0;
        let pending = 0;

        tasks.forEach(task => {
            if (task.classList.contains('completed')) {
                completed++;
            } else {
                pending++;
            }
        });

        statsCompleted.textContent = completed;
        statsPending.textContent = pending;
    }

    // Function to toggle task completion
    taskListUl.addEventListener('click', function(e) {
        const taskItem = e.target.closest('li');
        if (taskItem) {
            taskItem.classList.toggle('completed');  // Toggle completed class
            updateStats();  // Update stats
        }
    });

    // Function to add a new task
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent page reload

        const taskName = document.getElementById('task-name').value.trim();
        const taskDescription = document.getElementById('task-description').value.trim();

        if (!taskName) {
            alert('Please enter a task name');
            return;
        }

        // Create a new task item
        const li = document.createElement('li');
        li.style.marginBottom = '10px';
        li.style.padding = '10px';
        li.style.border = '1px solid #ccc';
        li.style.borderRadius = '5px';
        li.style.cursor = 'pointer'; // Make it look clickable

        li.innerHTML = `<strong>${taskName}</strong><p>${taskDescription}</p>`;

        // Append the task to the task list
        taskListUl.appendChild(li);

        // Clear input fields
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';

        // Update statistics
        updateStats();
    });

    // Initialize stats on page load
    updateStats();
});
