import React from 'react';
import './HomePage.css';
import NavbarComponent from '../../components/NavbarTop/NavbarComponent';
import NavbarleftComponent from '../../components/NavbarLeft/NavbarleftComponent';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';

function HomePage() {
  return (
    <>
      <NavbarComponent />
      <section class="homepage">
        <div class="left-navigation">
          <NavbarleftComponent />
        </div>
        <div class="dashboard">
          <DashboardComponent />
        </div>
      </section>
    </>
  );
}

export default HomePage;
