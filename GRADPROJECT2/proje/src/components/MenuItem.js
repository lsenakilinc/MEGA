function MenuItem({ image, name, content, application }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ fontSize: "30px" }}>{name}</h1>
      <h6 style={{ fontSize: "15px" }}>{content}</h6>
    </div>
  );
}

export default MenuItem;
