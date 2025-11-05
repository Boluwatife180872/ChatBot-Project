import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";
// function ChatMessage({ message, sender }) {
//   // const message = props.message;
//   // const sender = props.sender;
//   //or
//   //const { message, sender } = props;

//   // if (sender === "robot") {
//   //   return (
//   //     <div>
//   //       <img src="robot.png" alt="robot" width="50" />
//   //       {message}
//   //     </div>
//   //   );
//   // }

//   return (
//     <div
//       className={
//         sender === "user" ? "chat-message-user" : "chat-message-robot"
//       }
//     >
//       {sender === "robot" && (
//         <img
//           src="robot.png"
//           alt="robot"
//           className="chat-message-profile"
//         />
//       )}
//       <div className="chat-message-text">{message}</div>
//       {sender === "user" && (
//         <img src="user.png" alt="user" className="chat-message-profile" />
//       )}
//     </div>
//   );
// }
export function ChatMessage({ message, sender, isLoading }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          alt="robot"
          className="chat-message-profile"
        />
      )}

      {isLoading ? (
        <div className="chat-message-text">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="chat-message-text">{message}</div>
      )}

      {sender === "user" && (
        <img
          src={UserProfileImage}
          alt="user"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}
