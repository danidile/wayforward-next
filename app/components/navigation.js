import Script from "next/script";


export default function NavBar() {
  return (
    <>
    <Script src="/snippets/dropdown-menu.js" type="text/javascript"/>
    <div className="menu-box">
        <div className="blur-menu-bg"> </div>
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
                            <div className="dropbtn" id="dropbtn">
                                Training
                            </div>
                            <div class="dropdown-content" id="dropdown-content">
                                <a href="https://wayforwardtraining.org/courses/rst-training/">Disciple-Making</a>
                                <a href="/churches">Churches</a>
                            </div>
                            <div className="mobile-dropdown" id="dropdown1"><a href="/rst">Disciple-Making</a></div>
                            <div className="mobile-dropdown" id="dropdown2"><a href="/churches">Churches</a></div>
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
                <div className="hamburger-container">
                    <img src="/images/menu.png" id="menu-burger"/>
                </div>
                
            </div>
</div>
</>
            
        );
}