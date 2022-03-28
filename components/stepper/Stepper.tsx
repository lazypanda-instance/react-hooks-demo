import { ReactNode } from "react";

export interface IStep {
    stepNo: number,
    title: string;
}

type Props = {
    children: ReactNode,
    steps: IStep[],
    stepShow: boolean,
    activeStep: string
}

const Stepper = (props: Props) => {
    return (
        <div>
            
        </div>
    );
};

export default Stepper;