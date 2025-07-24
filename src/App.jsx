import React, { useState } from "react";
import {
  Search,
  User,
  MapPin,
  Building2,
  Link2,
  Github,
} from "lucide-react";





function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGitHubUser = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#161b22] border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=2000')] opacity-5 bg-cover bg-center"></div>

        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Github className="w-16 h-16 text-blue-500" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              GitHub Profile Finder
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Discover and explore GitHub profiles with our beautiful profile
              viewer. Enter a username to get started.
            </p>

            <form onSubmit={fetchGitHubUser} className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="w-full pl-12 pr-32 py-4 bg-[#0d1117] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 border border-gray-800"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Searching..." : "Search"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {loading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-400">Searching for user...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-6 text-center">
            <div className="text-red-500 text-lg font-medium">{error}</div>
            <p className="text-gray-400 mt-2">
              Please check the username and try again
            </p>
          </div>
        )}

        {user && (
          <div className="bg-[#161b22] rounded-xl p-8 shadow-xl border border-gray-800 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src={user.avatar_url}
                  alt={user.name || user.login}
                  className="w-40 h-40 rounded-xl border-4 border-blue-500/20 shadow-2xl transform hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="flex-grow">
                <h2 className="text-3xl font-bold">{user.name || user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-1 group"
                >
                  <User className="w-4 h-4" />
                  <span className="group-hover:underline">@{user.login}</span>
                </a>

                {user.bio && (
                  <p className="mt-4 text-gray-300 text-lg">{user.bio}</p>
                )}

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#0d1117] rounded-lg p-4">
                    <div className="font-bold text-2xl text-blue-400">
                      {user.public_repos || 0}
                    </div>
                    <div className="text-sm text-gray-400">Repositories</div>
                  </div>
                  <div className="bg-[#0d1117] rounded-lg p-4">
                    <div className="font-bold text-2xl text-purple-400">
                      {user.followers || 0}
                    </div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                  <div className="bg-[#0d1117] rounded-lg p-4">
                    <div className="font-bold text-2xl text-green-400">
                      {user.following || 0}
                    </div>
                    <div className="text-sm text-gray-400">Following</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {user.location && (
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      {user.location}
                    </div>
                  )}
                  {user.company && (
                    <div className="flex items-center gap-3 text-gray-300">
                      <Building2 className="w-5 h-5 text-purple-400" />
                      {user.company}
                    </div>
                  )}
                  {user.blog && (
                    <div className="flex items-center gap-3 text-gray-300">
                      <Link2 className="w-5 h-5 text-green-400" />
                      <a
                        href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        Website
                      </a>
                    </div>
                  )}
                  {user.created_at && (
                    <div className="flex items-center gap-3 text-gray-300">
                      <Github className="w-5 h-5 text-green-400" />
                      Joined {new Date(user.created_at).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;