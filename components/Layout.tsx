import Meta from "./Meta";
import Navigation from "./Navigation";

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Meta></Meta>
            <Navigation></Navigation>
            <div>
                <main>{children}</main>
            </div>
        </>
    );
}

export default Layout;