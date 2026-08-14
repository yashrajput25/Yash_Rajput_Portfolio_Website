import Amity from "../assets/amity.jpeg"

const Card = ({year, degree, college, location, link}) => {
    return (

            <div className="md:flex 
            font-poppins
            border-2 border-gray-200 justify-between rounded-4xl items-center mx-[100px] my-[50px] shadow-md transition duration-300 hover:shadow-xl hover:shadow-[#000000]">

                <div className="feducation-details flex flex-col gap-[20px] px-[50px] py-[50px]" >
                    <h1 className="font-semibold md:text-6xl text-4xl">{year}</h1>
                    <h2 className="md:text-5xl text-3xl">{degree}</h2>
                    <h3 className="md:text-4xl text-2xl">{college}</h3>
                    <h4 className="md:text-3xl text-xl">{location}</h4>
                </div>

                <div className="education-image-container md:w-[600px]">
                    <img className="rounded-4xl p-[20px]" src={link} alt="" />
                </div>

            </div>

    );
}


// const Card = () => {
//     return (

//             <div className="md:flex 
//             font-poppins
//             border-2 border-gray-200 rounded-4xl items-center m-[50px]">

//                 <div className="education-details flex flex-col gap-[20px] px-[20px]" >
//                     <h1 className="md:text-7xl text-4xl">2024-2026</h1>
//                     <h2 className="text-6xl">M.Tech in Computer Science</h2>
//                     <h3 className="text-5xl">Amity School of Engineering & Technology</h3>
//                     <h4 className="text-4xl">Noida</h4>
//                 </div>

//                 <div className="education-image-container">
//                     <img className="rounded-4xl p-[20px]" src={Amity} alt="" />
//                 </div>

//             </div>

//     );
// }


export default Card;