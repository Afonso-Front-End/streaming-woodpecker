import { Outlet } from "react-router-dom";
import "./Layout.css"

import Emphasis from "../components/emphasis/Emphasis";
import MediaGallery from "../components/MediaGallery/MediaGallery";

const Layout = () => {
    return (
        <div className="container">
            <div className="content">
                <Emphasis />
                <MediaGallery />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;