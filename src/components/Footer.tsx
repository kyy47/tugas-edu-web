import React from "react";

function Footer() {
  return (
    <footer className="border-t-black border-2 flex  flex-col items-center py-9">
      <h3 className="text-black text-[2rem] font-semibold">Eduweb</h3>
      <ul className="flex text-sm gap-9 py-4">
        <li>
          <a href="#">Privacy Police</a>
        </li>
        <li>
          <a href="#">Term Of Service</a>
        </li>
        <li>
          <a href="#">Cookie Settings</a>
        </li>
      </ul>
      <p className="text-[.7rem]">&copy; 2023 - Eduweb. All rights reserved</p>
    </footer>
  );
}

export default Footer;
