const Navigator = () => {
  return (
    <div className="my-2">
      <ul className="flex flex-row justify-around text-md font-semibold">
        <li className="hover:text-shadow-md hover: cursor-pointer">Welcome</li>
        <li className="hover:text-shadow-md hover: cursor-pointer">Blog</li>
        <li className="hover:text-shadow-md hover: cursor-pointer">About</li>
        <li className="hover:text-shadow-md hover: cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navigator;
