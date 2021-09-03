function Button(props) {
    return (
      <button className={ props.btnClass } type="button">{ props.btnContent }</button>
    );
}

export default Button;
