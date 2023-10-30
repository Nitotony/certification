import React from "react";
import "./file.css";
export default function File() {
  return (
    <div>
      <div className="alpha">
        <button className="fileinput">+</button>
        <h2 className="boom">Your certifications</h2>
      </div>
        <div className="beta">
          <input type="checkbox" name="nofile" className="inp" />
          <p>Nothing to add? Check the box and keep going</p>
        </div>
    </div>
  );
}
