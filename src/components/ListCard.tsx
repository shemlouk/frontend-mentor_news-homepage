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
    <li className="md:flex-1">
      <a href="#" className="group flex gap-5 md:max-h-36">
        <img className="h-32 md:h-36" src={imageSource} alt={imageAlt} />
        <div className="flex flex-col justify-between flex-1">
          <span className="text-3xl text-grayishBlue font-bold">{index}</span>
          <h3 className="font-extrabold text-lg group-hover:text-softRed transition-colors">
            {title}
          </h3>
          <p className="text-darkGrayishBlue line-clamp-2">{resume}</p>
        </div>
      </a>
    </li>
  );
}

export default ListCard;
