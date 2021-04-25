import { Link } from '@reach/router';
import './SideTopNav.scss';


function SideTopNav({title,icon,url}) {
  return (

      <Link className="SideTopNav" to={url}>
        {icon}
        {title}
       
      </Link>
    
    
  );
}

export default SideTopNav;
