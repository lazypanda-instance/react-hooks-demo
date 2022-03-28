import { memo } from "react";


type Props = {
    handler: (event: any) => void
}

const ChildUseCallback = ({handler}: Props) => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log('Child component rendered');

    return (
        <ul>
        {
            items.map((item, index) => (
                <li key={index} onClick={handler}>{item}</li>
            ))
        }
        </ul>
    );
}

export default memo(ChildUseCallback);