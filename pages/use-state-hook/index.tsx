import Head from "next/head";
import { useState } from "react";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const UseStateHook = () => {

    let count = 0;
    const [stateCount, setStateCount] = useState(0);

    const stateVariableCount = () => {
        setStateCount(stateCount + 1);
        console.log('stateCount: ', stateCount);
    }

    const variableCount = () => {
        count++;
        console.log('Count: ', count);
    }


    return (
        <Layout>
            <Head>
                <title>Next js useState explanation</title>
            </Head>
            <Container>
                <div className="flex justify-between p-3">
                    <div className="w-1/2 border p-4">
                        <p className="underline underline-offset-4">Using simple variable</p>
                        <p className="py-4">Count: {count}</p>
                        <div className="pt-3">
                            <button className="bg-[#1da1f2] text-white rounded-full p-2" onClick={() => variableCount()}>Increase +1</button>
                        </div>
                    </div>

                    <div className="w-1/2 border p-4">
                        <p className="underline underline-offset-4">Using State variable</p>
                        <p className="py-4">Count: {stateCount}</p>
                        <div className="pt-3">
                            <button className="bg-[#1da1f2] text-white rounded-full p-2" onClick={() => stateVariableCount()}>Increase +1</button>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default UseStateHook;