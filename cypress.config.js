const { defineConfig } = require("cypress");

module.exports = defineConfig({
    component: {
        devServer: {
            framework: "create-react-app",
            bundler: "webpack",
        },
    },
    viewportHeight: 800,
    viewportWidth: 1200,
});
