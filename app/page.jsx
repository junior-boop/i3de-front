"use client"

import Beneficiaire from '@/layouts/beneficaire'
import Cible from '@/layouts/cible'
import Header from '@/layouts/header'
import Mission from '@/layouts/mission'
import Objectifs from '@/layouts/objectifs'
import PrincipalCible from '@/layouts/partenaire'
import Partenaire from '@/layouts/partenaires'
// import Principal from '@/layouts/principe'
import Services from '@/layouts/services'
import Testimony from '@/layouts/temoignage'

import dynamic from 'next/dynamic'

const Principal = dynamic(() => import("@/layouts/principe"), {ssr : false })

export default function Home() {
  return (
    <div>      
      <Header />
      <Mission />
      <Beneficiaire />
      <Objectifs />
      <Cible />
      {/* <Principal /> */}
      <PrincipalCible />
      <Services />
      <Testimony /> 
      <Partenaire />
    </div>
  )
}
