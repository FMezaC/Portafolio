interface ToastNotificationProps {
  show: boolean;
  message: string;
  onClose: () => void;
  type?: "success" | "danger" | "info" | "warning";
}

const ToastNotification = ({
  show,
  message,
  onClose,
  type,
}: ToastNotificationProps) => {
  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-4"
      style={{ zIndex: 9999 }}
    >
      <div
        className={`toast align-items-center text-bg-${type} border-0 ${
          show ? "show" : "hide"
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ToastNotification;
