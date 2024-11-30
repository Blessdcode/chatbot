import { MdAddPhotoAlternate } from "react-icons/md";
import styles from "../styles";

const Content = () => {
  return (
    <div className={`${styles.boxWidth}`}>
     
      <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
        <p>
          <span className="bg-gradient-to-r from-[#368ddd] to-[#ff5546] bg-clip-text text-transparent">
            Hello, Arya.
          </span>
        </p>

        <p className="text-slate-400">How can I help you today?</p>
      </div>
      <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
        <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 rounded-full placeholder:text-slate-900 text-slate-950">
          <input
            type="text"
            placeholder="Enter a prompt here..."
            className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
            //   value={input}
            //   onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex gap-4 items-center">
            {/* <MdAddPhotoAlternate className="text-2xl cursor-pointer" />
              <FaMicrophone className="text-2xl cursor-pointer" /> */}
            {/* {input && (
                <IoMdSend
                  onClick={() => onSent()}
                  className="text-2xl cursor-pointer"
                />
              )} */}
          </div>
        </div>

        <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600">
          Chatbot may display inaccurate info, including about people, so
          double-check its responses.
        </p>
      </div>
    </div>
  );
};

export default Content;
