import RegisterForm from "./RegisterForm";

export default function RegistrationFormSection(){
    return(
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 p-10">
            <div className="col-span-2">
                <RegisterForm/>
            </div>
            <div>
                <img src="./blood3.svg" alt="" />
            </div>
        </div>
    )
}