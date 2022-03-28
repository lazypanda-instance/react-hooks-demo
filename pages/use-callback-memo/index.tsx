import Head from "next/head";
import { useCallback, useState } from "react";
import ChildUseCallback from "../../components/ChildUseCallback";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const UseCallbackHook = () => {
    const [clicked, setClicked] = useState(false);
    const [child, setChild] = useState('');

    console.log('Parent component rendered');

    const stateClickHandler = () => {
        setClicked(!clicked);
    }

    const handler = useCallback((event) => {
        console.log("You clicked ", event.currentTarget);
        setChild(event.currentTarget.innerText);
    }, []);

    return (
        <Layout>
            <Head>
                <title>Next js useState explanation</title>
            </Head>
            <Container>
                <div className="flex justify-between p-3">
                    <div className="w-1/2 border p-4">
                        <p className="underline underline-offset-4">Parent componet</p>

                        <div>Child component value: {child}</div>

                        <button className="bg-[#1da1f2] text-white m-4 p-2" onClick={stateClickHandler}>Click</button>
                        <div>I am clicked: {clicked.toString()}</div>
                    </div>

                    <div className="w-1/2 border p-4">
                        <p className="underline underline-offset-4" >Child Component</p>
                        <ChildUseCallback handler={handler} />
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default UseCallbackHook;