import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogData } from "utils/blogData";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X, Filter } from "lucide-react";

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("newest");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogData.forEach((post) => {
      post.categories.forEach((cat) => cats.add(cat));
    });
    return Array.from(cats).sort();
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = [...blogData];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.categories.some((cat) => cat.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) =>
        post.categories.includes(selectedCategory)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      const dateA = new Date(a.publishedDate).getTime();
      const dateB = new Date(b.publishedDate).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortOrder]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortOrder("newest");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" || selectedCategory !== "all" || sortOrder !== "newest";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-6xl">
            The LocalServ Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Insights on AI, local services, and the future of booking.
          </p>
        </header>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles by title, content, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 h-14 text-lg border-2 border-gray-200 focus:border-purple-500 rounded-xl shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Filter by:
              </span>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="ml-auto"
              >
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Active filters:
              </span>
              {searchQuery && (
                <Badge
                  variant="secondary"
                  className="gap-1 cursor-pointer hover:bg-gray-300"
                  onClick={() => setSearchQuery("")}
                >
                  Search: {searchQuery}
                  <X className="h-3 w-3" />
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge
                  variant="secondary"
                  className="gap-1 cursor-pointer hover:bg-gray-300"
                  onClick={() => setSelectedCategory("all")}
                >
                  Category: {selectedCategory}
                  <X className="h-3 w-3" />
                </Badge>
              )}
              {sortOrder !== "newest" && (
                <Badge
                  variant="secondary"
                  className="gap-1 cursor-pointer hover:bg-gray-300"
                  onClick={() => setSortOrder("newest")}
                >
                  Sort: {sortOrder === "oldest" ? "Oldest First" : "Newest First"}
                  <X className="h-3 w-3" />
                </Badge>
              )}
            </div>
          )}

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredPosts.length} of {blogData.length} articles
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <Link
                to={post.path}
                key={post.id}
                className="block group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 border-2 border-transparent group-hover:border-purple-200">
                  <CardHeader className="p-0 relative">
                    <div className="overflow-hidden">
                      <img
                        src={post.featuredImage.src}
                        alt={post.featuredImage.alt}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-purple-700 backdrop-blur-sm">
                        {post.readTime}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 transition-colors duration-300 mb-3 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="border-purple-200 text-purple-700 hover:bg-purple-50"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any articles matching your search. Try different
                keywords or clear your filters.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Blog;
