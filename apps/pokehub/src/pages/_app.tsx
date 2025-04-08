import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../store";
import { ThemeProvider } from "@pokehub/utils";
import "../styles/globals.css";

function App(props: AppProps) {
  const { Component, ...rest } = props;
  const { store, props: pageProps } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
