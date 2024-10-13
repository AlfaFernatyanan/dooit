import Success from "./success";


export default function SuccessBpjsPage() {
    return (
        <Success
            description={"BPJS Kesehatan"}
            paymentAmount={"100.000"}
            operatorDescription={"Payment for"}
            icon={require("@/assets/icons/bpjsicon.png")}
            operatorText={"1234 7863 0291 0291"}
            secondTitle={"ID Pelanggan"}
        />
    );
}