
export default function NavBar() {
  return (
    <>
    <div class="menu-top-space-mobile"></div>
    <div class="menu-box">
            <div className="menu-container">
                <div className="menu-img-container">
                    <img  className="menu-logo"  src="/images/WF-Logo.png" alt=""></img>
                </div>
                
                <div className="menu-list-container">
                    <ul className="ul-menu">
                        <li><a href="/">Home</a></li>
                        <li className="dropbtn dropdown">
                            <a className="dropbtn">
                                Multi-Housing Training
                            </a>
                            <div class="dropdown-content">
                                <a href="/rst">RST</a>
                                <a href="/churches">Churches</a>
                            </div>
                        </li>
                        <li><a href="/give">Donate</a></li>
                        <li>
                            <a href="/partner" className="button-big">
                                Let's Partner
                            </a>
                        </li>
                        <li>
                            <a href="/rst" className="button-big">
                                Become an RST
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="hamburger-container">
                    <img src="/images/menu.png" id="menu-burger"/>
                </div>
                
            </div>
</div>
</>
            
        );
}