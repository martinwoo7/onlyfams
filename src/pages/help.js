import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import ShowButton from '../components/ShowButton';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'
import { CgBee } from 'react-icons/cg'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Table,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import script from '../testscript.txt';

fetch(script).then(r => r.text()).then(text => {
    console.log(text);
})

const Help = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    // this function needs to show the search bar on click
    // search bar currently underneath, so maybe change zindex?
    const [search, setSearch] = useState(false)
    const showSearch = () => {

        setSearch(!search)
        console.log("changed to " + search)
    }

    const fixSearch = () => {
        setSearch(false)
    }

    const [focus, setFocus] = useState(false)
    const handleFocus = () => {
        setFocus(true)
    }

    const handleBlur = () => {
        setFocus(false)
    }

    // TODO: implement smooth scrolling to sections + accordion expansion
    // const 
    // const gotoSection = () => {
    //     window.scrollTo({
    //         top: serviced
    //     })
    // }

    // TODO: Change accordion styling to be nicer - refer to source

    // TODOD: Automate reading of Bee Movie script
    // find some way to read line by line, then parse, then create components

    // TODO: make sidebar intially legit then change to Bee Movie stuff after scroll
    return (
        <div className='container-fluid w-100 h-100 bg-success d-flex flex-column p-0'>
            <nav className='navbar navbar-expand-lg bg-info ps-3' style={{ "position": "sticky", "zIndex": "99", "top": "0" }}>
                <div className='container-fluid ms-5'>
                    <Link to={`/`} className="navbar-brand text-white" style={{ "wordBreak": "break-all" }}>OnlyFams Community Guidelines</Link>
                    <ShowButton showSearch={showSearch} fixSearch={fixSearch} search={search} />
                </div>
            </nav>
            <div className='container-fluid bg-info d-flex flex-column search align-content-between ' style={search ? { "zIndex": "2", "height": "180px" } : {}}>
                <div className='container-fluid bg-info mt-auto' >
                    <h1 className='mt-auto ms-5 text-white mb-4 fs-1' style={search ? { "display": "none" } : {}}>Hi, how can we help? :)</h1>
                    <form className='mt-auto d-flex mx-5 mb-0 pt-0 ' id="searchForm" role="search">
                        <input className='form-control me-2 bg-info border-0 text-white ps-1' id="searchBar" type="search" placeholder='Search me :)' aria-label='Search' onFocus={handleFocus} onBlur={handleBlur} />
                        <button className='btn text-white' type='submit'>
                            <HiMagnifyingGlass />
                        </button>

                    </form>
                    <hr className='line mx-5 mt-0 pt-0 mb-5' style={focus ? { "backgroundColor": "white" } : {}} />
                </div>
            </div>
            <div className='container-fluid bg-white' style={{ "transform": "translateZ(0)" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 order-1 ps-0 mb-5 ' style={{ "width": "25%" }}>
                            <div className='sticky-top  pt-3'>
                                {/* <Accordion open={open} toggle={toggle} className="mt-5 pt-3">
                                    <AccordionItem className='mb-2 border-0 '>
                                        <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <strong>This is the first item&#39;s accordion body.</strong>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <hr className='short-line' />
                                    <AccordionItem className='border-0 mb-2 '>
                                        <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <strong>This is the second item&#39;s accordion body.</strong>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <hr className='short-line' />
                                    <AccordionItem className='border-0 mb-2'>
                                        <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <strong>This is the third item&#39;s accordion body.</strong>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <hr className='short-line' />
                                    <AccordionItem className='border-0 mb-2'>
                                        <AccordionHeader targetId="4">Accordion Item 4</AccordionHeader>
                                        <AccordionBody accordionId="4">
                                            <strong>This is the fourth item&#39;s accordion body.</strong>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <hr className='short-line' />
                                    <AccordionItem className='border-0 mb-2'>
                                        <AccordionHeader targetId="5">Accordion Item 5</AccordionHeader>
                                        <AccordionBody accordionId="5">
                                            <strong>This is the fifth item&#39;s accordion body.</strong>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <hr className='short-line' />
                                    <AccordionItem className='border-0 mb-2'>
                                        <AccordionHeader targetId="6">Accordion Item 6</AccordionHeader>
                                        <AccordionBody accordionId="6">
                                            <strong>This is the sixth item&#39;s accordion body.</strong>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <hr className='short-line' />
                                    <AccordionItem className='border-0'>
                                        <AccordionHeader targetId="7">Accordion Item 7</AccordionHeader>
                                        <AccordionBody accordionId="7">
                                            <strong>This is the seventh item&#39;s accordion body.</strong>

                                        </AccordionBody>
                                    </AccordionItem>
                                    <hr className='short-line' />
                                </Accordion> */}
                                <ListGroup className="mt-5 pt-3" id="directory">
                                    <ListGroupItem className='border-0 ps-0' action tag='button'>
                                        Chapter 1
                                    </ListGroupItem>
                                    <hr className='short-line' />
                                    <ListGroupItem className='border-0 ps-0' action tag='button'>
                                        Chapter 2
                                    </ListGroupItem>
                                    <hr className='short-line' />
                                    <ListGroupItem className='border-0 ps-0' action tag='button'>
                                        Chapter 3
                                    </ListGroupItem>
                                    <hr className='short-line' />
                                    <ListGroupItem className='border-0 ps-0' action tag='button'>
                                        Chapter 4
                                    </ListGroupItem>
                                    <hr className='short-line' />
                                    <ListGroupItem className='border-0 ps-0' action tag='button'>
                                        Chapter 5
                                    </ListGroupItem>
                                    <hr className='short-line' />
                                    <ListGroupItem className='border-0 ps-0' action tag='button'>
                                        Chapter 6
                                    </ListGroupItem>
                                    <hr className='short-line' />
                                    <ListGroupItem className='border-0 ps-0' action tag='button'>
                                        Chapter 7
                                    </ListGroupItem>
                                    <hr className='short-line' />
                                </ListGroup>

                            </div>
                        </div>
                        <div className='col content my-5 order-2 ms-5 pt-4'>
                            <div className='container ' style={{ "marginBottom": "15%" }}>
                                <div className='row'>
                                    <div className='col-8'>
                                        <h2>Looking for help?</h2>
                                        <hr className='short-line' />
                                        <p>Well, you won't get it here.</p>
                                        <p>Instead, you'll find the entire script to the Bee Movie.</p>
                                    </div>
                                    <div className='col'>
                                        <CgBee style={{ "width": "100%", "height": "auto", "transform": "rotate(30deg)", "color": "#c3f2fb" }} className='' />
                                    </div>

                                </div>
                            </div>
                            <div className='container '>
                                <h2>Chapter 1</h2>
                                <hr className='short-line' />
                                <Table className='table'>
                                    <tr>
                                        <th className=''>
                                            Narrator
                                        </th>
                                        <td className='ps-4'>
                                            According to all known laws of aviation, there is no way that a bee should be able to fly.
                                            Its wings are too small to get its fat little body off the ground. The bee, of course, flies
                                            anyway because bees don't care what humans think is impossible
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='fst-italic' colSpan={2}>Cut to Barry's room, where he's picking out what to wear</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Barry
                                        </th>
                                        <td className='ps-4'>
                                            Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Yeah, let's shake it up a little.
                                        </td>
                                    </tr>
                                </Table>
                            </div>
                            <div className='container'>

                                <h2>Chapter 2</h2>
                                <hr className='short-line' />
                            </div>
                            <div className='container'>

                                <h2>Chapter 3</h2>
                                <hr className='short-line' />
                            </div>
                            <div className='container'>

                                <h2>Chapter 4</h2>
                                <hr className='short-line' />
                            </div>
                            <div className='container'>

                                <h2>Chapter 5</h2>
                                <hr className='short-line' />
                            </div>
                            <div className='container'>

                                <h2>Chapter 6</h2>
                                <hr className='short-line' />
                            </div>
                            <div className='container'>

                                <h2>Chapter 7</h2>
                                <hr className='short-line' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Help;