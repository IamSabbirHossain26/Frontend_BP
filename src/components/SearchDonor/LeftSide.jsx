export default function LeftSide({src}){
    return(
        <div className="hidden md:block pl-10">
            {/* <img src="./searchMan.svg" alt="search man"/> */}
            {/* <img src={src} alt="search man" className="w-[250px] md:w-[693px] h-[250px] md:h-[693px] md:scale-200 -z-10"/> */}
            {/* <img src={src} alt="search man" className=""/> */}
            <img src={src} alt="search man" className="transform scale-x-[-1]" />

        </div>
    )
}