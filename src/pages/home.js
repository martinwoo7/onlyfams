import React from "react";
import Login from "./login";
import LoadUsers from "../components/LoadUsers"
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import {
    Link,
} from 'react-router-dom'

// cd frontend
// npm start

export default function Home() {
    return (
        <>
            <div className="container vh-100 mw-100 bg-info shadow">
                <div className="row align-items-center">
                    <div className="col h-100 d-flex flex-column">
                        <div style={{ "width": "60%" }} className="mx-auto">
                            <h3 className="mx-auto"><a href="/#" style={{ "textDecoration": "none", "color": "white" }}>OnlyFams</a></h3>
                            <div className="mx-auto" style={{ "fontSize": "24px", "color": "white" }}>
                                Sign up to support your favourite family members
                            </div>
                        </div>
                    </div>
                    <div className="col vh-100 bg-white d-flex justify-content-center">
                        <div className="my-auto">
                            <Login />
                        </div>

                    </div>
                </div>
            </div>
            <div className="container mw-100 d-flex justify-content-center" style={{ 'backgroundColor': '#F6F7F8' }}>
                <LoadUsers />
            </div>
            {/* <div className="container bg-light mw-100 links pb-3 shadow">
                <div className="row py-5 px-5">
                    <div className="col bg-success d-flex flex-column column">
                        <Link to={`#`} className="bg-danger">@ 2022 OnlyFams</Link>
                        <Link to={`contact`}>Contact</Link>
                        <div>
                            <i className="mx-2"><BsInstagram /></i>
                            <i className="mx-2"><BsTwitter /></i>
                        </div>
                        <hr className="m-0 my-2" />
                        <a href="/#">Language</a>
                    </div>
                    <div className="col d-flex flex-column column">
                        <Link to={`help`} target="_blank">Help</Link>
                        <Link to={`how`}>how it works</Link>
                        <Link to={`complaints`}>Complaints Policy</Link>
                        <Link to={`contract`}>Stardard Contract between Fan and Creator</Link>
                    </div>
                    <div className="col d-flex flex-column column">
                        <Link to={`about`}>About</Link>
                        <Link to={`store`}>Store</Link>
                        <Link to={`cookie`}>Cookie Notice</Link>
                        <Link to={`safety`}>OnlyFans Safety & Transparency Center</Link>
                    </div>
                    <div className="col d-flex flex-column column">
                        <Link to={`blog`}>Blog</Link>
                        <Link to={`terms`}>Terms of Service</Link>
                        <Link to={`dmca`}>DMCA</Link>
                        <Link to={`slavery`}>Anti-Slavery & Anti-Trafficking Statement</Link>
                    </div>
                    <div className="col d-flex flex-column column">
                        <Link to={`branding`}>Branding</Link>
                        <Link to={`privacy`}>Privacy</Link>
                        <Link to={`usc`}>USC 2257</Link>
                        <Link to={`policy`}>Acceptable Use Policy</Link>
                    </div>
                </div>
            </div> */}
        </>
    )
}