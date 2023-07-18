const Badge = ({ bigger, icon, name }) => {
  return (
    <div
      className={`border border-black bg-white text-${
        bigger ? `lg` : `xs`
      } rounded-full w-fit h-fit px-2 font-medium ${
        bigger && `flex items-center gap-1`
      }`}
    >
      {bigger && icon}
      <p>{name}</p>
    </div>
  );
};

export default Badge;
