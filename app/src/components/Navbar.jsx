import React from "react";
import logo from "../assets/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-pink-500 md:px-12 flex-nowrap w-auto" style={{backgroundColor: "#1a0a2b", borderRadius: "8px"}}>
      <div className="flex items-center">
        <img className="h-16 w-64 mr-3" src={logo} alt="Logo" style={{width:"180px"}}/>
      </div>

      <ConnectWallet style={{backgroundColor: "#36c0ee"}}
        theme="light"
        auth={{
          loginOptional: false,
        }}
      />
    </nav>
  );
}
