
import clsx from "clsx";

const Toggle =(props)=> {

    const {enable,status} = props;


    return(
        <div className="outerContainer flex justify-center">

<div className="w-full flex max-w-2xl p-2 m-2">
            <div className={clsx("",status ? "text-white":"text-black")}>Toggle Me</div>
            <div
            onClick={()=>enable(!status)}
            className={clsx("ml-1 w-16 flex rounded-full border-neutral-500" , status ? " bg-stone-100 border justify-start" : " bg-stone-800 border justify-end" )}>
                <div className="w-[20px] h-[20px] rounded-full bg-green-500" ></div>
            </div>

        </div>

        </div>
      
    );
};

export default Toggle;