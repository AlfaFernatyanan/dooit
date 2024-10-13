import Success from "./success";


export default function SuccessListrikPage() {
    return (
        <Success
            description={"Listrik Prabayar"}
            paymentAmount={"20.000"}
            operatorDescription={"Your Token"}
            icon={require("@/assets/icons/listrikicon.png")}
            operatorText={"1234 7863 0291 0291"}
            secondTitle={"Oct, 7 2024 - 3:02 PM"}
        />
    );
}