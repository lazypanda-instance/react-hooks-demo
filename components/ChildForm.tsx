import { ChangeEvent, forwardRef, Ref, useImperativeHandle, useState } from "react";

type Props = {
    company: string
}
interface IEmployeeForm {
    name: string;
    role: string;
}

export interface IFormRef {
    submit: () => void,
    cancel: () => void
}

const ChildForm = forwardRef((props: Props, ref: Ref<IFormRef>) => {
    console.log('Child component render');

    const [employee, setEmployee] = useState<IEmployeeForm>({
        name: '',
        role: ''
    });

    useImperativeHandle(ref, () => ({
        submit: () => {
            console.log('Submit called, ', employee);
        },
        cancel: () => {
            console.log('Cancel called');
        }
    }));

    const handleChange = (event: ChangeEvent<HTMLInputElement>, type: string) => {
        if (type === 'name') {
            setEmployee({
                ...employee,
                name: event.target.value
            });
        } else {
            setEmployee({
                ...employee,
                role: event.target.value
            });
        }
    }

    return (
        <div className="border p-3">
            <div className="m-2 underline underline-offset-4">Child Component</div>
            <div className="flex flex-col m-2">
                <label htmlFor="name">Name: </label>
                <input type="text" 
                        className="border" 
                        name="name" 
                        autoComplete="name" 
                        value={employee?.name} 
                        onChange={(event) => handleChange(event, 'name')}></input>

                <label htmlFor="role">Role:</label>
                <input type="text" 
                        className="border" 
                        name="role" 
                        value={employee?.role}
                        onChange={(event) => handleChange(event, 'role')}></input>

                <label htmlFor="company">Company Name: {props?.company}</label>
            </div>
        </div>
    );
})

export default ChildForm;