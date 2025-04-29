// export const LoadingSpinner = () => {
//     return (
//       <div aria-label="Loading..." className="spinner-parent" role="status">
//         <span className="loader"></span>
//       </div>
//     );
//   };
import logo from "../assets/images/logo/remlogo.gif";
export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fefefe] animate-flipOut">
      <img src={logo} alt="Loading..." className="w-16 h-16" />
    </div>
  );
};
