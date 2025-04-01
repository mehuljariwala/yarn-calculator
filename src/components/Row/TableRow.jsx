import React, { useState } from "react";
import "./TableRow.css";

export function TableRow(props) {
  const { data, index, onAddYarn, onRemoveYarn } = props;
  const [intervalId, setIntervalId] = useState(null);

  // Check if this is a line separator row
  if (data.isLine) {
    return (
      <tr key={index} className="line-separator-row">
        <td colSpan="4" className="line-separator">
          <hr />
        </td>
      </tr>
    );
  }

  const handleIncrementMouseDown = (index, pos) => {
    const id = setInterval(() => {
      onAddYarn(index, pos);
    }, 200); // Adjust the interval duration as needed
    setIntervalId(id);
  };

  const handleDecrementMouseDown = (index, pos) => {
    const id = setInterval(() => {
      onRemoveYarn(index, pos);
    }, 200); // Adjust the interval duration as needed
    setIntervalId(id);
  };

  const handleMouseUp = () => {
    clearInterval(intervalId);
  };

  return (
    <tr key={index}>
      {/* Left side item */}
      <td className="color-cell">{data.left && data.left.yarn_color}</td>
      <td className="action-cell">
        {data.left && (
          <div className="btn-group">
            <button
              className="action-btn minus-btn"
              onClick={() => onRemoveYarn(index, "left")}
              onMouseDown={() => handleDecrementMouseDown(index, "left")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              -
            </button>
            {data.left && (
              <input
                type="number"
                className="qty-input"
                value={data.left.yarn_qty}
                onChange={(e) => {
                  // Get the new value from input
                  const newValue = parseInt(e.target.value) || 0;
                  const currentValue = data.left.yarn_qty;

                  // Calculate the difference - how many to add or remove
                  const diff = newValue - currentValue;

                  if (diff > 0) {
                    // Add the difference in one call
                    onAddYarn(index, "left", diff);
                  } else if (diff < 0) {
                    // Remove the difference in one call
                    onRemoveYarn(index, "left", Math.abs(diff));
                  }
                }}
                onFocus={(e) => {
                  if (data.left.yarn_qty === 0) {
                    e.target.value = "";
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    e.target.value = "0";
                  }
                }}
                min="0"
              />
            )}
            <button
              className="action-btn plus-btn"
              onClick={() => onAddYarn(index, "left")}
              onMouseDown={() => handleIncrementMouseDown(index, "left")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              +
            </button>
          </div>
        )}
      </td>

      {/* Right side item (if it exists) */}
      <td className="color-cell">{data.right && data.right.yarn_color}</td>
      <td className="action-cell">
        {data.right && (
          <div className="btn-group">
            <button
              className="action-btn minus-btn"
              onClick={() => onRemoveYarn(index, "right")}
              onMouseDown={() => handleDecrementMouseDown(index, "right")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              -
            </button>
            {data.right && (
              <input
                type="number"
                className="qty-input"
                value={data.right.yarn_qty}
                onChange={(e) => {
                  // Get the new value from input
                  const newValue = parseInt(e.target.value) || 0;
                  const currentValue = data.right.yarn_qty;

                  // Calculate the difference - how many to add or remove
                  const diff = newValue - currentValue;

                  if (diff > 0) {
                    // Add the difference in one call
                    onAddYarn(index, "right", diff);
                  } else if (diff < 0) {
                    // Remove the difference in one call
                    onRemoveYarn(index, "right", Math.abs(diff));
                  }
                }}
                onFocus={(e) => {
                  if (data.right.yarn_qty === 0) {
                    e.target.value = "";
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    e.target.value = "0";
                  }
                }}
                min="0"
              />
            )}
            <button
              className="action-btn plus-btn"
              onClick={() => onAddYarn(index, "right")}
              onMouseDown={() => handleIncrementMouseDown(index, "right")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              +
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
