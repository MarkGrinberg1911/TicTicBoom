import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from '../Componants/NavBar'
import Footer from '../Componants/Footer'
import Gameboard from '../Componants/Gameboard'
function Pve(props) {
    return (
        <div className=''>
            <NavBar />
            <Gameboard />

            <Footer />
        </div>
    );
}

export default Pve;