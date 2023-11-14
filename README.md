
## DoubtShare Real-Time Doubt Solving Platform - Readme

#### Introduction
DoubtShare is a real-time doubt-solving platform designed to provide interactive assistance to students with their academic queries. The platform facilitates communication between students and tutors, ensuring efficient doubt resolution.

#### Product Features
User Types
Students:

Attributes: Class grade, language.
Actions: Create doubt requests.
Tutors:

Attributes: Doubt subject expertise, class grade, language.
Actions: Accept student doubt requests.

Specifies doubt subject, class grade, and language.
System finds online tutors matching criteria.
Real-Time Notification:

Eligible tutors are notified in real-time.

Tracks real-time tutor availability.

Updates the last ping time against each tutor in the “Tutor Availability” table every 3 seconds.
CRON Job:

Runs every second to count the real-time available tutors.


### Technologies Used
The project is built using the MERN stack:

MongoDB: Database
Express.js: Backend Framework
React.js: Frontend Library
Node.js: Runtime Environment

## Getting Started
To get started with the project, follow these steps:
git clone https://github.com/sharvarihupare-369/doubtshareplatform

Navigate to the project directory:
cd frontend
cd backend

Install dependencies:   
npm install

Set up the MongoDB connection and other environment variables.

Run the application:
For frontend : npm start
For backend : npm run server


#### Backend Routes
##### User Routes

1. Register
Endpoint: /register
Method: POST
Description: Allows users to register on the platform.

2. Login
Endpoint: /login
Method: POST
Description: Allows users to log in and receive an authentication token.

3. Logout
Endpoint: /logout
Method: GET
Description: Logs the user out by adding the authentication token to the blacklist.

##### Doubt Routes

1. Get Doubt History
Endpoint: /doubt/history
Method: GET
Description: Retrieves the doubt history of the currently logged-in student.

2. Add Doubt
Endpoint: /doubt/addDoubt
Method: POST
Description: Allows students to add a doubt.

##### Tutor Routes

1. Get Tutor Profile
Endpoint: /tutor/gettutor
Method: GET
Description: Retrieves the profile of the currently logged-in tutor.

2. Add Tutor Data
Endpoint: /tutor/addData
Method: POST
Description: Allows tutors to add their profile information.

3. Update Tutor Data
Endpoint: /tutor/updateData
Method: PATCH
Description: Allows tutors to update their profile information.

4. Update Tutor Ping
Endpoint: /tutor/update-ping
Method: POST
Description: Updates the last ping time for a tutor.

## CRON Jobs
The platform implements CRON jobs for scheduled tasks. Details and functionalities are not provided in the code snippet. Ensure proper configuration and handling of scheduled tasks.