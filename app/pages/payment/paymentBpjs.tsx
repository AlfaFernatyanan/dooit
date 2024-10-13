import { router } from "expo-router";
import Payment from "./payment";

export default function PaymentListrikPage() {
    return (
        <Payment
        logo={require("@/assets/images/bpjsgroup.png")}
        date={"Payment on Oct 10, 2024"}
        title={"Listrik Prabayar"}
        amount={"20.000"} 
        totalPayment={"Rp. 20.000"}
        onPress={() => router.navigate("/pages/success/successBpjs")}
        />
    );
}