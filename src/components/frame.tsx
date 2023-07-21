import React from "react";
import { appWindow } from "@tauri-apps/api/window";

import "src/styles/frame.css";
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";

const Frame = (props: { children: React.ReactNode }) => {
  return (
    <div className="frame-outer">
      <div data-tauri-drag-region className="frame">
        <span data-tauri-drag-region className="title">
          Zombie Server Launcher
        </span>
        <div className="buttons">
          <button onClick={() => appWindow.minimize()}>
            <VscChromeMinimize />
          </button>
          <button onClick={async () => appWindow.toggleMaximize()}>
            <VscChromeMaximize />
          </button>
          <button className="close" onClick={() => appWindow.close()}>
            <VscChromeClose />
          </button>
        </div>
      </div>
      <div className="children">{props.children}</div>
    </div>
  );
};

export default Frame;
