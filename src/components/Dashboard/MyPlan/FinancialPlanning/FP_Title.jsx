import React from 'react'
import { makeStyles } from '@material-ui/styles';
import moduleStack from "../../../Icons/moduleStack.svg";
import { Typography } from '@material-ui/core';
import {
    useParams
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    modules: {
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        borderBottom: "1px solid #E5E5E5 ",
        backgroundColor: '#FAFAFA',
    },
    title: {
        display: "flex",
        alignItems: "flex-start",
    },

}))


export default function FP_Title() {
    const classes = useStyles()
    let { topicId } = useParams();

    topicId = (topicId.replace(/-/g, ' '));
    topicId = topicId.split(" ");

    for (let i = 0; i < topicId.length; i++) {
        topicId[i] = topicId[i][0].toUpperCase() + topicId[i].substr(1);

    }
    topicId = topicId.join(' ')
    return (
        <div className={classes.modules}>
            <p
                style={{
                    fontWeight: "600",
                    marginLeft: "155px",
                    marginBottom: "-5px",
                    color: "#B5B5B5",
                }}
            >
                Module
            </p>
            <div className={classes.title}>
                {" "}
                <img
                    src={moduleStack}
                    alt="Module"
                    style={{ width: "45px", marginLeft: "100px" }}
                />
                <Typography
                    style={{
                        fontWeight: "500",
                        marginLeft: "10px",
                        fontSize: "18px",
                        color: "#070707",
                    }}
                >
                    {topicId}
                </Typography>
            </div>
        </div>
    )
}

