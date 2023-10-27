function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();

  for (var i = 1; i < data.length; i++) {
    var emailAddresses = data[i][12]; // Assuming email addresses are in the 13th column
    var sendDate = data[i][13]; // Assuming date and time values are in the 14th column
    var emailStatus = data[i][14]; // Assuming the status column is the 15th column
    var theDomainName = data[i][0];
    var expireyDate = data[i][2];

    if (
      emailAddresses &&
      sendDate &&
      sendDate instanceof Date &&
      sendDate <= new Date() &&
      emailStatus !== "Sent"
    ) {
      var subject = theDomainName + " Domain is Expiring";
      var message =
        "This is a reminder email to inform you that the domain " +
        theDomainName +
        " is expiring on " +
        expireyDate;

      var emailAddressList = emailAddresses.split(",").map(function (address) {
        return address.trim();
      });

      emailAddressList.forEach(function (emailAddress) {
        MailApp.sendEmail(emailAddress, subject, message);
      });

      sheet.getRange(i + 1, 15).setValue("Sent"); // Assuming you want to mark sent emails in the 15th column
    }
  }
}
