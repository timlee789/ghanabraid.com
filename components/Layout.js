import Head from 'next/head'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Beauty Elements Event</title>
        <meta name="description" content="Bijoux Hair Giveaway Event" />
        <link rel="image_src" href="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg" />     
        <meta property="og:title" content="Bijoux Hair Giveaway Event" />    
        <meta property="og:image" content="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg"/>
        <meta property="og:description" content="Bijoux Hair Giveaway Event"/>
        <meta property="og:site_name" content="Beauty Elements"/>  
        </Head>
        <main>
            {children}
        </main>
    </div>
  )
}
