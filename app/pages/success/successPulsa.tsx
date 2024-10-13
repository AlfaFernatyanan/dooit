import Success from "./success";


export default function SuccessPulsaPage() {
    return (
        <Success
            description={"Paket Data Telkomsel"}
            paymentAmount={"11.600"}
            operatorDescription={"Payment for"}
            icon={require("@/assets/images/telkomsel.png")}
            operatorText={"Paket Data 10000"}
            secondTitle={"Oct, 7 2024 - 3:02 PM"}
        />
    );
}