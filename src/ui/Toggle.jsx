export default function Toggle({ name, value, handler }) {
  return (
    <>
      <input
        tabIndex={-1}
        type="checkbox"
        name={name}
        className="peer sr-only"
        checked={value}
        onChange={(e) => handler(e.target.checked)}
      />
      <span
        tabIndex={0}
        onClick={() => handler((cur) => !cur)}
        onKeyDown={(e) => {
          if (e.key === " ") handler((cur) => !cur);
        }}
        className="grid h-6 w-12 cursor-pointer place-content-center rounded-full bg-stone-400 transition-all duration-500 after:h-5 after:w-5 after:-translate-x-3 after:rounded-full after:bg-white after:transition-all after:duration-500 peer-checked:bg-green-600 peer-checked:after:translate-x-3"
      ></span>
    </>
  );
}
