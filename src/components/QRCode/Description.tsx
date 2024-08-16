import {ReactNode} from "react";

type DescriptionProps = {
    children?: ReactNode;
    className: string;
}

export default function Description({children, className}: DescriptionProps): JSX.Element {
    return (<section className={className}>
        {children}
    </section>)
}