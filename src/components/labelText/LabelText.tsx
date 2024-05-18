import './LabelText.css';

function LabelText({text, isRequired = false}: { text: string, isRequired?: boolean }) {
  return <div>
    <p className={'text'}>
      {text}
      {isRequired && (<span>*</span>)}
    </p>
  </div>;
}

export default LabelText;