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
      <a
        href="#"
        className="group flex gap-5 md:h-full md:flex-col lg:flex-row"
      >
        <img
          className="h-32 lg:h-full lg:w-32 md:object-cover"
          src={imageSource}
          alt={imageAlt}
        />
        <div className="flex flex-col justify-between flex-1">
          <span className="text-3xl text-grayishBlue font-bold">{index}</span>
          <h3 className="font-extrabold text-lg group-hover:text-softRed transition-colors">
            {title}
          </h3>
          <p className="text-darkGrayishBlue overflow-y-hidden">{resume}</p>
        </div>
      </a>
    </li>
  );
}

export default ListCard;
