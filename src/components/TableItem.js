import './TableItem.scss';


function TableItem({showIcon,title,calories,time}) {
  return (
    <div className="tableItem">
      <div className="tableItem__icons">
        {showIcon ? <> <a href="/"><svg className="tableItem__edit" viewBox="0 0 24 24"><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"></path></svg></a>
        <a href="/"><svg className="tableItem__trash" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"></path></svg></a></> : null}
      </div>

      <div className="tableItem__titles">
        <h4 style={showIcon ? null : {fontWeight:"700"}} className="tableItem__title">{title}</h4>
      </div>
      <div className="tableItem__titles">
        <h4  style={showIcon ? null : {fontWeight:"700"}} className="tableItem__title">{calories}</h4>
      </div>
      <div className="tableItem__titles">
        <h4 style={showIcon ? null : {fontWeight:"700"}} className="tableItem__title">{time}</h4>
      </div>
     
    </div>
  );
}

export default TableItem;
