const services = [
    {id:1,name:'100% Automated',img:'./setting.svg'},
    {id:2,name:'Always free',img:'./free.svg'},
    {id:3,name:'24×7 service',img:'./24_7.svg'},
    {id:4,name:'All data is secured',img:'./mask_sign.svg'},
]
export default function Services(){
    return(
        <div className="flex gap-[17px]">
            {
                services.map(service=>(
                    <div key={service?.id} className="flex flex-col justify-center items-center transition-all duration-500 hover:translate-y-1 group cursor-pointer">
                        <img src={service?.img} alt={service?.name} className="w-[25px] h-[25px]" />
                        <p className="text-black font-400 text-[12px] md:text-[16px] text-center group-hover:text-[#D32F2F] group-hover:font-bold">{service?.name}</p>
                    </div>
                ))
            }
        </div>
    )
}