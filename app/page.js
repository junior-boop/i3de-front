'use client';

import Beneficiaire from '@/layouts/beneficaire'
import Cible from '@/layouts/cible'
import Header from '@/layouts/header'
import Mission from '@/layouts/mission'
import Objectifs from '@/layouts/objectifs'
import Partenaire from '@/layouts/partenaires'
import Principal from '@/layouts/principe'
import Services from '@/layouts/services'
import Testimony from '@/layouts/temoignage'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        
        <title>I3DE </title>
      </Head>
      
      <Header />
      <Mission />
      <Beneficiaire />
      <Objectifs />
      <Cible />
      <Principal />
      <Services />
      <Testimony /> 
      <Partenaire />
    </div>
  )
}
