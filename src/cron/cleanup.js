const cron = require("node-cron");
const OTP = require("../models/otp.model");

// Runs every hour
cron.schedule("0 * * * *", async () => {
  console.log("Running OTP cleanup job...");
  const now = new Date();
//  *               *             *             *                  *
//  |               |             |             |                  |
//day of week(0-7)    Month(1-12)   day of month    hours(0-23)  Minute(0-59)
  await OTP.deleteMany({ expiresAt: { $lt: now } });

  console.log("Expired OTPs removed");
});
