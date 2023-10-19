import IconFileDownload from '@tabler/icons/file-download.tsx';
import { asset } from '$fresh/runtime.ts';

export default function ResumeButton() {
    return (
        <a
            class='rounded-full px-2 py-1 md:border-2 md:border-rp-highlightMed focus:outline-none hover:bg-rp-overlay w-12 h-12 flex items-center justify-center'
            href={asset('resume.pdf')}
        >
            <IconFileDownload />
        </a>
    );
}
