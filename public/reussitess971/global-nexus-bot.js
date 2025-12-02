#!/usr/bin/env node

/**
 * Reussitess971 Global Nexus Bot
 * A bot for the Reussitess Global Nexus platform
 */

require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY is not set in environment variables.');
  console.error('Please create a .env file with OPENAI_API_KEY=your_key_here');
  process.exit(1);
}

console.log('Reussitess971 Global Nexus Bot starting...');
console.log('Environment: ' + (process.env.NODE_ENV || 'development'));
console.log('API Key configured: Yes');

// Store interval ID for cleanup
let heartbeatInterval = null;

// Main bot logic
async function startBot() {
  try {
    console.log('Bot initialized successfully');
    console.log('Monitoring for events...');
    
    // Keep the process running
    heartbeatInterval = setInterval(() => {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] Bot is running...`);
    }, 60000); // Log every minute
    
  } catch (error) {
    console.error('Error starting bot:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
function shutdown() {
  console.log('\nBot shutting down gracefully...');
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
  }
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Start the bot
startBot().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
