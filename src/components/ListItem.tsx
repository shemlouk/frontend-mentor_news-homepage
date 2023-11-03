function ListItem({ title, resume }: { title: string; resume: string }) {
  return (
    <li>
      <a href="#">
        <h2 className="text-xl font-bold text-offWhite mb-2">{title}</h2>
        <p>{resume}</p>
      </a>
    </li>
  );
}

export default ListItem;
