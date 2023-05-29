import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html class="dark">
      <div class="bg-[#eff1f5] dark:bg-[#1e1e2e] text-[#4c4f69] dark:text-[#cdd6f4]">
        <Component />
      </div>
    </html>
  );
}
