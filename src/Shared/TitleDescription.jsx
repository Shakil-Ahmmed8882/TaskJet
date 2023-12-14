

const TitleDescription = ({title,description}) => {
      return (
            <div>
                  <h1 className="text-5xl font-bold text-center">{title}</h1>
                  <p>{description}</p>
            </div>
      );
};

export default TitleDescription;