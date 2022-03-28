import Head from "next/head";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const UseEffect = () => {

    let count = 0;
    const [stateCount, setStateCount] = useState(0);
    const [countries, setCountries] = useState<Array<any>>([]);

    const stateVariableCount = () => {
        setStateCount(stateCount + 1);
        console.log('stateCount: ', stateCount);
    }

    const variableCount = () => {
        count++;
        console.log('Count: ', count);
    }

    useEffect(() => {
        console.log('Execute all time, as there are no dependency');
        count = 0;
        console.log('class Variable (no dependency): ', count);
        console.log('state Variable (no dependency): ', stateCount);
    });

    useEffect(() => {
        /**
         * This code will execute only once - as dependency set on class variable
         */
        console.log('class variable has updated');
        console.log('class Variable (with class variable dependency): ', count);
    }, [count]);

    useEffect(() => {
        /**
         * This code will execute everytime - when we made any change on state variable
         */
         console.log('state variable has updated');
         console.log('state Variable (with state variable dependency): ', stateCount);

    }, [stateCount]);

    useEffect(() => {
        /**
         * this code will execute all time when ever - any of variable update
         */
         console.log('class variable has updated');
         console.log('class Variable (with class & state variable dependency): ', count);
         console.log('state variable has updated');
         console.log('state Variable (with class & state variable dependency): ', stateCount);
    }, [count, stateCount]);

    useEffect(() => {
         const getAllCountries = async () => {
            let allCountry = await fetch('https://restcountries.com/v3.1/all');
            let response: Array<any> = await allCountry.json();
            if (response) {
                setCountries(response);
            }
        }

        getAllCountries();
            
    }, []);



    return (
        <Layout>
        <Head>
            <title>Next js useEffect explanation</title>
        </Head>
        <Container>
            <div className="flex justify-between p-3">
                <div className="w-1/2 border p-4">
                    <p className="underline underline-offset-4">Using class variable - useEffect</p>
                    <p className="py-4">Count: {count}</p>
                    <div className="pt-3">
                        <button className="bg-[#1da1f2] text-white rounded-full p-2" onClick={() => variableCount()}>Increase +1</button>
                    </div>
                </div>

                <div className="w-1/2 border p-4">
                    <p className="underline underline-offset-4">Using State variable - useEffect</p>
                    <p className="py-4">Count: {stateCount}</p>
                    <div className="pt-3">
                        <button className="bg-[#1da1f2] text-white rounded-full p-2" onClick={() => stateVariableCount()}>Increase +1</button>
                    </div>
                </div>

                <div className="w-1/2 border p-4">
                    <p className="underline underline-offset-4">API call using - useEffect</p>
                    <ul className="h-64 overflow-scroll">
                        {countries.map((country: any, index: number) => (
                            <li key={index}>{country?.name?.common}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    </Layout>
    );
}

export default UseEffect;