const path = require('path');

module.exports = {
    "mode": "none",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + "/dist",
        "filename": "bundle.js"
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 3000
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                        ]
                    }
                }
            },
        ]
    }
}