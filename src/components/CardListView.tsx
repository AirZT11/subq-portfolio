import React from "react"
import CardView from "./CardView"

export interface CardProps {
  artist: string
  audio?: string
  credits: string
  id: string
  image?: string
  title: string
  type: string
  video?: string
}

export interface CardListViewProps {
  data: CardProps[]
}

export default function CardListView(data: CardListViewProps) {
  const cards = data.data
  return (
    <>
      {cards.map(card => (
        <CardView key={card.id} cardData={card} />
      ))}
    </>
  )
}
