export default async function fetchBankList() {
  const response = await fetch(
    "https://dev.obtenmas.com/catom/api/challenge/banks"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch bank list");
  }

  return await response.json();
}
