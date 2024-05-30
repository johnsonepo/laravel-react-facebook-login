import { useStateContext } from "../context/ContextProvider"

export default function Logo({ className}) {
    const {isMobile} = useStateContext()
    const mSRC = '../../public/img/facebook_logo.svg'
    const lSRC = '../../public/img/l_logo.svg'
    return (
            <div className={`grid ${className}`}>
               { isMobile ? <img className="w-[3.8rem]" src= {mSRC} alt=""/> : <img className="w-[13rem]" src={lSRC} alt=""/>}
            </div>
    )
}

