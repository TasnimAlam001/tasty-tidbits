
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="mx-auto w-fit text-center mb-8 mt-16">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h2 className="text-4xl uppercase border-y-4 py-3">{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;