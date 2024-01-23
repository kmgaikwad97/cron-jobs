const cron = require('node-cron');

// Define a cron job to run every 10 seconds
const job = cron.schedule('*/10 * * * * *', () => {
  console.log('Cron job executed - Output after 10 seconds.');
}, {
  scheduled: false, // Start the job manually
});

// Start the cron job
job.start();

// Log a message immediately
console.log('Cron job started. Waiting for the first execution...');

// You can also stop the job after a certain duration for demonstration purposes
setTimeout(() => {
  job.stop();
  console.log('Cron job stopped after 1 minute.');
}, 60000); // Stop the job after 1 minute (60000 milliseconds)