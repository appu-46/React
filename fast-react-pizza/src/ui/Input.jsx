function Input({ placeholder, onChange, value, type, className }) {
  const styles =
    "w-full px-4 py-2 text-sm duration-300 border rounded-full border-stone-300 tranistion-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400";

  console.log(onChange);
  return (
    <>
      <input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} ${styles}`}
      />
    </>
  );
}

export default Input;
