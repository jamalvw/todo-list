const projectList = document.querySelector('.project-list');
const taskList = document.querySelector('.task-list');
const taskCreator = document.querySelector('.task-creator');

taskCreator.addEventListener('keypress', (event) =>
{
	if (event.key === 'Enter')
	{
		event.preventDefault();
		addNewTask(taskCreator.value);
		taskCreator.value = '';
		taskList.scrollTop = taskList.scrollHeight;
	}
});

function addNewProject(title)
{
	const project = document.createElement('div');
	const projectTitle = document.createElement('h1');
	const projectInfo = document.createElement('h2');

	project.classList.add('project');

	projectTitle.textContent = title;
	projectInfo.textContent = '0 tasks';

	// Add event listener to project to allow selecting
	project.onclick = () =>
	{
		if (!project.classList.contains('selected'))
		{
			for (let p of projectList.children)
				p.classList.remove('selected');

			project.classList.add('selected');
		}
	};

	// Add title and info to the project div
	project.appendChild(projectTitle);
	project.appendChild(projectInfo);

	// Add the created project to the project list
	projectList.appendChild(project);
}

function addNewTask(title)
{
	const task = document.createElement('div');
	const taskCheckbox = document.createElement('div');
	const taskInfo = document.createElement('div');

	task.classList.add('task');
	taskCheckbox.classList.add('task-checkbox');
	taskInfo.classList.add('task-info');

	taskInfo.textContent = title;

	// Add event listener to checkbox to allow checking
	taskCheckbox.onclick = () =>
	{
		if (taskCheckbox.classList.contains('checked'))
			taskCheckbox.classList.remove('checked');
		else
			taskCheckbox.classList.add('checked');
	};

	// Add checkbox and info to the task div
	task.appendChild(taskCheckbox);
	task.appendChild(taskInfo);

	// Add the created task to the task list
	taskList.appendChild(task);
}

addNewProject('Default');
addNewProject('Shopping List');
addNewProject('Pet Care');