/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            transparent: 'transparent',
            dark_blue: '#202733',
            dark_grayish_blue: '#313A48',
            grayish_blue: '#4F5D74',
            light_cyan: '#CEE3E9',
            neon_green: '#53FFAA'
        },
        boxShadow: {
            '3xl': '0 0 40px #53FFAA',
        }
    },
    plugins: [],
}
