
import ReactSpeedometer from "react-d3-speedometer";
import "./graphStyle.css";

export const GraphsModule10 = () => {
  return (
    <>
      {" "}
      <div className="main">
        <div className="container">
          <div style={{ margin: "10px" }}>
            <h2 style={{ textAlign: "center", padding: "10px"}}>
              Engine 3 Statistics
            </h2>
          </div>
        </div>
        <div>
        <div className="speedometer-row1">
            <div className="speedometer-wrapper1">
              <ReactSpeedometer
                maxValue={100}
                value={100}
                segments={10}
                needleColor="black"
                startColor="red"
                endColor="green"
                currentValueText="Remaining Useful Life"
                height={200}
                textColor="black"
              />
            </div>
          </div>
          <div className="speedometer-row">
            <div className="speedometer-wrapper">
              <ReactSpeedometer
                maxValue={600}
                value={0}
                segments={10}
                needleColor="black"
                startColor="green"
                endColor="red"
                currentValueText="Flight Duration"
                height={200}
                textColor="black"
              />
            </div>
            <div className="speedometer-wrapper">
              <ReactSpeedometer
                value={0}
                maxSegmentLabels={5}
                segments={1000}
                maxValue={222}
                currentValueText="Tyre Pressure"
                needleColor="black"
                startColor="green"
                endColor="red"
                height={200}
                textColor="black"
              />
            </div>
            <div className="speedometer-wrapper">
              <ReactSpeedometer
                value={0}
                maxSegmentLabels={5}
                segments={1000}
                maxValue={1550}
                currentValueText="Tyre Rotor"
                needleColor="black"
                startColor="green"
                endColor="red"
                height={200}
                textColor="black"
              />
            </div>
          </div>
          <div className="speedometer-row">
            <div className="speedometer-wrapper">
              <ReactSpeedometer
                maxValue={0.3}
                value={0}
                segments={6}
                needleColor="black"
                startColor="green"
                endColor="red"
                currentValueText="Due For Maintainance"
                height={200}
                textColor="black"
              />
            </div>
            <div className="speedometer-wrapper">
              <ReactSpeedometer
                value={0}
                segments={10}
                maxValue={43}
                currentValueText="Performance Metrics - A14"
                needleColor="black"
                startColor="green"
                endColor="red"
                height={200}
                textColor="black"
              />
            </div>
            <div className="speedometer-wrapper">
              <ReactSpeedometer
                value={0}
                maxSegmentLabels={5}
                segments={1000}
                maxValue={55}
                currentValueText="Cycles"
                needleColor="black"
                startColor="green"
                endColor="red"
                height={200}
                textColor="black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
