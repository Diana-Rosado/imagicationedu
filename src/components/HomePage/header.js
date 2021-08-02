import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../Icons/bird.svg';

export default function header() {
    return (
        <div>
            <header id="header" class="header">
                <div class="container">

                    <div id="logo" class="pull-left">
                        <h1>Imagication</h1>

                        <a href="index.html"><img src="assets/img/logo.png" alt="" title="" /></a>
                    </div>

                    <nav id="nav-menu-container">
                        <ul class="nav-menu">
                            <li class="menu-active"><a href="#home">Home</a></li>
                            <li><a href="#about-us">About</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    )
}
