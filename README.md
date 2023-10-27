# send-email-with-domain-expiry-date

This is based on the Google Script that will check the date from the column and the respective email from the 13th column and send it two days before the actual expiry date.

Make sure to add the timeBased trigger

Use this Google Sheet for referrence:
https://docs.google.com/spreadsheets/d/1XKuz0aDk1zuCOO09Ws06nHH3c47jdd9J4o_wXm6JWec/edit?usp=sharing

How to Add trigger to the Spreadsheet:

1. Click on the Triggers tab on the Left Hand Side Menu on the Code Editor of the Spreadsheet
2. Click on the "Add Trigger" on the bottom right menu of the page
3. Another Popup would appear
4. Select the function "sendEmails" from the "Choose which function to run" section
5. From "Select event source" selct "Time-driven"
6. From "Select type of time based trigger" select "Minutes timer"
7. From "Select minute interval" select "Every minute"
8. Click on "Save"

And You are Done!
