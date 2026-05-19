import { useId } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Heart, MessageCircle, Share2, Sparkles, TrendingUp } from "lucide-react";
import { CircularProgress } from "./CircularProgress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

export function ProfileDetail() {
  const { id } = useParams();
  const gradientId = useId();

  const profile = {
    name: "Emma Williams",
    age: 28,
    location: "New York, NY",
    profession: "Product Designer",
    education: "Master's in Design, NYU",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
    matchScore: 94,
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    ],
    bio: "Passionate about creating beautiful, user-centered designs. Love traveling, photography, and exploring new coffee shops. Looking for someone who values creativity, adventure, and deep conversations.",
    interests: ["Travel", "Photography", "Design", "Coffee", "Hiking", "Art"],
    compatibility: {
      values: 96,
      lifestyle: 92,
      interests: 94,
      personality: 90,
      communication: 95,
      goals: 93,
    },
    whyMatch: "Emma shares your passion for creativity and travel. Your communication styles are highly compatible, and you both value personal growth and adventure. AI predicts strong long-term compatibility based on aligned life goals and complementary personalities.",
  };

  const compatibilityData = [
    { category: "Values", score: profile.compatibility.values },
    { category: "Lifestyle", score: profile.compatibility.lifestyle },
    { category: "Interests", score: profile.compatibility.interests },
    { category: "Personality", score: profile.compatibility.personality },
    { category: "Communication", score: profile.compatibility.communication },
    { category: "Goals", score: profile.compatibility.goals },
  ];

  const radarData = compatibilityData.map(item => ({
    subject: item.category,
    A: item.score,
    fullMark: 100,
  }));

  return (
    <div className="p-8">
      <Link
        to="/discover"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Matches
      </Link>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
            <div className="relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-6 right-6">
                <CircularProgress value={profile.matchScore} size={100} strokeWidth={8} />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-semibold mb-3">
                    {profile.name}, {profile.age}
                  </h1>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span>{profile.profession}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4" />
                      <span>{profile.education}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
                <button className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Save for Later
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {profile.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${profile.name} ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold mb-4">Compatibility Breakdown</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={compatibilityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="score" fill={`url(#${gradientId})`} radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar
                      name="Compatibility"
                      dataKey="A"
                      stroke="#a855f7"
                      fill="#a855f7"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-6 text-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Why This Match?</h3>
                <p className="text-sm text-purple-100">AI-powered insights</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-purple-50">{profile.whyMatch}</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold">AI Predictions</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Long-term Compatibility</span>
                  <span className="text-sm font-semibold text-green-600">High</span>
                </div>
                <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-green-500 rounded-full" />
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Conversation Quality</span>
                  <span className="text-sm font-semibold text-blue-600">Excellent</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-blue-500 rounded-full" />
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Shared Values Match</span>
                  <span className="text-sm font-semibold text-purple-600">Very High</span>
                </div>
                <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                  <div className="h-full w-[96%] bg-purple-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold mb-4">Conversation Starters</h3>
            <div className="space-y-3">
              <button className="w-full p-3 text-left bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors text-sm">
                "I noticed you love photography. What's your favorite subject to capture?"
              </button>
              <button className="w-full p-3 text-left bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors text-sm">
                "Your design work looks amazing! What inspires your creative process?"
              </button>
              <button className="w-full p-3 text-left bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors text-sm">
                "I see we both enjoy traveling. What's been your most memorable trip?"
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
