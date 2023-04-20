Cypress Task
This repository contains an automated API test and an automated UI test using Cypress.

Prerequisites
Node.js and npm installed on your machine
Git installed on your machine
Getting Started
Clone the repository
bash
Copy code
git clone https://github.com/Bammy00/symphony_QA_Task
Navigate into the repository


Install the dependencies

npm install
Running the Automated API Test
To run the automated API test, run the following command in the terminal:


npm run test:api
This will run the API test, which calls the public APIs endpoint and verifies the number of objects with the property "Category: Authentication & Authorization". The found objects will be printed to the console.

Running the Automated UI Test
To run the automated UI test, run the following command in the terminal:


npm run test:ui
This will run the UI test, which visits the "https://www.saucedemo.com/" website, logs in, sorts the items by Name (A -> Z) and Name (Z -> A), and verifies the sorting.

CI/CD Pipeline
The project includes a GitLab CI/CD pipeline that runs the automated tests. The pipeline is defined in the .gitlab-ci.yml file and uses the cypress/included Docker image as the test runner.

The pipeline consists of the following stages:

build: installs dependencies and builds the project
test:api: runs the automated API test
test:ui: runs the automated UI test

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
This project is licensed under the MIT License.