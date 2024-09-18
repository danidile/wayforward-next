
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
                        <li><a href="/partner" className="menu-button-1">Let’s Partner</a></li>
                        <li><a href="/rst" className="menu-button-2">Become An RST</a></li>
                    </ul>
                </div>
            </div>
            
        );
}