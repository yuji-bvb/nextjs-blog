export interface Props {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}

export interface TWITTER {
  statuses: {
    created_at: string
    id: number
    id_str: string
    text: string
    truncated: boolean
    entities: [Object]
    metadata: [Object]
    source: string
    in_reply_to_status_id: null
    in_reply_to_status_id_str: null
    in_reply_to_user_id: null
    in_reply_to_user_id_str: null
    in_reply_to_screen_name: null
    user: [Object]
    geo: null
    coordinates: null
    place: null
    contributors: null
    is_quote_status: boolean
    retweet_count: number
    favorite_count: number
    favorited: boolean
    retweeted: boolean
    possibly_sensitive: boolean
    lang: string
  }
}

export interface YUGIOH {
  data: [
    {
      id: 6983839
      name: string
      type: string
      desc: string
      atk: 2100
      def: 2000
      level: 4
      race: string
      attribute: string
      card_sets: [
        {
          set_name: string
          set_code: string
          set_rarity: string
          set_rarity_code: string
          set_price: string
        },
        {
          set_name: string
          set_code: string
          set_rarity: string
          set_rarity_code: string
          set_price: string
        }
      ]
      card_images: [
        {
          id: 6983839
          image_url: string
          image_url_small: string
        }
      ]
      card_prices: [
        {
          cardmarket_price: string
          tcgplayer_price: string
          ebay_price: string
          amazon_price: string
          coolstuffinc_price: string
        }
      ]
    }
  ]
}
