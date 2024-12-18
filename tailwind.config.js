/** @type {import('tailwindcss').Config} */
module.exports = Object.assign(
  {},
  {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  },
  process.env.TARO_ENV === "h5"
    ? {
        corePlugins: {
          // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
          preflight: false,
        },
      }
    : {}
);
