import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children, title, description, keywords, author}) => {
    return (<div>
        <Helmet>
            <div>
                <meta charSet="UTF-8"/>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="author" content={author}/>
            </div>

            <title>{title}</title>
        </Helmet>
        <Header/>
        <main style={{minHeight: "86vh"}}>
            <ToastContainer />
            {children}
        </main>
        <Footer/>
    </div>);
};
Layout.defaultProps = {
    title: "Ecommerce App",
    description: "MERN stack project",
    keywords: "Mern, React, NodeJs, Mongodb",
    author: "dev.anhdq"
}
export default Layout;
