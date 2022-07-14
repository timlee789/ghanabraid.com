import React from 'react'
import Head from 'next/head'
function layout({children}) {
  return (
    <div>
    <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>3X Ghana Braid Giveaway Event</title>
        <meta name="description" content="3X Ghana Braid Giveaway Event" />
        <link rel="image_src" href="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg" />     
        <meta property="og:title" content="3X Ghana Braid Giveaway Event" />    
        <meta property="og:image" content="https://bijouxhair.com/tim/landing2/3xghanaphoto6.jpg"/>
        <meta property="og:description" content="3X Ghana Braid Giveaway Event"/>
        <meta property="og:site_name" content="Beauty Elements"/> 
    </Head>
    
        {children}
    
    </div>
  )
}

export default layout