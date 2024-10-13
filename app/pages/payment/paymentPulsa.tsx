import { router } from "expo-router";
import Payment from "./payment";

export default function PaymentPulsaPage() {
    return (
        <Payment
        logo={require("@/assets/images/telkomsel.png")}
        date={"Payment on Oct 10, 2024"}
        title={"Paket Data"}
        amount={"10000"} 
        totalPayment={"Rp. 11.500"}
        onPress={() => router.navigate("/pages/success/successPulsa")}
        />
    );
}