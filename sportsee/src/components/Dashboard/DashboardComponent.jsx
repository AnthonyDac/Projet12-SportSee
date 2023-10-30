import React from 'react';
import './DashboardComponent.css'
import { Link } from 'react-router-dom';


function NavbarComponent() {
    return (
        <>
            <div class="dashboardTitle">
                <h1>Bonjour <span>Anthony</span></h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </>
    )
}

export default NavbarComponent
