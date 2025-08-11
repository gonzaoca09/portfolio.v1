export default function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`} {...props}>
      {children}
    </button>
  );
}
