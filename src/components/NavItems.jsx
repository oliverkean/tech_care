import Link from './Link';
function NavItems({ links }) {
  return (
    <ul className="flex">
      {links.map((links, index) => (
        <li key={index}>
          <Link name={links.name} icon={links.icon} />
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
