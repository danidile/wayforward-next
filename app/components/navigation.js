
export default function NavBar() {
  return (
    
            <div className="menu-container">
                <div className="menu-img-container">
                <img  className="menu-logo"  src="/images/WF-Logo.png" alt=""></img>

                </div>
                <div className="menu-list-container">
                    <ul className="ul-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/multi-housing-training">Multi-Housing Training</a></li>
                        <li><a href="/give">Donate</a></li>
                        <li><a href="">Training</a></li>
                        <li><a href="/partner">Partner</a></li>
                        <li>
                        <a href="" className="button-big">
                            Become an RST
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
}