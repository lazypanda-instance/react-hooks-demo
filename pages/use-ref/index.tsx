
import Head from "next/head";
import { ChangeEvent, useRef, useState, MouseEvent, FormEvent } from "react";
import ChildForm, { IFormRef } from "../../components/ChildForm";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const UseRef = () => {
    const employeeFormRef = useRef<IFormRef>(null);
    const [company] = useState(['ABC', 'XYZ', '123', '555']);
    const [selectCompany, setSelectCompany] = useState(company[0]);

    console.log('Parent component render');

    const changeSelectedCompany = (event: ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setSelectCompany(event.target.value);
    }

    const submitEmployeeForm = (event: FormEvent<HTMLFormElement>) => {
        if (employeeFormRef.current) {
            employeeFormRef.current.submit();
        }

        event.preventDefault();
    }

    const resetForm = (event: MouseEvent<HTMLButtonElement>) => {
        if (employeeFormRef.current) {
            employeeFormRef.current.cancel();
        }

        event.preventDefault();
    }

    return (
        <Layout>
            <Head>
                <title>Next js React hooks explanation</title>
            </Head>
            <Container>
                <div className="flex justify-center p-3">
                    <div className="w-1/2 border p-4">
                        <div className="underline underline-offset-4">Parent Component</div>
                        <form name="employee_form" onSubmit={submitEmployeeForm}>
                            <label htmlFor="company_name">Company Name</label>
                            <select name="company_name"
                                className="border m-4 px-2"
                                value={selectCompany}
                                onChange={changeSelectedCompany}>
                                {company.map((item: string, index: number) => (
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </select>

                            <ChildForm ref={employeeFormRef} company={selectCompany}></ChildForm>

                            <button className="bg-[#1da1f2] text-white rounded-full p-2 px-4 m-4" onClick={resetForm}>Clear</button>
                            <button type="submit" className="bg-[#1da1f2] text-white rounded-full p-2 px-4 m-4">Register</button>
                        </form>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default UseRef;