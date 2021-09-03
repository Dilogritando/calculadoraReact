import Button from "./Button";

function Pad() {
	return (
	  	<div className="calculator__pad">
		  <div class="calculator__pad__numbers">
				<Button btnClass="operators numbers three-column" btnContent="C" />
				<Button btnClass="numbers" btnContent="1" />
				<Button btnClass="numbers" btnContent="2" />
				<Button btnClass="numbers" btnContent="3" />
				<Button btnClass="numbers" btnContent="4" />
				<Button btnClass="numbers" btnContent="5" />
				<Button btnClass="numbers" btnContent="6" />
				<Button btnClass="numbers" btnContent="7" />
				<Button btnClass="numbers" btnContent="8" />
				<Button btnClass="numbers" btnContent="9" />
				<Button btnClass="numbers three-column" btnContent="0" />
		  </div>
		  <div class="calculator__pad__operators">
				<Button btnClass="operators" btnContent="%" />
				<Button btnClass="operators" btnContent="x" />
				<Button btnClass="operators" btnContent="-" />
				<Button btnClass="operators" btnContent="+" />
				<Button btnClass="operators" btnContent="=" />
		  </div>
	  </div>
	);
}

export default Pad;
