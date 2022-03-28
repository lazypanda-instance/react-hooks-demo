import Head from "next/head";
import { useMemo, useState } from "react";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const MemoUseMemo = () => {

    const [factorial, setFactorial] = useState<number>(0);
    const [numberUpTo, setNumberUpTo] = useState<number>(1);

    const getFactorial = (num: number): number => {
        if (num <= 0) {
            return 1;
        }

        return num * getFactorial(num - 1);
    }

    const factorialValue = useMemo(() => {
        return getFactorial(numberUpTo);
    }, [numberUpTo]);

    const reRenderValue = () => {
        setFactorial(factorialValue);
    }

    const onChange = (event: any) => {
        setNumberUpTo(Number(event.target.value));
    }


    return (
        <Layout>
            <Head>
                <title>Next js useState explanation</title>
            </Head>
            <Container>
                <div className="flex justify-between p-3">
                    <div className="w-1/2 border p-4">
                        <p className="underline underline-offset-4">Memo</p>

                    </div>

                    <div className="w-1/2 border p-4">
                        <p className="underline underline-offset-4">Using useMemo hook</p>

                        <div className="flex flex-row">
                            <p className="p-4">Factorial value:  </p>
                            <input className="border h-8 mt-3" type="number" value={numberUpTo} onChange={onChange}></input>
                        </div>
                        <p className="p-4">is = {factorialValue}</p>
                        
                        <div className="pt-3">
                            <button className="bg-[#1da1f2] text-white rounded-full p-2" onClick={reRenderValue}>Re-render</button>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default MemoUseMemo;