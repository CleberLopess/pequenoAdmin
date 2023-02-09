import { FormProvider } from "src/context/formProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}
