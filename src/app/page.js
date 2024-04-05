import List from "./components/List";
import fetchBankList from "../app/libs/getBankList";

export default async function Home() {
  const bankData = await fetchBankList();
  return (
    <div className="text-center mt-20">
      <List bankData={bankData}/>
    </div>
  );
}
