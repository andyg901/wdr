import React from "react";

export const BackgroundSelector = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange((e.target.value || "").toLowerCase())}
    >
      <option value="">Select background</option>
      <option value="01.jpg">Surprise background 1</option>
      <option value="04.jpg">Surprise background 2</option>
      <option value="05.jpg">Surprise background 3</option>
      <option value="06.jpg">Surprise background 4</option>
      <option value="07.jpg">Surprise background 5</option>
      <option value="08.jpg">Surprise background 6</option>
      <option value="13.jpg">Surprise background 7</option>
      <option value="14.jpg">Surprise background 8</option>
    </select>
  );
};
