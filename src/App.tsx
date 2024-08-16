import QRCode from "./components/QRCode/QRCode.tsx";
import {ReactElement} from "react";

export default function App(): ReactElement {
    return (
        <>
            <QRCode QRCodeSrc='images/image-qr-code.png'/>
        </>
    )
}

