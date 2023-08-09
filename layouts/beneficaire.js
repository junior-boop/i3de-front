'use client'

import Card_Beneficiate from "../composants/benef/benefice"
import Container from "../composants/container"
import {benef} from '../styles/style-e.module.css'

export default function Beneficiaire(){
    return(
        <>  
            <div className="vide" />
            <div className={`${benef} container-fluide mt-5`}>
                <div className="titre w-100 text-center py-5"> Bénéficiaires </div>
                <Container cName = {'flex pb-5 flex-wrap'} style = {{gap : 60, justifyContent : 'center'}}>
                    <Card_Beneficiate numerique={'05'} desc={`Les Établissements d'enseignement technique et Industriel du second cycle`} />
                    <Card_Beneficiate numerique={'55'} desc={`Les enseignants desdits établissements techniques`}  />
                    <Card_Beneficiate numerique={`+6K`} desc={`Les éleves des établissements ciblés`} />
                    <Card_Beneficiate numerique={'04'} desc={`Régions et les communautés éducatives régionales`} />
                </Container>
                
            </div>
        </>
    )
}




