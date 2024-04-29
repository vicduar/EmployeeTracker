const inquirer = require("inquirer");
const db = require("./db/connection.js");

function app() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "view all employees",
          "view all departments",
          "view all roles",
          "add a role",
          "add a department",
          "add an employee",
          "update an employees role",
          "quit",
        ],
      },
    ])
    .then((answer) => {
      if (answer.choice === "view all employees") viewAllEmployees();
      else if (answer.choice === "view all departments") viewAllDepartments();
      else if (answer.choice === "view all roles") viewAllRoles();
      else if (answer.choice === "add a role") addRole();
      else if (answer.choice === "add a department") addDepartment();
      else if (answer.choice === "add an employee") addEmployee();
      else if (answer.choice === "update an employees role") updateEmployee();
      else {
      }
    });
}
app();
function viewAllDepartments() {
  db.query("select * from department", (err, data) => {
    if (err) console.log(err.message);
    console.table(data.rows);
    app();
  });
}

function viewAllRoles() {
  db.query(
    "select role.title, role.salary, department.name as department_name from role join department on role.department_id=department.id",
    (err, { rows }) => {
      if (err) console.log(err.message);
      console.table(rows);
      app();
    }
  );
}
function viewAllEmployees() {
  db.query(
    `SELECT employee.id, employee.first_name AS "first name", employee.last_name 
  AS "last name", role.title, department.name AS department, role.salary, manager.first_name || ' ' || manager.last_name as manager
  FROM employee
  LEFT JOIN role
  ON employee.role_id = role.id
  LEFT JOIN department
  ON role.department_id = department.id
  LEFT JOIN employee manager
  ON manager.id = employee.manager_id`,
    (err, { rows }) => {
      if (err) console.log(err.message);
      console.table(rows);
      app();
    }
  );
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "dept",
        message: "What is the name of the new department?",
      },
    ])
    .then((answer) => {
      db.query(
        "insert into department (name) values ($1::text)",
        [answer.dept],
        (err) => {
          if (err) console.log(err.message);
          console.log("department successfully inserted");
          app();
        }
      );
    });
}

function addRole() {
  db.query(
    "select id as value, name as name from department",
    (err, { rows }) => {
      inquirer
        .prompt([
          {
            type: "input",
            name: "role",
            message: "What is the name of the new role?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is the salary of the new role?",
          },
          {
            type: "list",
            name: "dept",
            message: "What department does the role belong to?",
            choices: rows,
          },
        ])
        .then((answers) => {
          db.query(
            "insert into role (title,salary,department_id) values ($1::text, $2::numeric, $3::numeric)",
            [answers.role, answers.salary, answers.dept],
            (err) => {
              if (err) console.log(err.message);
              console.log("role successfully inserted");
              app();
            }
          );
        });
    }
  );
}
  function addEmployee() {
    db.query('select id as value, title as name from role',(err, {rows})=>{

      db.query("select id as value, first_name || ' ' || last_name as name from employee", (err, {rows:managers})=> {
        inquirer
        .prompt([
          {
            type: "input",
            name: "fname",
            message: "What is the name of the new employee?",
          },
          {
            type: "input",
            name: "lname",
            message: "What is the last name of the new employee?",
          },
          {
            type: "list",
            name: "role",
            message: "What is the employees role?",
            choices: rows

          },
          {
            type: "list",
            name: "manager",
            message: "Who is the employees manager?",
            choices: managers
          },
        ])
          .then(answers=>{
            db.query('insert into employee(first_name,last_name,role_id,manager_id) values ($1::text, $2::text,$3::numeric, $4::numeric)',[answers.fname, answers.lname, answers.role, answers.manager], err=>{
              if (err) console.log(err.message);
              console.log("employee successfully inserted");
              app();
            })

          })
          
      })

    })


  }

    function updateEmployee()  {
      db.query('select id as value, title as name from role',(err, {rows})=>{

        db.query("select id as value, first_name || ' ' || last_name as name from employee", (err, {rows:employees})=> {
          inquirer
          .prompt([
           
            {
              type: "list",
              name: "employee",
              message: "Which employee is changing roles?",
              choices: employees
  
            },
            {
              type: "list",
              name: "role",
              message: "What is the new role?",
              choices: rows
            },
          ])
            .then(answers=>{
              db.query('update employee set role_id=$1::numeric where id=$2::numeric',[answers.role, answers.employee], err=>{
                if (err) console.log(err.message);
                console.log("employee successfully updated");
                app();
              })
  
            })
            
        })
  
      })


    }
