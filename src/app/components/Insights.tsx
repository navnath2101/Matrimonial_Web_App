import { useId } from "react";
import { TrendingUp, Users, Heart, MessageCircle, Eye, Calendar, Target, Zap } from "lucide-react";
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function Insights() {
  const areaGradientId = useId();
  const profileViewsData = [
    { day: "Mon", views: 45 },
    { day: "Tue", views: 52 },
    { day: "Wed", views: 38 },
    { day: "Thu", views: 65 },
    { day: "Fri", views: 78 },
    { day: "Sat", views: 92 },
    { day: "Sun", views: 88 },
  ];

  const matchActivityData = [
    { day: "Mon", matches: 3, messages: 12 },
    { day: "Tue", matches: 5, messages: 18 },
    { day: "Wed", matches: 2, messages: 15 },
    { day: "Thu", matches: 4, messages: 22 },
    { day: "Fri", matches: 6, messages: 28 },
    { day: "Sat", matches: 8, messages: 35 },
    { day: "Sun", matches: 7, messages: 30 },
  ];

  const compatibilityDistribution = [
    { name: "90-100%", value: 8, color: "#10b981" },
    { name: "80-89%", value: 12, color: "#3b82f6" },
    { name: "70-79%", value: 6, color: "#a855f7" },
    { name: "Below 70%", value: 2, color: "#e5e7eb" },
  ];

  const stats = [
    {
      label: "Total Profile Views",
      value: "458",
      change: "+24%",
      trend: "up",
      icon: Eye,
      color: "blue",
    },
    {
      label: "New Matches",
      value: "35",
      change: "+12%",
      trend: "up",
      icon: Heart,
      color: "purple",
    },
    {
      label: "Messages Sent",
      value: "160",
      change: "+8%",
      trend: "up",
      icon: MessageCircle,
      color: "green",
    },
    {
      label: "Response Rate",
      value: "92%",
      change: "+5%",
      trend: "up",
      icon: Target,
      color: "orange",
    },
  ];

  const recommendations = [
    {
      title: "Optimize Profile Photos",
      description: "Add 2-3 more photos to increase match rate by 35%",
      impact: "High",
      icon: TrendingUp,
    },
    {
      title: "Update Interests Section",
      description: "Add specific hobbies to attract more compatible matches",
      impact: "Medium",
      icon: Users,
    },
    {
      title: "Best Time to Be Active",
      description: "Most users are online between 8-10 PM on weekdays",
      impact: "Medium",
      icon: Calendar,
    },
    {
      title: "Improve Response Time",
      description: "Reply within 24 hours to increase conversation success by 40%",
      impact: "High",
      icon: Zap,
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Your Match Insights</h1>
        <p className="text-gray-600">AI-powered analytics to help you find better matches</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colors = {
            blue: "from-blue-500 to-blue-600",
            purple: "from-purple-500 to-purple-600",
            green: "from-green-500 to-green-600",
            orange: "from-orange-500 to-orange-600",
          };

          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colors[stat.color]} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <p className="text-3xl font-semibold mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Profile Views (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={profileViewsData}>
              <defs>
                <linearGradient id={areaGradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#a855f7"
                strokeWidth={2}
                fill={`url(#${areaGradientId})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Match Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={matchActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="matches"
                stroke="#a855f7"
                strokeWidth={2}
                dot={{ fill: "#a855f7", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="messages"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Match Score Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={compatibilityDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {compatibilityDistribution.map((entry, index) => (
                  <Cell key={`pie-cell-${entry.name}-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {compatibilityDistribution.map((item, index) => (
              <div key={`legend-${item.name}-${index}`} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 bg-white rounded-xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">AI Recommendations</h3>
          <div className="space-y-3">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon;
              const impactColors = {
                High: "bg-green-100 text-green-700",
                Medium: "bg-blue-100 text-blue-700",
                Low: "bg-gray-100 text-gray-700",
              };

              return (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{rec.title}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            impactColors[rec.impact]
                          }`}
                        >
                          {rec.impact} Impact
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Unlock Premium Insights</h2>
            <p className="text-purple-100 mb-4">
              Get advanced AI predictions, detailed compatibility analysis, and personalized matching
              strategies
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-sm">AI-powered match predictions</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-sm">Advanced compatibility reports</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-sm">Priority profile placement</span>
              </li>
            </ul>
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
              Upgrade to Premium
            </button>
          </div>
          <div className="w-64 h-64 bg-white/10 rounded-2xl backdrop-blur-sm" />
        </div>
      </div>
    </div>
  );
}
