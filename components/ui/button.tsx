export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-yellow-400 text-black font-bold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
