const cron = require('node-cron');
const { generateSummary } = require('../services/reportService');

// Schedule a daily report at midnight
const scheduleReports = () => {
  cron.schedule('0 0 * * *', () => {
    console.log('Generating daily summary...');
    generateSummary('daily');
  });

  // Schedule a weekly report (e.g., every Monday at midnight)
  cron.schedule('0 0 * * 1', () => {
    console.log('Generating weekly summary...');
    generateSummary('weekly');
  });

  // Schedule a monthly report (e.g., the first day of the month at midnight)
  cron.schedule('0 0 1 * *', () => {
    console.log('Generating monthly summary...');
    generateSummary('monthly');
  });
};

module.exports = { scheduleReports };
