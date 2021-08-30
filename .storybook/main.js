module.exports = {
  stories: ['../src/components/**/*.stories.js', "../src/pages/**/*.stories.js"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
   webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        // Add the sass loader to process scss files
        "sass-loader",
      ],
    })

    return config
  },
}