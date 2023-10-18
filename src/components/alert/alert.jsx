import "./Alert.css";

function Alert({ restart }) {
  return (
    <div className="alert_wraper">
      <div className="alert_box">
        <p className="alert_content">you luuuuse</p>
        <button onClick={restart} className="alert_button">
          Restart
        </button>
      </div>
    </div>
  );
}

export default Alert;
