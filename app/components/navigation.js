

export default function NavBar() {
  return (
    <>
    {/* <div class="menu-top-space-mobile"></div> */}
    <div class="menu-box">
            <div className="menu-container">
                <div className="menu-img-container">
                    <a href="/">
                        <img src="/images/WF-Logo.png" alt=""  className="menu-logo filter-bright"></img>
                    </a>
                </div>
                
                <div className="menu-list-container">
                    <ul className="ul-menu">
                        <li><a href="/">Home</a></li>
                        <li className="dropbtn dropdown">
                            <a className="dropbtn">
                                Training
                            </a>
                            <div class="dropdown-content">
                                <a href="/rst">Resident Support Team</a>
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
                                Become a RST
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