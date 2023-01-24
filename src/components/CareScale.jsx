import Sun from "./../assets/sun.svg";
import Water from "./../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  let scaleType = "";
  careType === "light"
    ? (scaleType = (
        <span>
          <img src={Sun} alt="sun-icon" />
        </span>
      ))
    : (scaleType = (
        <span>
          <img src={Water} alt="water-icon" />
        </span>
      ));
  //const scaleType = careType === "light" ? "☀️" : "💧";
  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? <span>{scaleType}</span> : null
      )}
    </div>
  );
}

export default CareScale;
