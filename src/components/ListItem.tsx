function ListItem({ title, resume }: { title: string; resume: string }) {
  return (
    <li>
      <a href="#" className="group">
        <h2 className="text-xl group-hover:text-softOrange transition-colors font-bold text-offWhite mb-2">
          {title}
        </h2>
        <p>{resume}</p>
      </a>
    </li>
  );
}

export default ListItem;
