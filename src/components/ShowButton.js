import React, { useState } from 'react'
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'

const ShowButton = ({ showSearch, fixSearch, search }) => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        } else if (scrolled <= 200) {
            setVisible(false)
        }

        if (scrolled <= 0) {
            fixSearch()
        }
    }




    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='btn text-white' onClick={showSearch} style={visible ? { "display": 'inline' } : { 'display': 'none' }}>
            {search ? <HiXMark /> : <HiMagnifyingGlass />}
        </button>
    )
}

export default ShowButton;