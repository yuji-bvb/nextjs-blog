import fetch from "node-fetch";
const apiUrl = "https://db.ygoprodeck.com/api/v7/randomcard.php";

export async function getRandomCardData() {
  const res = await fetch(new URL(apiUrl));
  const card = await res.json();
  return card;
}
