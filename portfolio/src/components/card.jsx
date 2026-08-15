const Card = ({year, degree, college, location, link}) => {
    return (

            <div className="
            md:flex font-poppins
            border-2 border-gray-200 justify-between rounded-4xl 
            items-center shadow-md transition 
            duration-300 hover:shadow-xl">

                <div className="education-details-container flex flex-col 
                md:gap-3 md:px-12.5 md:py-12.5
                gap-3.75 px-6.25 py-10" >

                    <div className="bg-blue-50 w-fit rounded-4xl">
                        <h1 className="text-sm font-semibold md:text-2xl px-4 py-1.5 text-blue-600">{year}</h1>
                    </div>
                    
                    <h2 className="md:text-4xl text-3xl font-bold">{degree}</h2>
                    <h3 className="md:text-3xl text-2xl">{college}</h3>
                    <h4 className="md:text-2xl text-xl">{location}</h4>
                </div>

                <div className="education-image-container md:w-150">
                    <img className="rounded-4xl p-5 transition-transform duration-500 hover:scale-105" src={link} alt="" />
                </div>

            </div>

    );
}


export default Card;