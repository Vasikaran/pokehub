import { ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./index";

const store = makeStore();

export function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
