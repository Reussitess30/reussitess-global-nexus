module.exports = {
  apps: [
    {
      name: "reussitess-bot",
      script: "index.js",
      cwd: ".",
      instances: 1,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
