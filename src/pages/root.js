import { Outlet, Link } from 'react-router-dom'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import ScrollToTop from '../components/ScrollToTop'

export default function Root() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
            <div className="container bg-light mw-100 links pb-3 shadow" style={{ "zIndex": "1", "transform": "translateZ(0)", "position": "relative" }}>
                <div className="row py-5 px-5">
                    <div className="col d-flex flex-column column">
                        <Link to={`/`}>@ 2022 OnlyFams</Link>
                        <Link to={`contact`}>Contact</Link>
                        <div>
                            <i className="mx-2"><BsInstagram /></i>
                            <i className="mx-2"><BsTwitter /></i>
                        </div>
                        <hr className="m-0 my-2 bg-primary" style={{ "width": "80px" }} />
                        <a href="/#">Language</a>
                    </div>
                    <div className="col d-flex flex-column column">
                        <Link to={`help`}>Help</Link>
                        <Link to={`how`}>how it works</Link>
                        <Link to={`terms#complaints`}>Complaints Policy</Link>
                        <Link to={`contract`}>Stardard Contract between Fan and Creator</Link>
                    </div>
                    <div className="col d-flex flex-column column">
                        <Link to={`about`}>About</Link>
                        <Link to={`store`} target="_blank">Store</Link>
                        <Link to={`cookie`}>Cookie Notice</Link>
                        <Link to={`safety`}>OnlyFams Safety & Transparency Center</Link>
                    </div>
                    <div className="col d-flex flex-column column">
                        <Link to={`blog`} target="_blank">Blog</Link>
                        <Link to={`terms`}>Terms of Service</Link>
                        <Link to={`dmca`}>DMCA</Link>
                        <Link to={`slavery`}>Anti-Slavery & Anti-Trafficking Statement</Link>
                    </div>
                    <div className="col d-flex flex-column column">
                        <Link to={`branding`}>Branding</Link>
                        <Link to={`privacy`}>Privacy</Link>
                        <Link to={`usc`}>USC 2257</Link>
                        <Link to={`terms#policy`}>Acceptable Use Policy</Link>
                    </div>
                </div>
            </div>
        </>
    )
}