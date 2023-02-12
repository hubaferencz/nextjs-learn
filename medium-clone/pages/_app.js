import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{ user: {}, username: "johndoe" }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}
