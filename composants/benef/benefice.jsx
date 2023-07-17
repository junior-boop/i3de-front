import {card_Beneficiate} from '../../styles/style-e.module.css'

export default function Card_Beneficiate({numerique, desc}){
    return(
        <div className={`card_Beneficiate`}>
            <div className='numerique'>
                {numerique}
            </div>
            <div className='desc'>
                {desc}
            </div>
        </div>
    )
}