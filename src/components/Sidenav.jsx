import React from "react";
import "./sidenav.css";

const Side = () => {
    function menuOnClick() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
    }
    return (
        <div class="hamburger-menu">
            <div id="menu">
                <div id="menu-bar" onClick={menuOnClick}>
                    <div id="bar1" class="bar"></div>
                    <div id="bar2" class="bar"></div>
                    <div id="bar3" class="bar"></div>
                </div>
                <nav class="nav" id="nav">
                    <ul>
                        <li>
                            <div className="sites">
                                <div className="alertCircle">
                                    <p className="alertSite">1</p>
                                </div>
                                <a href="#">אתר 1</a>
                            </div>
                        </li>
                        <li><a href="#">אתר 2</a></li>
                        <li><a href="#">אתר 3</a></li>
                        <li>
                            <div className="sites">
                                <div className="alertCircle">
                                    <p className="alertSite">3</p>
                                </div>
                                <a href="#">אתר 4</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="menu-bg" id="menu-bg"></div>
        </div >
    );
};
export default Side