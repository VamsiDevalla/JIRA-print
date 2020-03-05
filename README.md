# About
This project is used to print jira cards. you may need to update styles and colors according to your needs in landing.css file located in JIRAPRINT > resources > stylesheets

# prerequisites:
> Node.js should be installed to run this projects

# Steps to print your cards
## First Time 
Step-1: Download or clone the project
Step-2: Now open any terminal and navigate project directory JIRAPRINT and run the command 'npm install'

## Every time
Step-1: Open Jira and go to active sprint
Step-2: Now open developer tools of the browser and navigate to network tab
        * For Chrome on Mac, COMMAND + OPTION + I, will on open network tab in developer tools
Step-3: Keeping the dev tools opened press reload on the browser window
Step-4: Find and click on the network call starting with 'allData.json?rapidViewId='
Step-5: Go to response section of the call and copy all the data COMMAND + A > COMMAND + C
Step-6: Now Open the data.json file present in the project. JIRAPRINT > resources > data.json
Step-7: Replace the contents of the file with the content copied form the dev tools
Step-8: Now open any terminal and navigate project directory JIRAPRINT and run the command 'npm run start' or 'node index'

# Now you can open http://localhost:4000/ and print your card