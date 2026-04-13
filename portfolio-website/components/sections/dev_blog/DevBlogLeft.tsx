'use client'

import { blogPosts } from '@/data/blog';
import { getCardShadow } from '@/utils/shadows';

interface DevBlogLeftProps {
  selectedId: string | null;
  hoveredId: string | null;
  onSelectPost: (id: string | null) => void;
  onHoverPost: (id: string | null) => void;
}

export default function DevBlogLeft({ selectedId, hoveredId, onSelectPost, onHoverPost }: DevBlogLeftProps) {
  return (
    <div className="pb-8">

      <h2 className="text-[26px] font-bold mb-0 text-gray-900">Dev Blog</h2>
      <p className="text-[14px] text-gray-400 font-bold mb-6 -mt-1">Thoughts on building, learning, and shipping.</p>

      <div>
        {blogPosts.map((post) => (
          <button
            key={post.id}
            onClick={() => onSelectPost(selectedId === post.id ? null : post.id)}
            onMouseEnter={() => onHoverPost(post.id)}
            onMouseLeave={() => onHoverPost(null)}
            className={`flex flex-col justify-between h-[160px] p-4 rounded-[14px] mb-3 cursor-pointer transition-all duration-300 text-left w-full bg-white overflow-hidden ${
              selectedId === post.id
                ? 'opacity-100 -translate-y-1 scale-[1.02]'
                : 'opacity-90 hover:opacity-100 hover:-translate-y-1 hover:scale-[1.02]'
            }`}
            style={{
              border: selectedId === post.id
                ? '1.5px solid rgba(0,0,0,0.10)'
                : '1.5px solid rgba(0,0,0,0.06)',
              boxShadow: getCardShadow(post.id, selectedId, hoveredId),
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-black/5 text-gray-500">
                {post.tag}
              </span>
              <span className="text-[11px] text-gray-400">
                {post.date}
              </span>
            </div>

            <h3 className="text-[26px] font-semibold text-gray-900 leading-snug mb-0">
              {post.title}
            </h3>

            <p className="text-[13px] text-gray-500 font-semibold leading-relaxed -mt-4">
              {post.summary}
            </p>

            <span className="text-[11px] text-gray-400">
              {post.readTime}
            </span>

          </button>
        ))}
      </div>
    </div>
  );
}
