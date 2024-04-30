#12 SQL Employee Tracker
 
#Description:
Work on this project was implemented at the request of the client, whose user story stated the following: “AS A business owner I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business.”

##Acceptance Criteria:
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

Screencastify Link: 
https://watch.screencastify.com/v/vJOcnEv429R1g4gbqSw6

Github Repo Link:
https://github.com/vicduar/NoteTaker11.git

##Installation:
The project was created using VS Code editor where Node .js, Inquirer, and PostgresSQL were used. It was then uploaded to a Github repository. The server/database was initiated in the terminal using Node. It was videotaped on Screencastify.

##Usage:
Open the terminal. Since there is already a package.json file, the next step is to enter “npm i” into the terminal to load all necessary files to the project. Next, the command “node index.js” is then used in the command line to execute the program, which can be seen in the terminal. Using the up and down arrow keys, the desired option is selected. A table with the information is then displayed.

##Contributions:
References
Github (2024). A free webservice for storing and deploying websites. Multiple pages retrieved and utilized from www.github.com April 25-29, 2024.

MDN (April 25-29, 2024). Mozilla resources for developers. Multiple pages retrieved from https://developer.mozilla.org/en-US/ .

Meyers, M. (2024, April 26-28). Tutoring session via Www.zoom.us . Denver University Bootcamp.

NPM (2024, April 25-29). Node.js website. Retrieved from https://www.npmjs.com/package/inquirer .

W3Schools (2024, April 25-29). The world’s largest web developer site. Multiple pages retrieved from www.w3schools.com April 25-29, 2024.

##License
This project is licensed under the MIT license.
