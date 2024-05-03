export default function Important() {
  return (
    <div className="flex flex-col items-center sm:flex-row lg:mt-0 sm:items-start sm:justify-center gap-4 py-[3rem]">
      <div className="w-full sm:w-5/12 p-4">
        <h3 className="text-[26px] lg:text-3xl text-red-600 font-semibold mb-2">
          Important Announcement
        </h3>
        <div className="w-ful mb-5 gap-y-3 flex flex-col">
          <p className="mb-2 hover:shadow-lg cursor-pointer py-2 px-1 transition duration-300 ease-in-out hover:bg-red-300 font-medium text-sm lg:text-lg">
            &rarr; Two B.E. programs- Rubber Technology and Computer Engineering
            accredited by NBA for three years
          </p>
          <p className="mb-2 cursor-pointer py-2 px-1 transition duration-300 ease-in-out hover:bg-red-300 font-medium text-sm lg:text-lg">
            &rarr; Two B.E. programs- Rubber Technology and Computer Engineering
            accredited by NBA for three years
          </p>
          <p className="mb-2 cursor-pointer py-2 px-1 transition duration-300 ease-in-out hover:bg-red-300 font-medium text-sm lg:text-lg">
            &rarr; Two B.E. programs- Rubber Technology and Computer Engineering
            accredited by NBA for three years
          </p>
        </div>
        <button className="bg-red-600 hover:bg-red-800 p-2 w-26 rounded text-white font-medium">
          More &rarr;
        </button>
      </div>
      <div className="w-full sm:w-5/12 p-4">
        <h3 className="text-[26px] lg:text-3xl font-semibold mb-2 text-red-600">
          About LDCE
        </h3>
        <p className="mb-5 text-sm lg:text-base font-medium">
          L. D. College of Engineering (LDCE), is a premier government
          engineering institute in Gujarat set with the objectives of imparting
          higher education, research and training in various fields of
          engineering & technology.
        </p>
        <button className="bg-red-600 w-26 hover:bg-red-800 p-2 rounded text-white font-medium">
          Read More &rarr;
        </button>
      </div>
    </div>
  );
}
