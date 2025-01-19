// This code snippet is adapted from the sentry.io Website
// Source: https://sentry.io/answers/http-get-request-in-javascript/#:~:text=The%20Solution,fetch%20or%20a%20Request%20object.
// Define an asynchronous function to fetch a list of todos
async function fetchTodos() {
	try {
		// Use the 'fetch' API to request data from the provided URL
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos/1"
		);

		// Check if the response status is not OK (e.g., if the status code is not 200)
		if (!response.ok) {
			// If the response is not OK, throw an error with a message
			throw new Error("Network response was not OK");
		}

		// Once the response is OK, parse the JSON body of the response and store it in 'todos'
		const todos = await response.json();

		// Log the parsed 'todos' data to the console (this will print the todo object)
		console.log(todos);
	} catch (error) {
		// If an error occurs during the fetch request or JSON parsing, log the error message to the console
		console.error("There was a problem with your fetch request: ", error);
	}
}

// Call the fetchTodos function to initiate the data fetch and log the result
fetchTodos();
