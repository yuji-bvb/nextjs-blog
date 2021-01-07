import { TwitterClient, Search } from "twitter-api-client";

const twitterClient = new TwitterClient({
  apiKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
  apiSecret: `${process.env.NEXT_PUBLIC_API_SECRETKEY}`,
  accessToken: `${process.env.NEXT_PUBLIC_ACCESS}`,
  accessTokenSecret: `${process.env.NEXT_PUBLIC_SECRETACCESS}`,
  ttl: 120,
  disableCache: true,
  maxByteSize: 32000000,
});

export async function getTweet() {
  try {
    const data: Search = await twitterClient.tweets.search({
      q: "#IT_KINGDOM",
    });
    return data;
  } catch (error) {
    console.error("There was an error retrieving tweets", error);
  }
}
