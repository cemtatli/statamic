/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
            },
        },
        extend: {
            colors: {
                "-text": "#171717",
                "-background": "#FAFAFA",
            },
            typography: ({ theme }) => ({
                zinc: {
                    css: {
                        "--tw-prose-body": theme("colors.zinc[800]"),
                        "--tw-prose-headings": theme("colors.zinc[900]"),
                        "--tw-prose-lead": theme("colors.zinc[700]"),
                        "--tw-prose-links": theme("colors.zinc[900]"),
                        "--tw-prose-bold": theme("colors.zinc[900]"),
                        "--tw-prose-counters": theme("colors.zinc[500]"),
                        "--tw-prose-bullets": theme("colors.zinc[500]"),
                        "--tw-prose-hr": theme("colors.zinc[300]"),
                        "--tw-prose-quotes": theme("colors.zinc[900]"),
                        "--tw-prose-quote-borders": theme("colors.zinc[500]"),
                        "--tw-prose-captions": theme("colors.zinc[700]"),
                        "--tw-prose-code": theme("colors.zinc[900]"),
                        "--tw-prose-pre-code": theme("colors.zinc[100]"),
                        "--tw-prose-pre-bg": theme("colors.zinc[900]"),
                        "--tw-prose-th-borders": theme("colors.zinc[300]"),
                        "--tw-prose-td-borders": theme("colors.zinc[200]"),
                        "--tw-prose-invert-body": theme("colors.zinc[200]"),
                        "--tw-prose-invert-headings": theme("colors.white"),
                        "--tw-prose-invert-lead": theme("colors.zinc[300]"),
                        "--tw-prose-invert-links": theme("colors.white"),
                        "--tw-prose-invert-bold": theme("colors.white"),
                        "--tw-prose-invert-counters": theme("colors.zinc[100]"),
                        "--tw-prose-invert-bullets": theme("colors.zinc[100]"),
                        "--tw-prose-invert-hr": theme("colors.zinc[700]"),
                        "--tw-prose-invert-quotes": theme("colors.zinc[100]"),
                        "--tw-prose-invert-quote-borders":
                            theme("colors.zinc[200]"),
                        "--tw-prose-invert-captions": theme("colors.zinc[400]"),
                        "--tw-prose-invert-code": theme("colors.white"),
                        "--tw-prose-invert-pre-code": theme("colors.zinc[300]"),
                        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
                        "--tw-prose-invert-th-borders":
                            theme("colors.zinc[600]"),
                        "--tw-prose-invert-td-borders":
                            theme("colors.zinc[700]"),
                    },
                },
            }),
            fontSize: {
                xs: "clamp(0.64rem, 0.17vw + 0.76rem, 0.89rem)",
                sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
                base: "base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
                lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
                xl: "clamp(1.56rem, 0.88vw + 1.3rem, 1.95rem)",
                "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
                "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
                "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
                "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
                "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
            },
            cursor: {
                epigra: 'url("/resources/logo/epigra.svg"), auto',
            },
            animation: {
                tada: "tada 1s ease-in-out",
            },
            tada: {
                "0%": {
                    transform: "scale(1)",
                },
                "10%": {
                    transform: "scale(0.9) rotate(-3deg)",
                },
                "20%": {
                    transform: "scale(0.9) rotate(-3deg)",
                },
                "30%": {
                    transform: "scale(1.1) rotate(3deg)",
                },
                "40%": {
                    transform: "scale(1.1) rotate(-3deg)",
                },
                "50%": {
                    transform: "scale(1.1) rotate(3deg)",
                },
                "60%": {
                    transform: "scale(1.1) rotate(-3deg)",
                },
                "70%": {
                    transform: "scale(1.1) rotate(3deg)",
                },
                "80%": {
                    transform: "scale(1.1) rotate(-3deg)",
                },
                "90%": {
                    transform: "scale(1.1) rotate(3deg)",
                },
                "100%": {
                    transform: "scale(1) rotate(0)",
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography", "@tailwindcss/container-queries"),
    ],
};
