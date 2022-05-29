module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1d4ed8",
          "secondary": "#001064",
          "accent": "#3b82f6",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
