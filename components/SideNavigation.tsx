import Link from "next/link";
import { Constant } from "./constants/Constant";

const SideNavigation = () => {
    const navigations = Constant.navigation;
    return (
        <div className="basis-1/2 md:basis-1/4 full-height border">
            <ul className="list-outside">
                {
                    navigations.map((item, index) => (
                        
                            <li className="h-12 border-b flex flex-row items-center" key={index}>
                                <Link href={item.URL}>
                                    <span className="pl-4">{item.title}</span>
                                </Link>
                            </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SideNavigation;