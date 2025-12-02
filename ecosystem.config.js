module.exports = {
  apps: [
    {
      name: "reussitess971",
      script: "public/reussitess971/global-nexus-bot.js",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      env: {
        NODE_ENV: "production"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
