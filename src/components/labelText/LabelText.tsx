import './LabelText.css';

function LabelText({text}: { text: string }) {
  return <div>
    <p className={'text'}>{text}</p>
  </div>;
}

export default LabelText;