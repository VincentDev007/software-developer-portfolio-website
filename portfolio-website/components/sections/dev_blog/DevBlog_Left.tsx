import { blogPosts } from '@/data/blog';

interface DevBlogLeftProps {
  selectedId: string | null;
  onSelectPost: (id: string) => void;
}

export default function DevBlogLeft({ selectedId, onSelectPost }: DevBlogLeftProps) {
  return (
    <div className="pb-8">

      <h2 className="text-[22px] font-bold mb-2 text-gray-900">Dev Blog</h2>
      <p className="text-[13px] text-gray-500 mb-6">Thoughts on building, learning, and shipping.</p>

      <div>
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post.id)}
            className={`flex flex-col gap-2.5 p-4 rounded-[14px] mb-3 cursor-pointer transition-all duration-200 ${
              selectedId === post.id
                ? 'bg-white/[0.18] opacity-100'
                : 'bg-white/[0.08] opacity-75 hover:bg-white/[0.16] hover:opacity-100'
            }`}
            style={{
              border: selectedId === post.id
                ? '1.5px solid rgba(255,255,255,0.35)'
                : '1.5px solid rgba(255,255,255,0.15)'
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-white/20 text-gray-700">
                {post.tag}
              </span>
              <span className="text-[11px] text-gray-400">
                {post.date}
              </span>
            </div>

            <h3 className="text-[14px] font-semibold text-gray-900 leading-snug">
              {post.title}
            </h3>

            <p className="text-[12px] text-gray-500 leading-relaxed">
              {post.summary}
            </p>

            <span className="text-[11px] text-gray-400">
              ⏱ {post.readTime}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
}