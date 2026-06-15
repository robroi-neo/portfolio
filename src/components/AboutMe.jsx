import AboutImage from "../assets/AboutImage.jpg";

export default function AboutMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="leading-loose text-lg space-y-4 min-w-0">
        <p>I'm a third-year Computer Science student from the Philippines with a focus on full-stack web development and applied AI/ML.</p>
        <p className="text-teal-400">Currently heading into my summer internship and open to freelance work on the side.</p>
      </div>

      <div className="flex items-center justify-center md:justify-end min-w-0">
        <div className="w-full max-w-[10rem] md:max-w-[18rem] lg:max-w-[22rem]">
          <img
            src={AboutImage}
            alt="AboutImage"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}