export default function Section({ id, heading, children, className = "", minHeight = "min-h-screen" }) {
  return (
    <section id={id} className={`${minHeight/2  } px-[10vw] pt-28 pb-16 max-w-5xl mx-auto ${className}`}>
      {heading}
      {children}
    </section>
  );
}