import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(import("./Header"));
const Navbar = dynamic(import("./Navbar"));
const Footer = dynamic(import("./Footer"));

const Layout = (props) => {

    return (
        <>
            <Header
                title={props.title}
                des={props.des}
                can={props.can}
                image={props.image}
                />
            <header>
                <Navbar />
            </header>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    )

}

export default Layout