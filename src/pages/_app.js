import { ProviderAuth } from "@hooks/useAuth";
import MainLayout from "../layout/MainLayout";
import "@styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}
