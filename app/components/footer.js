
export default function Footer() {
  return (
    
    <footer>
    <div className="footer-container">
        <div className="footer-column1">
            <img src="images/WayForward-Logo-Primary-Black.png" className="footer-logo filter-bright"></img>
            <p>
                Leading the way in forming <br/> disciple-makers in every community. 
            </p>
        </div>
        <div className="footer-column2">
            <ul className="footer-menu-li">
                <li><a href=""><b>TRAINING</b></a></li>
                <li><a href="">Resident Support Team</a></li>
                <li><a href="">Churches</a></li>
            </ul>
            <ul className="footer-menu-li">
                <li><a href="/partners"><b>PARTNERS</b></a></li>
                <li><a href="/multi-housing-owners">Multi Housing Owners</a></li>
                <li><a href="/churches">Churches</a></li>
            </ul>
            
        </div>
        
    </div>
</footer>
);
}