import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function footer() {
    return (
        <div>

            <footer class="footer">

                <div class="copyrights">
                    <div class="container">
                        <p>&copy; Copyrights Imagication. All rights reserved.</p>
                        <div class="credits">

                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
