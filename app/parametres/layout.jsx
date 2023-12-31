import '../globals.css'
import './styles.css'
import '../../styles/style_base.css'

import styles from '@/styles/style-e.module.css'

import Link from "next/link";
import Container from "../../composants/container";
import Bannier from "../../layouts/bannier";

export const metadata = {
  title: 'I3DE',
  description: 'Generated by create next app',
  // script : "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
}

export default function RootLayout({ children }) {
 
  return (
          <div id='ressource' style={{ padding : 0}}>
            <Bannier name={'Paramettres'} />
            <div className='vide'></div>
            <Container>
            <div className="ressource">
                        <div className="option">
                            <div>
                                <ListElement url={'/parametres/profils'} titre = 'Profils' />
                                <ListElement url={'/parametres/activites'} titre = 'Activités'/>
                            </div>

                        </div>
                        {children}
                    </div>
            </Container>
            <div className='vide'></div>
          </div>
  )
}



function ListElement({titre, url}){
    return(
        <Link href = {url} className={`listeElement hover:bg-slate-100 px-3 rounded-md`}>
           {titre}
        </Link>
    )
}