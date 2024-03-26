# Meter Reading Vertical

## Introduction

The Meter Readings App is designed to collect and manage customers' meter readings 
for utilities such as electricity and gas. 
This app allows users to submit their meter readings, 
validates these submissions, displays previous readings, 
and predicts future usage based on historical data.

## Features

- Add New Readings: 
    Users can input their meter readings, which are then added to their history.
- Validating Meter Readings:
    Inputs are validated to ensure they are 5-digit numbers and greater than the last reading.
- Display Previous Readings: 
    The app displays a user's past meter readings, sorted from most recent to oldest.
- Predicted Usage: 
    The app predicts future utility usage based on the average increase of the last four readings.


## Requirements
- Node.js (version 14 or later)
- npm (version 6 or later)
- A modern web browser

## Local Setup

1. Clone
```
git clone git@github.com:juliantellez/meter-reading.git
cd meter-readings
```

2. Install

```
nvm use
npm ci
```

3. Start
```
npm start
```

This will start the app on http://localhost:3000.
Open your browser and navigate to this URL to use the app.

## Using the App
- Add a New Reading: 
    Enter your meter reading in the input box and click 'Submit'. 
    Ensure your reading is a 5-digit number and higher than your last reading.

- View Previous Readings: 
    Your readings are displayed under the "Previous Meter Readings" section.

- View Predicted Usage: 
    The predicted usage based on your last four submissions is displayed prominently on the page.


## Technologies Used
- Frontend: React.js
- Backend: Lambda Functions
- Database: Amazon Aurora (Serverless)
- Infrastructure: AWS (via Terraform)

## Project Structure
- /client - Contains the React frontend application.
- /server - Contains the Express backend application.
- /common - Shared utilities and models.

## Testing

Run the following command to execute unit and integration tests:

```
npm test
```

## Contributions
We welcome contributions to the Meter Readings App.

- Create an issue to start with your contribution
- PRs are Welcome too

## License
This project is licensed under the MIT License

## Contact
For any questions or suggestions, please contact [Julian Tellez](https://github.com/juliantellez).

