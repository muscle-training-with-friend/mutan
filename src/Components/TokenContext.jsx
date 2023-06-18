import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { createUser, getUser } from "../adapter.js";

const KEY = "USER_TOKEN";

/**
 * @type {React.Context<string | undefined>}
 */
export const TokenContext = createContext(undefined);

export function TokenContextProvider(props) {
  const [token, setToken] = useState(undefined);

  const fn = async () => {
    let token = Cookies.get(KEY);
    if (token) {
      try {
        await getUser({ token });
      } catch {
        token = undefined;
      }
    } else {
      const res = await createUser();
      token = res.token;
      Cookies.set(KEY, token);
    }
    setToken(token);
  };
  useEffect(() => {
    fn();
  }, []);

  return (
    <TokenContext.Provider value={token}>
      {props.children}
    </TokenContext.Provider>
  );
}
