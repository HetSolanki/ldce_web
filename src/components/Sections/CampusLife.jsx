import {
  campus1,
  campus2,
  campus3,
  campus4,
  campus5,
} from "../../assets/supply";

export default function CampusLife() {
  return (
    <div className="w-full pt-[2rem] pb-[4rem] bg-blue-100">
      <h2 className="text-3xl md:text-4xl text-red-600 font-semibold text-center w-full mb-[1.5rem]">
        CAMPUS LIFE
      </h2>

      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-6/12 h-96 border-blue-100 border-e-2">
          <img
            src={campus1}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="flex flex-col w-full md:w-6/12">
          <div className="flex h-48">
            <div className="w-2/4 border-blue-100 border-2">
              <img
                src={campus2}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="w-2/4 border-blue-100 border-2">
              <img
                src={campus3}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="flex h-48">
            <div className="w-2/4 border-blue-100 border-2">
              <img
                src={campus4}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="w-2/4 border-blue-100 border-2">
              <img
                src={campus5}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
