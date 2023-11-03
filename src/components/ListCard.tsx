type ListCardProps = {
  imageSource: string;
  imageAlt: string;
  index: string;
  title: string;
  resume: string;
};

function ListCard({
  imageSource,
  imageAlt,
  index,
  title,
  resume,
}: ListCardProps) {
  return (
    <li>
      <a href="#" className="flex gap-5">
        <img className="h-32" src={imageSource} alt={imageAlt} />
        <div className="flex flex-col justify-between flex-1">
          <span className="text-3xl text-grayishBlue font-bold">{index}</span>
          <h3 className="font-extrabold text-lg">{title}</h3>
          <p className="text-darkGrayishBlue">{resume}</p>
        </div>
      </a>
    </li>
  );
}

export default ListCard;