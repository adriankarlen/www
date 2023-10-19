import { Options } from '$fresh/plugins/twind.ts';
export default {
    selfURL: import.meta.url,
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--rp-love))',
                secondary: 'hsl(var(--rp-iris))',
                error: 'hsl(var(--rp-love))',
                rp: {
                    base: 'hsl(var(--rp-base))',
                    surface: 'hsl(var(--rp-surface))',
                    overlay: 'hsl(var(--rp-overlay))',
                    muted: 'hsl(var(--rp-muted))',
                    subtle: 'hsl(var(--rp-subtle))',
                    text: 'hsl(var(--rp-text))',
                    love: 'hsl(var(--rp-love))',
                    gold: 'hsl(var(--rp-gold))',
                    rose: 'hsl(var(--rp-rose))',
                    pine: 'hsl(var(--rp-pine))',
                    foam: 'hsl(var(--rp-foam))',
                    iris: 'hsl(var(--rp-iris))',
                    highlightLow: 'hsl(var(--rp-highlightLow))',
                    highlightMed: 'hsl(var(--rp-highlightMed))',
                    highlightHigh: 'hsl(var(--rp-highlightHigh))',
                },
            },
        },
    },
} as Options;
