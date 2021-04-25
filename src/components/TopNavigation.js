import './TopNavigation.scss';


function TopNavigation() {
  return (
    <div className="TopNavigation">
      <a className="TopNavigation__logo" href="/">FirmaNavn</a>
      <input className="TopNavigation__searchbar" type="text" placeholder="Søg"/>
      <a className="TopNavigation__logout" href="/">Log ud</a>
    </div>
  );
}

export default TopNavigation;
