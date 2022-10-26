import Head from 'next/head'
import { useState } from 'react'
import CRCCard from '../src/components/card/crc-card'
import NewCRCCard from '../src/components/card/new-crc-card'
import { CRCCardType } from '../src/components/card/types'
import CircleButton from '../src/components/common/circle-button'
import Footer from '../src/components/common/footer'
import Header from '../src/components/common/header'

export default function Home() {
  const [cards, setCards] = useState<CRCCardType[]>([
    {
      id: '7468f8c6-8f31-491a-8ace-91bdadc5e99f',
      candidate: 'Screening',
      responsibilities: [
        'Knows about screening info',
        'Creates reservation info',
      ],
      collaborators: ['Movie'],
    },
  ])

  const [clickedNewBtn, setClickedNewBtn] = useState(false)

  const NewCRCCardButton = () => (
    <CircleButton text="+" onClick={() => setClickedNewBtn(true)} />
  )

  const CancelCRCButton = () => (
    <CircleButton
      backgroundColor="gray"
      text="X"
      onClick={() => setClickedNewBtn(false)}
    />
  )

  return (
    <div>
      <Head>
        <title>CRC Cardbook</title>
        <meta name="description" content="CRC Cardbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full h-[calc(100vh-8rem)] py-20 overflow-y-auto space-y-10">
        <div className="pb-20 space-y-20">
          {cards.map((card) => (
            <CRCCard key={card.id} card={card} />
          ))}
        </div>
        {clickedNewBtn && (
          <NewCRCCard
            onConfirm={(card: CRCCardType) => {
              setCards(cards.concat(card))
            }}
          />
        )}
        {!clickedNewBtn && <NewCRCCardButton />}
        {clickedNewBtn && <CancelCRCButton />}
      </main>
      <Footer />
    </div>
  )
}
