/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whizbang: {
          dark: '#111827',     // Sleek deep grey base
          slate: '#1F2937',    // Card background grey
          lightgrey: '#374151',// Border and secondary grey
          orange: '#FF6B00',   // Vibrant primary accent
          cyan: '#00F0FF',     // Crisp cyan secondary accent
          teal: '#0D9488',     // Warm teal accent
          amber: '#F59E0B'
        }
      },
      fontSize: {
        'senior-body': ['1.125rem', { lineHeight: '1.75' }],   // 18px body minimum
        'senior-lg': ['1.25rem', { lineHeight: '1.8' }],       // 20px large text
        'senior-xl': ['1.5rem', { lineHeight: '2.0' }],        // 24px section subhead
        'senior-2xl': ['2rem', { lineHeight: '2.25' }],       // 32px title
        'senior-3xl': ['2.75rem', { lineHeight: '1.2' }]      // 44px hero title
      },
      minHeight: {
        'target': '48px'      // Accessible touch click targets
      },
      minWidth: {
        'target': '48px'
      }
    },
  },
  plugins: [],
}
