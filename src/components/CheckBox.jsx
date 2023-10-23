import { useState } from "react";
import { Between, BtnActive, BtnRadius, TextColorActive, TextColorNo } from "../utils/StyleUtil";

export const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <div className={`checkbox-wrapper border p-3 shadow`} style={isChecked ? {backgroundColor:BtnActive, borderRadius:BtnRadius} : {backgroundColor:"white", borderRadius:BtnRadius}}>
        <label className={Between}>
          <input type="checkbox" 
                    onChange={() => setIsChecked((prev) => !prev)}
                    checked={isChecked}/>
            <span style={isChecked?TextColorActive:TextColorNo}>{label}</span>
        </label>
      </div>
    );
  };