import React, { useState, useEffect } from "react";
import "./App.css";
import whatsapp from "./icons/whatsapp-icon.svg";
import Reset from "./icons/reset.svg";
import { TableRow } from "./components/Row/TableRow";
import Choice from "./Choice";

const App = () => {
  const [selectedLeftItem, setSelectedLeftItem] = useState("");
  const [selectedRightItem, setSelectedRightItem] = useState("");
  const [yarnItems, setYarnItems] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [showRightChoices, setShowRightChoices] = useState(false);
  const [customTarInput, setCustomTarInput] = useState("");

  // Left side options
  const leftOptions = [
    "કસબ",
    "14 TR (S)",
    "14 TR (Z)",
    "12 TR (S)",
    "12 TR (Z)",
    "5 TR વલ",
    "18 TR (S)",
    "18 TR (Z)",
    "4X4X4",
    "5X5X5",
    "સ્પોંગ બટન",
    "2 MM-1200 MTR",
    "4 MM-800 MTR",
    "KATORI CD",
    "JARI DORI",
    "ચપટી દોરી",
    "ગાભા દોરી",
    "12 તાર દોરી",
    "LINE",
    "3 તાર બુલેટ",
    "5 તાર બુલેટ",
    "POLYESTER",
    "કલરજરી દોરી",
    "150/6 ગોપદોરી",
    "150/12 ગોપદોરી",
    "150/2 Yarn",
    "LINE",
  ];

  // Right side mappings for each left option
  const rightMappings = {
    કસબ: [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "14 TR (S)": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "14 TR (Z)": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "12 TR (S)": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "12 TR (Z)": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "5 TR વલ": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "18 TR (S)": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "18 TR (Z)": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "4X4X4": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "5X5X5": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "સ્પોંગ બટન": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "2 MM-1200 MTR": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "4 MM-800 MTR": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "KATORI CD": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "JARI DORI": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "ચપટી દોરી": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "ગાભા દોરી": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "12 તાર દોરી": [
      "એન્ટીક",
      "સિલ્વર",
      "અનમોલ",
      "પલ્મેટ",
      "પાની",
      "જરી કાળો",
      "જરી ગ્રે",
      "કોપર",
      "જરી પિન્ક",
      "ચૂહા પાની",
      "ફલોરા",
    ],
    "3 તાર બુલેટ": [
      "RED",
      "GREEN",
      "RANI",
      "R.BLUE",
      "BLACK",
      "MAROON",
      "MULTI",
      "ORANGE",
      "N.BLUE",
      "YELLOW",
      "RAMA",
      "C.GREEN",
      "B.PINK",
      "FIROZI",
      "JURMAN",
      "CHIKU",
      "MEHENDI",
      "GRAY",
      "L.MULTI",
      "CREAM",
      "COFFEE",
      "WHITE",
      "PEACH",
      "PISTA",
      "B.GREEN",
      "WINE",
      "GAJRI",
      "MAJANTA",
      "KANDA",
      "LAVANDER",
      "SKY",
      "POPTI",
      "JAMBLI",
      "RANI MULTI",
      "RUST",
      "MUSTERD",
      "LEMON",
    ],
    "5 તાર બુલેટ": [
      "RED",
      "GREEN",
      "RANI",
      "R.BLUE",
      "BLACK",
      "MAROON",
      "MULTI",
      "ORANGE",
      "N.BLUE",
      "YELLOW",
      "RAMA",
      "C.GREEN",
      "B.PINK",
      "FIROZI",
      "JURMAN",
      "CHIKU",
      "MEHENDI",
      "GRAY",
      "L.MULTI",
      "CREAM",
      "COFFEE",
      "WHITE",
      "PEACH",
      "PISTA",
      "B.GREEN",
      "WINE",
      "GAJRI",
      "MAJANTA",
      "KANDA",
      "LAVANDER",
      "SKY",
      "POPTI",
      "JAMBLI",
      "RANI MULTI",
      "RUST",
      "MUSTERD",
      "LEMON",
    ],
    POLYESTER: [
      "RED",
      "GREEN",
      "RANI",
      "R.BLUE",
      "BLACK",
      "MAROON",
      "MULTI",
      "ORANGE",
      "N.BLUE",
      "YELLOW",
      "RAMA",
      "C.GREEN",
      "B.PINK",
      "FIROZI",
      "JURMAN",
      "CHIKU",
      "MEHENDI",
      "GRAY",
      "L.MULTI",
      "CREAM",
      "COFFEE",
      "WHITE",
      "PEACH",
      "PISTA",
      "B.GREEN",
      "WINE",
      "GAJRI",
      "MAJANTA",
      "KANDA",
      "LAVANDER",
      "SKY",
      "POPTI",
      "JAMBLI",
      "RANI MULTI",
      "RUST",
      "MUSTERD",
      "LEMON",
    ],
    "કલરજરી દોરી": [
      "RED",
      "GREEN",
      "RANI",
      "R.BLUE",
      "BLACK",
      "MAROON",
      "MULTI",
      "ORANGE",
      "N.BLUE",
      "YELLOW",
      "RAMA",
      "C.GREEN",
      "B.PINK",
      "FIROZI",
      "JURMAN",
      "CHIKU",
      "MEHENDI",
      "GRAY",
      "L.MULTI",
      "CREAM",
      "COFFEE",
      "WHITE",
      "PEACH",
      "PISTA",
      "B.GREEN",
      "WINE",
      "GAJRI",
      "MAJANTA",
      "KANDA",
      "LAVANDER",
      "SKY",
      "POPTI",
      "JAMBLI",
      "RANI MULTI",
      "RUST",
      "MUSTERD",
      "LEMON",
    ],
    "150/6 ગોપદોરી": [
      "RED",
      "GREEN",
      "RANI",
      "R.BLUE",
      "BLACK",
      "MAROON",
      "MULTI",
      "ORANGE",
      "N.BLUE",
      "YELLOW",
      "RAMA",
      "C.GREEN",
      "B.PINK",
      "FIROZI",
      "JURMAN",
      "CHIKU",
      "MEHENDI",
      "GRAY",
      "L.MULTI",
      "CREAM",
      "COFFEE",
      "WHITE",
      "PEACH",
      "PISTA",
      "B.GREEN",
      "WINE",
      "GAJRI",
      "MAJANTA",
      "KANDA",
      "LAVANDER",
      "SKY",
      "POPTI",
      "JAMBLI",
      "RANI MULTI",
      "RUST",
      "MUSTERD",
      "LEMON",
    ],
    "150/12 ગોપદોરી": [
      "RED",
      "GREEN",
      "RANI",
      "R.BLUE",
      "BLACK",
      "MAROON",
      "MULTI",
      "ORANGE",
      "N.BLUE",
      "YELLOW",
      "RAMA",
      "C.GREEN",
      "B.PINK",
      "FIROZI",
      "JURMAN",
      "CHIKU",
      "MEHENDI",
      "GRAY",
      "L.MULTI",
      "CREAM",
      "COFFEE",
      "WHITE",
      "PEACH",
      "PISTA",
      "B.GREEN",
      "WINE",
      "GAJRI",
      "MAJANTA",
      "KANDA",
      "LAVANDER",
      "SKY",
      "POPTI",
      "JAMBLI",
      "RANI MULTI",
      "RUST",
      "MUSTERD",
      "LEMON",
    ],
    "150/2 Yarn": [
      "RED",
      "RANI",
      "R.BLUE",
      "BLACK",
      "MAROON",
      "MULTI",
      "ORANGE",
      "N.BLUE",
      "YELLOW",
      "RAMA",
      "C.GREEN",
      "B.PINK",
      "FIROZI",
      "JURMAN",
      "L-CHIKU",
      "D-CHIKU",
      "MEHENDI",
      "GRAY",
      "L.MULTI",
      "CREAM",
      "COFFEE",
      "WHITE",
      "PEACH",
      "PISTA",
      "B.GREEN",
      "WINE",
      "GAJRI",
      "MAJANTA",
      "KANDA",
      "LAVANDER",
      "SKY",
      "POPTI",
      "JAMBLI",
      "RANI MULTI",
      "RUST",
      "MUSTERD",
      "LEMON",
      "SILVER",
      "L-COPPER",
      "D-COPPER",
    ],
  };

  // Color list for custom tars
  const customTarColors = [
    "RED",
    "RANI",
    "R.BLUE",
    "BLACK",
    "MAROON",
    "MULTI",
    "ORANGE",
    "N.BLUE",
    "YELLOW",
    "RAMA",
    "C.GREEN",
    "B.PINK",
    "FIROZI",
    "JURMAN",
    "L-CHIKU",
    "D-CHIKU",
    "MEHENDI",
    "GRAY",
    "L.MULTI",
    "CREAM",
    "COFFEE",
    "WHITE",
    "PEACH",
    "PISTA",
    "B.GREEN",
    "WINE",
    "GAJRI",
    "MAJANTA",
    "KANDA",
    "LAVANDER",
    "SKY",
    "POPTI",
    "JAMBLI",
    "RANI MULTI",
    "RUST",
    "MUSTERD",
    "LEMON",
    "SILVER",
    "L-COPPER",
    "D-COPPER",
  ];

  // Initialize yarn items for tracking quantities
  useEffect(() => {
    if (selectedLeftItem) {
      let rightOptions;

      // Check if it's in the mappings, otherwise it's a custom tar
      if (rightMappings[selectedLeftItem]) {
        rightOptions = rightMappings[selectedLeftItem];
      } else {
        // For custom tars, use the custom tar colors
        rightOptions = customTarColors;
      }

      const initialYarnItems = [];

      // Group items in pairs (2 per row)
      for (let i = 0; i < rightOptions.length; i += 2) {
        const leftItem = {
          uid: i + 1,
          yarn_color: rightOptions[i],
          yarn_qty: 0,
        };

        // Check if we have a second item for this row
        const rightItem =
          i + 1 < rightOptions.length
            ? {
                uid: i + 2,
                yarn_color: rightOptions[i + 1],
                yarn_qty: 0,
              }
            : null;

        initialYarnItems.push({
          left: leftItem,
          right: rightItem,
        });
      }

      setYarnItems(initialYarnItems);
    }
  }, [selectedLeftItem]);

  // Update selected colors when yarn quantities change
  useEffect(() => {
    let colors = [];
    yarnItems.forEach((yarn) => {
      if (yarn.left) colors.push(yarn.left);
      if (yarn.right) colors.push(yarn.right);
    });
    // Sort colors by uid to maintain the correct order
    colors.sort((a, b) => (a.uid > b.uid ? 1 : b.uid > a.uid ? -1 : 0));
    setSelectedColors(colors);
  }, [yarnItems]);

  const onAddYarn = (index, pos, quantity = 1) => {
    const updatedYarnItems = [...yarnItems];
    if (updatedYarnItems[index] && updatedYarnItems[index][pos]) {
      updatedYarnItems[index][pos].yarn_qty += quantity;
      setYarnItems(updatedYarnItems);
    }
  };

  const onRemoveYarn = (index, pos, quantity = 1) => {
    const updatedYarnItems = [...yarnItems];
    if (updatedYarnItems[index] && updatedYarnItems[index][pos]) {
      updatedYarnItems[index][pos].yarn_qty = Math.max(
        updatedYarnItems[index][pos].yarn_qty - quantity,
        0
      );
      setYarnItems(updatedYarnItems);
    }
  };

  const onLeftItemSelect = (item) => {
    setSelectedLeftItem(item);
    // Always proceed directly to yarn selection screen
    setSelectedRightItem("");
    setShowRightChoices(false);
  };

  const onBack = () => {
    // Always go back to the left choices screen
    setSelectedLeftItem("");
    setShowRightChoices(false);
    setSelectedRightItem("");
  };

  const handleCustomTarSubmit = () => {
    if (customTarInput.trim() === "") return;

    // Just select the custom tar immediately without adding to list
    setSelectedLeftItem(customTarInput);
    setShowRightChoices(false);

    // Clear the input field
    setCustomTarInput("");
  };

  const onSendOrder = () => {
    let whatsappMessage = "";
    whatsappMessage += `${selectedLeftItem}${
      selectedRightItem ? ` - ${selectedRightItem}` : ""
    }%0A%0A`;
    selectedColors
      .sort((a, b) => (a.uid > b.uid ? 1 : b.uid > a.uid ? -1 : 0))
      .forEach((color) => {
        whatsappMessage += `${color.yarn_color.padEnd(
          9,
          " "
        )} : ${color.yarn_qty.toString().padStart(3, " ")}`;
        whatsappMessage += "%0A";
      });
    whatsappMessage += "--------------%0A";
    whatsappMessage += `Colors: ${selectedColors.length}%0A`;
    whatsappMessage += `Quantity: ${selectedColors.reduce(
      (total, color) => total + color.yarn_qty,
      0
    )}%0A`;
    whatsappMessage += "--------------";
    window.open(
      `https://api.whatsapp.com/send?text=${whatsappMessage}&phone=+917802911611`,
      "_blank"
    );
  };

  const onResetOrder = () => {
    const resetYarnItems = yarnItems.map((yarn) => ({
      ...yarn,
      left: { ...yarn.left, yarn_qty: 0 },
      right: { ...yarn.right, yarn_qty: 0 },
    }));
    setYarnItems(resetYarnItems);
  };

  const redirectToWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?phone=+917802911611`, "_blank");
  };

  // Calculate total counts
  const totalCorn = selectedColors.length;
  const totalQty = selectedColors.reduce(
    (total, color) => total + color.yarn_qty,
    0
  );

  console.log("yarnItems", leftOptions);

  // Render selection screens or yarn selection
  const renderContent = () => {
    if (!selectedLeftItem) {
      // First screen: show left choices
      return (
        <div>
          <Choice
            options={leftOptions}
            onChange={onLeftItemSelect}
            title="SELECT TAR"
          />
          <div className="custom-tar-container">
            <h3 className="custom-tar-heading">Add your TAR</h3>
            <div className="input-row">
              <div className="input-icon-wrapper">
                <span className="input-icon">+</span>
                <input
                  type="text"
                  value={customTarInput}
                  onChange={(e) => setCustomTarInput(e.target.value)}
                  placeholder="Type your custom TAR name here..."
                  className="custom-tar-text-input"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && customTarInput.trim() !== "") {
                      handleCustomTarSubmit();
                    }
                  }}
                />
              </div>
            </div>
            <div className="button-row">
              <button
                onClick={handleCustomTarSubmit}
                className="custom-tar-submit-btn"
                disabled={customTarInput.trim() === ""}
              >
                <span className="btn-text">Select</span>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      // Final screen: yarn selection (now directly after selecting left item)
      return (
        <>
          <div className="yarn-select">
            <button onClick={onBack} title="Back to selection">
              <svg viewBox="0 0 24 24" tabIndex="-1" width={18} height={18}>
                <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path>
              </svg>
            </button>

            <div className="yarn-selected">{selectedLeftItem}</div>

            <div className="stats">
              Colors: {totalCorn} | Qty: {totalQty}
            </div>
          </div>

          <div className="table-container">
            <table className="table">
              <tbody>
                {yarnItems.map((data, index) => (
                  <TableRow
                    key={index}
                    data={data}
                    index={index}
                    onRemoveYarn={onRemoveYarn}
                    onAddYarn={onAddYarn}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="footer-button">
            <button
              value="Reset"
              name="Reset"
              onClick={onResetOrder}
              className="btn reset-order-btn"
            >
              <img src={Reset} alt="reset" className="whatsapp-img" />
              <div className="send-text">Reset</div>
            </button>
            <button
              value="Send"
              name="Submit"
              onClick={onSendOrder}
              className="btn send-order-btn"
            >
              <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
              <div className="send-text">Send</div>
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <div className="app-container">
      {renderContent()}

      <footer>
        <div
          className={`${
            selectedLeftItem && !showRightChoices
              ? "Footer_None"
              : "Footer__Container"
          }`}
        >
          <a href="tel:+917802911611" className="Footer_Btn Footer_Btn_Left">
            <span>Call US</span>
          </a>
          <div className="Footer_Btn" onClick={redirectToWhatsapp}>
            <img
              src={whatsapp}
              alt="whatsapp"
              className="whatsapp-img footer-icon-2"
            />
            <span>WhatsApp</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
