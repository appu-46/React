function Input({ placeholder, onChange, value, type, className }) {
  return (
    <>
      <input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={
          className +
          ` px-4 py-2 text-sm duration-300 border rounded-full border-stone-300 tranistion-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400`
        }
      />
    </>
  );
}

export default Input;
