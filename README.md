# live site :  https://sparkly-semolina-058947.netlify.app/
# Todo App
 ### feature:  add task ,checkbox if complete,edit task, delete task 

## Here's a brief overview of how the code works and some potential improvements:

# TodoList Component:

This component handles displaying the list of tasks.
It takes in props such as tasks, setTasks, filter, and setTask.
It uses useState to manage state related to filtered tasks.
The handleClickAction function handles actions like marking a task as done or deleting it.
The useEffect hook is used to filter tasks based on the selected filter (All, Active, or Completed).

## TodoForm Component:

This component is responsible for adding or updating tasks.
It utilizes useState to manage the input text and validation state.
The handleSumbit function handles form submission and task addition/update.
The useEffect hook is used to set the input text if the task prop changes.

## Tabs Component:

This component displays tabs for filtering tasks.
It takes in selectedTab and setSelectedTab props.
It generates tabs dynamically based on the tabs array.

## App Component:

This is the main component where state is managed and other components are rendered.
It manages the list of tasks, selected tab, current task being edited, and success message state.
It uses useEffect to initialize tasks from local storage when the component mounts.
Components like TodoForm, Tabs, and TodoList are rendered within the App component.