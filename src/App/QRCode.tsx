import Description from "./Description.tsx"
import {FC} from "react";

type QRCodeTypes = {
    QRCodeSrc: string;
}

const QRCode: FC<QRCodeTypes> = ({QRCodeSrc}) => {
    return (
        <article className="qr-code">
            <img className="qr-code__image" src={QRCodeSrc} alt="QR Code"/>
            <Description className="qr-code__text">
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </Description>
        </article>
    )
}

export default QRCode;