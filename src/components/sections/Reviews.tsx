import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Plus, Trash2, Edit } from 'lucide-react';
import { useScrollAnimation, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

interface Review {
  id: string;
  name: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
  created_at: string;
  user_id?: string;
}

const demoReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    rating: 5,
    comment: 'Marzelet transformed our digital presence completely. Their team delivered exceptional results that exceeded our expectations. The attention to detail and innovative approach made all the difference.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    created_at: '2025-01-10T10:00:00Z'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Digital Solutions Co.',
    rating: 5,
    comment: 'Working with Marzelet was a game-changer for our business. They understood our vision and brought it to life with cutting-edge technology and beautiful design.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    created_at: '2025-01-08T10:00:00Z'
  }
];

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(demoReviews);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { ref, controls } = useScrollAnimation();
  const { user, isAdmin } = useAuth();

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      if (data && data.length > 0) {
        setReviews(data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const submitReview = async () => {
    if (!user) {
      toast.error('Please sign in to leave a review');
      return;
    }

    if (!newReview.comment.trim()) {
      toast.error('Please write a comment');
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            user_id: user.id,
            rating: newReview.rating,
            comment: newReview.comment,
          }
        ]);

      if (error) throw error;
      
      toast.success('Review submitted successfully!');
      setNewReview({ rating: 5, comment: '' });
      setShowAddReview(false);
      fetchReviews();
    } catch (error) {
      toast.error('Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  };

  const deleteReview = async (id: string) => {
    if (!isAdmin) return;
    
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setReviews(reviews.filter(review => review.id !== id));
      toast.success('Review deleted successfully');
    } catch (error) {
      toast.error('Failed to delete review');
    }
  };

  const handleSignInRedirect = () => {
    window.location.href = '/login';
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-500'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-gray-800">
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
                Client Reviews
              </h2>
              {user && (
                <Button
                  variant="primary"
                  size="sm"
                  className="ml-4"
                  onClick={() => setShowAddReview(!showAddReview)}
                >
                  <Plus size={16} className="mr-2" />
                  Add Review
                </Button>
              )}
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about working with us and the results we've delivered.
            </p>
          </motion.div>

          {/* Add Review Form */}
          {showAddReview && user && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Leave a Review
              </h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Rating
                </label>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                      className="p-1"
                    >
                      <Star
                        size={24}
                        className={`${
                          i < newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'
                        } hover:text-yellow-400 transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Review
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white resize-none"
                  placeholder="Share your experience working with us..."
                />
              </div>

              <div className="flex gap-4">
                <Button
                  variant="primary"
                  onClick={submitReview}
                  loading={submitting}
                >
                  Submit Review
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setShowAddReview(false)}
                  className="text-gray-300 hover:bg-gray-700"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          )}

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="group bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-700"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-500/20">
                  <Quote size={32} />
                </div>

                {/* Admin Actions */}
                {isAdmin && (
                  <div className="absolute top-4 right-16 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="!p-2 text-gray-400 hover:text-white"
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="!p-2 text-red-400 hover:text-red-300"
                      onClick={() => deleteReview(review.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Content */}
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "{review.comment}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {review.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sign in prompt for non-authenticated users */}
          {!user && (
            <motion.div
              variants={staggerItem}
              className="mt-12 text-center bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Share Your Experience
              </h3>
              <p className="text-gray-300 mb-6">
                Sign in to leave a review and help others learn about our services.
              </p>
              <Button 
                variant="primary"
                onClick={handleSignInRedirect}
              >
                Sign In to Review
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};