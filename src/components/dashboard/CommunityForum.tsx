import React from 'react';
import { Users } from 'lucide-react';
import { ForumPost } from '../../types';
import ForumPostCard from '../community/ForumPostCard';

interface CommunityForumProps {
  posts: ForumPost[];
}

const CommunityForum: React.FC<CommunityForumProps> = ({ posts }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Users className="text-primary-600 mr-2" />
          <h3 className="text-lg font-medium text-neutral-900">Community Forum</h3>
        </div>
        <a href="/community" className="text-sm text-primary-600 hover:text-primary-800">
          View All
        </a>
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center py-6 text-neutral-500">
          No recent forum activity.
        </div>
      ) : (
        <div className="space-y-4">
          {posts.slice(0, 3).map((post) => (
            <ForumPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityForum;