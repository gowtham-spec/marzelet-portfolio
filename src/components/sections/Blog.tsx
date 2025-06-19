import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Plus, Edit, Trash2 } from 'lucide-react';
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  created_at: string;
}

const demoBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the cutting-edge technologies and methodologies that will shape web development in the coming year.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marzelet Team',
    date: '2025-01-15',
    category: 'Technology',
    created_at: '2025-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Building Scalable Applications with Modern Architecture',
    excerpt: 'Learn how to design and implement applications that can grow with your business needs.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marzelet Team',
    date: '2025-01-10',
    category: 'Development',
    created_at: '2025-01-10T10:00:00Z'
  },
  {
    id: '3',
    title: 'UI/UX Design Principles for Better User Engagement',
    excerpt: 'Discover the key principles that make interfaces intuitive and engaging for users.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marzelet Team',
    date: '2025-01-05',
    category: 'Design',
    created_at: '2025-01-05T10:00:00Z'
  },
  {
    id: '4',
    title: 'Advanced React Patterns for Enterprise Applications',
    excerpt: 'Master advanced React patterns and techniques for building robust enterprise-level applications.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marzelet Team',
    date: '2025-01-01',
    category: 'Development',
    created_at: '2025-01-01T10:00:00Z'
  },
  {
    id: '5',
    title: 'The Rise of AI in Digital Marketing',
    excerpt: 'How artificial intelligence is revolutionizing digital marketing strategies and customer engagement.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marzelet Team',
    date: '2024-12-28',
    category: 'Marketing',
    created_at: '2024-12-28T10:00:00Z'
  },
  {
    id: '6',
    title: 'Cybersecurity Best Practices for Modern Businesses',
    excerpt: 'Essential cybersecurity measures every business should implement to protect their digital assets.',
    content: 'Full blog content here...',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marzelet Team',
    date: '2024-12-25',
    category: 'Security',
    created_at: '2024-12-25T10:00:00Z'
  }
];

export const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>(demoBlogs);
  const [displayedBlogs, setDisplayedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [postsPerPage] = useState(3);
  const { ref, controls } = useScrollAnimation();
  const { isAdmin } = useAuth();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      if (data && data.length > 0) {
        setBlogs(data);
        setDisplayedBlogs(data.slice(0, postsPerPage));
        setHasMorePosts(data.length > postsPerPage);
        setShowLoadMore(data.length > postsPerPage);
      } else {
        setDisplayedBlogs(demoBlogs.slice(0, postsPerPage));
        setHasMorePosts(demoBlogs.length > postsPerPage);
        setShowLoadMore(demoBlogs.length > postsPerPage);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setDisplayedBlogs(demoBlogs.slice(0, postsPerPage));
      setHasMorePosts(demoBlogs.length > postsPerPage);
      setShowLoadMore(demoBlogs.length > postsPerPage);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePosts = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const currentLength = displayedBlogs.length;
      const nextPosts = blogs.slice(currentLength, currentLength + postsPerPage);
      
      if (nextPosts.length > 0) {
        setDisplayedBlogs([...displayedBlogs, ...nextPosts]);
        const newTotal = currentLength + nextPosts.length;
        setHasMorePosts(newTotal < blogs.length);
        if (newTotal >= blogs.length) {
          setShowLoadMore(false);
        }
      } else {
        setHasMorePosts(false);
        setShowLoadMore(false);
      }
      setLoadingMore(false);
    }, 1000);
  };

  const deleteBlog = async (id: string) => {
    if (!isAdmin) return;
    
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      setDisplayedBlogs(displayedBlogs.filter(blog => blog.id !== id));
      toast.success('Blog deleted successfully');
    } catch (error) {
      toast.error('Failed to delete blog');
    }
  };

  const handleReadMore = (blogId: string) => {
    // Navigate to individual blog post page
    window.location.href = `/blog/${blogId}`;
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Our Blog
              </h2>
              {isAdmin && (
                <Button
                  variant="primary"
                  size="sm"
                  className="ml-4"
                >
                  <Plus size={16} className="mr-2" />
                  Add Post
                </Button>
              )}
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices 
              in digital innovation and technology.
            </p>
          </motion.div>

          {/* Load More Button at Top */}
          {showLoadMore && (
            <motion.div
              variants={staggerItem}
              className="mb-8 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadMorePosts}
                disabled={loadingMore}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingMore ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Loading More...
                  </div>
                ) : (
                  'Load More'
                )}
              </motion.button>
            </motion.div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
              >
                {/* Blog Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  {/* Admin Actions */}
                  {isAdmin && (
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="!p-2 bg-white/20 hover:bg-white/30 text-white"
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="!p-2 bg-red-500/20 hover:bg-red-500/30 text-white"
                        onClick={() => deleteBlog(blog.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{blog.author}</span>
                    <Calendar size={16} className="mr-2" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <motion.a
                    href={`/blog/${blog.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No More Posts Message */}
          {!hasMorePosts && !showLoadMore && displayedBlogs.length > postsPerPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-700">
                <span className="text-lg font-medium">No More Posts</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};