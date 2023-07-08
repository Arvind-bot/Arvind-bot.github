import "./NoContentBox.styles.css";

const NoContentBox = (props) => {
  const { message } = props;
  return (
    <div className="no-content-box-container">
      <h1>{message}</h1>
    </div>
  );
};

export default NoContentBox;
