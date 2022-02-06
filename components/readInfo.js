import React from 'react'
const style = {
    fontSize: '3px',

}

const ReadInfo = (props) => {
    return (
        <p style={style}>{props.time} mins read | last updated at {props.updatetime}</p>
    )
}



module.exports = ReadInfo