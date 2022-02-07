import React from 'react'
const style = {
    opacity: "0.8",
    fontSize: "0.8rem"
}

const ReadInfo = (props) => {
    return (
        <p style={style}>{props.time} mins read | last updated at {props.updatetime}</p>
    )
}



module.exports = ReadInfo