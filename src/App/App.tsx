import QRCode from "./QRCode.tsx";
import {ReactElement} from "react";

export default function App(): ReactElement {
    const QRCodeSrc: string = './src/assets/images/image-qr-code.png';

    return (
        <main className={'center-grid'}>
            <QRCode QRCodeSrc={QRCodeSrc}/>
        </main>
    )
}

