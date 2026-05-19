import { TrendingUp, Sparkles, Calendar, AlertCircle } from "lucide-react";

export function InsightsPanel() {
  const insights = [
    {
      icon: Sparkles,
      title: "AI Prediction",
      content: "3 high-compatibility matches online now",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Profile Boost",
      content: "Your profile views increased 42% this week",
      color: "blue",
    },
    {
      icon: Calendar,
      title: "Best Time",
      content: "Most active users online at 8-10 PM",
      color: "green",
    },
    {
      icon: AlertCircle,
      title: "Tip",
      content: "Add more photos to increase match rate by 35%",
      color: "orange",
    },
  ];

  return (
    <aside className="w-80 bg-white border-l border-gray-200 overflow-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-1">AI Insights</h2>
        <p className="text-sm text-gray-500 mb-6">Personalized recommendations for you</p>

        <div className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const colors = {
              purple: "from-purple-500 to-purple-600",
              blue: "from-blue-500 to-blue-600",
              green: "from-green-500 to-green-600",
              orange: "from-orange-500 to-orange-600",
            };

            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors[insight.color]} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{insight.title}</h3>
                    <p className="text-sm text-gray-600">{insight.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white">
          <h3 className="font-medium mb-2">Premium Match Insights</h3>
          <p className="text-sm text-purple-100 mb-4">
            Unlock advanced AI predictions and compatibility analysis
          </p>
          <button className="w-full px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
            Upgrade Now
          </button>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Profile Completeness</span>
              <span className="font-medium">85%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-gray-600">Response Rate</span>
              <span className="font-medium">92%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
