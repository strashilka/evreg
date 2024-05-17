import './ErrorMessage.css';

function ErrorMessage({text}: { text: string }) {
  return <div>
    <p className={'error'}>{text}</p>
  </div>;
}

export default ErrorMessage;