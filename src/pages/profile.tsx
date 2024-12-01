import { useKindeAuth } from "@kinde-oss/kinde-auth-react"; // Ensure correct typings for useKindeAuth
import styles from "../styles";

const Profile: React.FC = () => {
  const { login, logout, user, isAuthenticated, isLoading } = useKindeAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className={`${styles.marginY} px-6 max-w-3xl mx-auto`}>
      <h2 className="text-2xl font-bold text-white border-b-2 border-gray-300 pb-2 mb-6">
        My Account
      </h2>

      {!isAuthenticated ? (
        <div className="flex flex-col items-center gap-6 mt-12">
          <p className="text-lg text-gray-200">Please sign in or Login!</p>
          <button
            onClick={() => login()} // Ensure login is invoked
            type="button"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Log In
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Welcome!</h3>
          <div className="text-gray-700 mb-6">
            {user?.picture && (
              <img
                src={user.picture} 
                alt="Profile picture"
                className="mb-4 w-[130px] h-[130px] rounded-full object-cover"
              />
            )}
            <p>
              <span className="font-medium">Full Name:</span>{" "}
              {user?.family_name || "Not provided"} {user?.given_name || ""}
            </p>
            <p>
              <span className="font-medium">Your Email:</span>{" "}
              {user?.email || "Not provided"}
            </p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => logout()} 
              type="button"
              className="px-6 py-3 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition duration-300">
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
