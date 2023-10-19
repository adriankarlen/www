import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';

export default function App({ Component }: AppProps) {
    return (
        <html class='dark'>
            <Head>
                <link rel='stylesheet' href='styles/_animations.css' />
                <link rel='stylesheet' href='styles/_fonts.css' />
                <link rel='stylesheet' href='styles/_global.css' />
                <link rel='stylesheet' href='styles/_scrollbar.css' />
                <title>adriankarlen</title>
            </Head>
            <div class='bg-rp-base text-rp-text'>
                <Component />
            </div>
        </html>
    );
}
