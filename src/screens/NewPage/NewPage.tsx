import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useState } from "react";

export const NewPage = (): JSX.Element => {


    const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
  const [selected, setSelected] = useState<string | null>(null);


  return (
    <main className="flex flex-col h-[844px] w-full max-w-[390px] mx-auto bg-[#e6ebf0]">
    
        <h1 className="font-['Poppins',Helvetica] font-bold text-[#2E3B42] text-[32px] text-center tracking-[0.50px] leading-8 mt-[60px]">
          Question 1
        </h1>
       


      <section className="flex flex-col items-center px-4 mt-10">
        <h2 className="font-['Poppins',Helvetica] font-regular text-[#2E3B42] text-[18px] text-center tracking-[0.10px] leading-[31px] max-w-[369px]">
          Do you make assumptions about a person's health, lifestyle, or character based on their body size?
        </h2>

	 <div className="flex flex-col items-center py-8 gap-4">
      {options.map((option) => (
       <Button
    key={option}
    /* 1️⃣  Toggle: pick → unpick → pick another */
    onClick={() => setSelected(prev => (prev === option ? null : option))}


    className={`w-[305px] h-[55px] rounded-[32px] border-[2px]
      font-['Poppins',Helvetica] font-medium text-[24px] tracking-[0.48px]
      ${
        selected === option
          ? "bg-[#f89725] text-white "
          : "bg-white text-black border-[#f89725]  hover:text-white"
      }
      ${selected !== null && selected !== option ? "opacity-40 cursor-not-allowed" : ""}
    `}
  >
    {option}
  </Button>
))}
    </div>
				
  {/* Sixth button with 80px gap above */}
 <Link to="/question-two">
  <Button className="mt-[30px] w-[205px] h-[49px] bg-[#f89725] rounded-[25px] border font-['Poppins',Helvetica] font-semibold text-black text-base tracking-[0.48px] hover:bg-[#e88615]">
    Next
  </Button>
</Link>


   

      </section>
    </main>
  );
};
