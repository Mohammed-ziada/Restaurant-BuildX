import hero_image from '../../../assets/hero_image.png'

export const Hero = ()=>{
    return (
      <div className="grid grid-cols-2  mx-auto max-h-[85vh] ">
        
        {/* Text Section */}
        <div className="space-y-6 pl-10 flex flex-col gap-20 justify-center-safe">
          <div className="text-6xl leading-tight font-bold">
            <h1 className="text-[#C9D6A0]">From Our Kitchen to</h1>
            <h1 className="text-[#233000]">Your Heart</h1>
          </div>

          <p className="text-white text-xl max-w-[500px]">
            “Experience the perfect blend of fresh ingredients, authentic flavors, and a cozy atmosphere a place where every meal becomes a memory.”
          </p>

          <button className="uppercase text-white bg-gradient-to-r from-[#233000] to-[#C9D6A0] px-6 py-2 rounded-sm shadow-lg">
            Book Table
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src={hero_image} 
            alt="Restaurant" 
            className="w-full max-h-[70%] rounded-md shadow-2xl"
          />
        </div>

      </div>
    )
}
