import styles from "../styles";
import {
  useContext,
  useRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { ChatContextType, Context } from "../context/gemini.context"; 
import { useKindeAuth } from "@kinde-oss/kinde-auth-react"; 
import { IoMdSend } from "react-icons/io";



const Content: React.FC = () => {
  const context = useContext<ChatContextType | null>(Context); 
  const { user } = useKindeAuth(); 
  const resultRef = useRef<HTMLDivElement | null>(null);

  if (!context) {
    throw new Error("Content must be used within a ContextProvider");
  }

  const {
    input,
    setInput,
    recentPrompt,
    resultData,
    showResult,
    onSent,
    loading,
  } = context;

  useEffect(() => {
    const inputField =
      document.querySelector<HTMLInputElement>("input[type='text']");
    if (inputField) inputField.focus();
  }, []);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onSent();
    }
  };

  useEffect(() => {
    if (resultRef.current) {
      const container = resultRef.current;
      if (showResult) {
        container.style.minHeight = "300px";
        container.style.maxHeight = "600px";
      } else {
        container.style.minHeight = "0px";
      }
    }
  }, [showResult]);

  return (
    <div className={`${styles.boxWidth}`}>
      {!showResult ? (
        <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
          <p>
            <span className="bg-gradient-to-r from-[#368ddd] to-[#ff5546] bg-clip-text text-transparent">
              Hello, {user?.given_name  || "John Deo"}
            </span>
          </p>
          <p className="text-slate-400">How can I help you today?</p>
        </div>
      ) : (
        <div
          ref={resultRef}
          className="px-3 bg-slate-700 p-4 transition-all duration-300 overflow-y-scroll">
          <h2 className="text-lg italic leading-[1.8] font-bold mb-4">
            {recentPrompt}
          </h2>
          {loading ? (
            <div className="w-full flex flex-col gap-2">
              <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
              <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
              <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
            </div>
          ) : (
            <p
              dangerouslySetInnerHTML={{ __html: resultData }}
              className={`${styles.paragraph} font-[400] leading-[1.8] min-h-[600px] w-full`}></p>
          )}
        </div>
      )}

      <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
        <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-2 rounded-full placeholder:text-slate-900 text-slate-950">
          <input
            type="text"
            placeholder="Enter a prompt here..."
            className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyPress}
          />
          <div className="flex gap-4 items-center">
            {input && (
              <IoMdSend
                onClick={() => onSent()}
                className="text-2xl cursor-pointer"
              />
            )}
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
