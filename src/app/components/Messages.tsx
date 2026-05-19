import { useState } from "react";
import { Search, Send, Phone, Video, MoreVertical, Sparkles, MapPin, Briefcase } from "lucide-react";
import { CircularProgress } from "./CircularProgress";

export function Messages() {
  const [selectedChat, setSelectedChat] = useState("1");
  const [messageInput, setMessageInput] = useState("");

  const conversations = [
    {
      id: "1",
      name: "Emma Williams",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      lastMessage: "That sounds great! I'd love to grab coffee sometime.",
      time: "2m ago",
      unread: 2,
      matchScore: 94,
      online: true,
    },
    {
      id: "2",
      name: "Olivia Martinez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      lastMessage: "Thanks for the recommendation!",
      time: "1h ago",
      unread: 0,
      matchScore: 89,
      online: true,
    },
    {
      id: "3",
      name: "Sophia Chen",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      lastMessage: "What do you think about going hiking?",
      time: "3h ago",
      unread: 1,
      matchScore: 87,
      online: false,
    },
  ];

  const messages = [
    {
      id: "1",
      sender: "other",
      text: "Hi! I saw we have a lot of shared interests. How's your day going?",
      time: "10:30 AM",
    },
    {
      id: "2",
      sender: "me",
      text: "Hey! It's going great, thanks for asking. I noticed you're into photography too!",
      time: "10:32 AM",
    },
    {
      id: "3",
      sender: "other",
      text: "Yes! I love capturing landscapes and street photography. What about you?",
      time: "10:35 AM",
    },
    {
      id: "4",
      sender: "me",
      text: "Mainly portrait and travel photography. Would love to see some of your work!",
      time: "10:37 AM",
    },
    {
      id: "5",
      sender: "other",
      text: "That sounds great! I'd love to grab coffee sometime and we can share our portfolios.",
      time: "10:40 AM",
    },
  ];

  const currentChat = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput("");
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
            />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                selectedChat === conversation.id ? "bg-purple-50" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={conversation.image}
                  alt={conversation.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>

              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">{conversation.name}</h3>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate mb-1">
                  {conversation.lastMessage}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-medium">
                    {conversation.matchScore}% match
                  </span>
                  {conversation.unread > 0 && (
                    <div className="w-5 h-5 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {currentChat && (
        <>
          <div className="flex-1 flex flex-col bg-gray-50">
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={currentChat.image}
                    alt={currentChat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {currentChat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{currentChat.name}</h3>
                  <p className="text-sm text-gray-500">
                    {currentChat.online ? "Active now" : "Offline"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-md ${
                      message.sender === "me"
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-white text-gray-800"
                    } rounded-2xl px-4 py-3 shadow-sm`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "me" ? "text-purple-100" : "text-gray-500"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border-t border-gray-200 p-4">
              <div className="bg-purple-50 rounded-lg p-3 mb-3 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <strong>AI Suggestion:</strong> Emma loves coffee and photography - consider
                  suggesting a photo walk followed by coffee!
                </p>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>

          <div className="w-80 bg-white border-l border-gray-200 overflow-auto">
            <div className="p-6">
              <div className="text-center mb-6">
                <img
                  src={currentChat.image}
                  alt={currentChat.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{currentChat.name}</h3>
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">New York, NY</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">Product Designer</span>
                </div>
                <div className="flex justify-center">
                  <CircularProgress value={currentChat.matchScore} size={80} strokeWidth={6} />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <h4 className="font-medium text-sm">Why you match</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Shared passion for travel, similar career ambitions, and compatible life goals
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Compatibility</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Values</span>
                      <span className="font-medium">96%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[96%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Lifestyle</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Interests</span>
                      <span className="font-medium">94%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[94%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Shared Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {["Travel", "Photography", "Design", "Coffee"].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
