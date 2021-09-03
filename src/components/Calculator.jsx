import Screen from "./Screen";
import Pad from "./Pad";

function Calculator() {
    return (
      <main>
        <div className="Calculator">
            <Screen />
            <Pad />
        </div>
      </main>
    );
}

export default Calculator;
