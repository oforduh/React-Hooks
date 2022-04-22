import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [show, setshow] = useState(false);

  // remove [] else it won't toggle
  useImperativeHandle(ref, () => {
    return {
      alterToggle() {
        setshow(!show);
      },
    };
  });
  return (
    <div>
      <button>Button from Child</button>
      {show && <p>This is Harrison</p>}
    </div>
  );
});

export default Button;
 