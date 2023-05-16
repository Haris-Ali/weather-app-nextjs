import { Poppins } from "next/font/google";
import moment from "moment";

const PoppinsBold = Poppins({ weight: "600", subsets: ["latin"] });
const PoppinsRegular = Poppins({ weight: "400", subsets: ["latin"] });

export default function WeatherData(props: { data: any }) {
  const { location, current } = props.data;

  const getTime = (time: any) => {
    return moment(time).format("hh:mm a");
  };
  const getDate = (date: any) => {
    return moment(date).format("ddd, MMM MM");
  };

  return (
    <>
      <div className="mt-3 p-3 border border-slate-300 bg-white rounded-md">
        <div className="grid grid-cols-3">
          <div className="flex flex-col flex-auto border-r-slate-800 border-r text-center">
            <span className={`text-lg pb-3 ${PoppinsBold.className}`}>
              {location.name}
            </span>
            <span>{getTime(location.localtime)}</span>
            <span>{getDate(location.localtime)}</span>
          </div>
          <div className="flex flex-col flex-auto border-r-slate-800 border-r text-center">
            <span className={`text-lg pb-3 ${PoppinsBold.className}`}>
              Temperature
            </span>
            <span>{current.temp_c} &#176;C</span>
            <span>{current.temp_f} &#176;F</span>
          </div>
          <div className="flex flex-col flex-auto text-center">
            <span className={`text-lg pb-3 ${PoppinsBold.className}`}>
              Conditions
            </span>
            <span className="flex items-center justify-center gap-1">
              <img src={current.condition.icon} alt="" />
              <span>{current.condition.text}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
