import React from 'react';
import { MessageSquare, Heart, Tag } from 'lucide-react';
import { ForumPost } from '../../types';

interface ForumPostCardProps {
  post: ForumPost;
  onClick?: () => void;
}

const ForumPostCard: React.FC<ForumPostCardProps> = ({ post, onClick }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div 
      className="card card-hover cursor-pointer transition-all"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-start mb-4">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-medium text-neutral-900">{post.author.name}</h3>
            <p className="text-sm text-neutral-500">{formatDate(post.createdAt)}</p>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-2 text-neutral-900">{post.title}</h2>
        <p className="text-neutral-700 mb-4 line-clamp-3">{post.content}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs flex items-center">
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center text-neutral-600">
            <Heart size={16} className="mr-1 text-error-500" />
            <span>{post.likes} likes</span>
          </div>
          <div className="flex items-center text-neutral-600">
            <MessageSquare size={16} className="mr-1" />
            <span>{post.comments.length} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPostCard;