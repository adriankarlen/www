import { Options } from '$fresh/plugins/twind.ts';
export default {
    selfURL: import.meta.url,
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary))',
                secondary: 'rgb(var(--color-secondary))',
                error: '#f38ba8',
            },
        },
    },
} as Options;
