import Screen from "./Screen";
import Pad from "./Pad";
import "../styles/_calculator.scss";

function Calculator() {
    return (
      <main>
        <div className="calculator">
            <Screen />
            <Pad />
        </div>
      </main>
    );
}

export default Calculator;
