import React from 'react';
import { Users, MessageSquare } from 'lucide-react';
import ForumPostCard from '../components/community/ForumPostCard';
import { mockForumPosts } from '../data/mockData';

const CommunityPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Users className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-3xl font-bold text-neutral-900">Community Engagement</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">Recent Discussions</h2>
              <button className="btn btn-primary">Start New Discussion</button>
            </div>
            <div className="space-y-4">
              {mockForumPosts.map(post => (
                <ForumPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Community Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Active Members</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Topics Created</span>
                <span className="font-semibold">456</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Total Responses</span>
                <span className="font-semibold">2,789</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#safety</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#community</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#events</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#awareness</span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">#peace</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;