# Reussitess971 Global Nexus Bot

## Description
This is the Reussitess971 bot for the Global Nexus platform, designed to run automatically under Termux using PM2 process manager.

## Prerequisites
- Node.js installed
- PM2 process manager (`npm install -g pm2`)
- Termux:Boot app (for Android/Termux autostart)

## Installation

1. **Install dependencies:**
   ```bash
   cd public/reussitess971
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env and add your OPENAI_API_KEY
   ```

## Running the Bot

### Manual Start
```bash
# From the project root
npm start --prefix public/reussitess971

# Or using node directly
node public/reussitess971/global-nexus-bot.js
```

### Using PM2 (Recommended)

**Start the bot with PM2:**
```bash
# From the project root
pm2 start ecosystem.config.js

# Or start directly
pm2 start public/reussitess971/global-nexus-bot.js --name reussitess971
```

**Manage the bot:**
```bash
# Check status
pm2 status

# View logs
pm2 logs reussitess971

# Stop the bot
pm2 stop reussitess971

# Restart the bot
pm2 restart reussitess971

# Delete from PM2
pm2 delete reussitess971
```

**Save PM2 configuration for autostart:**
```bash
# Save the current PM2 process list
pm2 save

# This creates a dump file that can be restored on system restart
```

## Termux:Boot Setup (Android/Termux Autostart)

To automatically start the bot when your Termux session starts:

1. **Install Termux:Boot from F-Droid or Google Play**

2. **Grant necessary permissions:**
   - Allow Termux:Boot to run at startup
   - Grant Termux the "Run at startup" permission

3. **Boot script is already configured:**
   The boot script at `.termux/boot/start_reussitess971.sh` will:
   - Load environment variables from `.env`
   - Restore saved PM2 processes
   - Start the bot if not already running

4. **Ensure PM2 configuration is saved:**
   ```bash
   pm2 save
   ```

5. **Test the boot script manually:**
   ```bash
   bash .termux/boot/start_reussitess971.sh
   ```

6. **Reboot your device to test autostart**

## Troubleshooting

### Bot won't start
- Check that `.env` file exists with valid `OPENAI_API_KEY`
- Verify Node.js is installed: `node --version`
- Check PM2 status: `pm2 status`
- View logs: `pm2 logs reussitess971`

### Termux:Boot not working
- Ensure Termux:Boot app is installed and has required permissions
- Check that PM2 is installed globally: `npm list -g pm2`
- Verify the boot script is executable: `ls -la .termux/boot/start_reussitess971.sh`
- Check Termux logs after reboot

### Environment variables not loaded
- Ensure `.env` file is in `public/reussitess971/` directory
- Check file permissions: `ls -la public/reussitess971/.env`
- Verify environment is loaded: `pm2 env 0` (replace 0 with process ID)

## Configuration

The bot configuration is managed through:
- **ecosystem.config.js**: PM2 process configuration
- **public/reussitess971/.env**: Environment variables (not tracked in git)
- **public/reussitess971/.env.example**: Example environment variables template

## Development

To modify the bot:
1. Edit `public/reussitess971/global-nexus-bot.js`
2. Test your changes: `npm start --prefix public/reussitess971`
3. If using PM2, restart: `pm2 restart reussitess971`

## License
ISC
