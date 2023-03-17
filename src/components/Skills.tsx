import { freatures } from "../../services/skills";

export function Skills() {
  return (
    <div className="bg-indigo-700" id="stack">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-white tracking-wider">
          Minha Stack
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            {freatures.map((freature) => (
          <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-indigo-800">
              <span className="flex max-h-12 bg-indigo-800 text-indigo-300 text-2xl gap-3 font-semibold">
                <freature.icon className="max-h-12 bg-indigo-800 text-indigo-300 text-3xl" />
                {freature.name}
              </span>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
}
