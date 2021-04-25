import './HeadlineAndButton.scss';


function HeadlineAndButton() {
  return (
    <div className="HeadlineAndButton">
     <h1>Recipes</h1>
     <button className="HeadlineAndButton__button"><svg className="HeadlineAndButton__svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>Opret ny side</button>
    </div>
  );
}

export default HeadlineAndButton;
