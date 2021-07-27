import React from 'react'
import { makeStyles } from "@material-ui/core";
import ModuleStyles from './moduleStyles.js';
import moduleStack from '../../Icons/moduleStack.svg';


const useStyles = makeStyles(ModuleStyles)
function Modules() {


    const classes = useStyles();
    return (
        <div style={{ backgroundColor: 'red' }}>
            <section className={classes.modules}>
                <div className={classes.title}>
                    <img src={moduleStack} alt="Module" style={{ width: '45px' }} />
                    <p style={{ fontWeight: '600', marginLeft: '10px' }}>Learning Modules</p>
                </div>
                <div>
                    content
                </div>
            </section>
        </div>
    )
}

export default Modules
