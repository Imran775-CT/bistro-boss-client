

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className=" text-yellow-600 italic text-center">---{subHeading}---</p>
            <h1 className="text-center text-3xl uppercase border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;