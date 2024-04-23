export const AppLink = (props) => {
  const { title, href, onClick } = props;

  return (
    <>
      {href && (
        <a className="app-link" href={href}>
          {title}
        </a>
      )}
      {onClick && (
        <div className="app-link" onClick={onClick}>
          {title}
        </div>
      )}
    </>
  );
};
