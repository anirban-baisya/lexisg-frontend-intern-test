
const ChatBubble = ({ sender, children }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`p-4 rounded-xl max-w-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}>
        {children}
      </div>
    </div>
  );
};

export default ChatBubble;
