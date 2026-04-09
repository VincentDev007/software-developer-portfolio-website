import DOMPurify from 'isomorphic-dompurify';
import { getBlogPostById } from '@/data/blog';

interface DevBlogRightProps {
  selectedId: string | null;
  hoveredId: string | null;
}

export default function DevBlogRight({ selectedId, hoveredId }: DevBlogRightProps) {
  const activeId = selectedId ?? hoveredId;
  if (!activeId) {
    return (
      <div className="h-full flex items-center justify-center text-center opacity-50">
        <div>
          <div className="text-[56px] mb-[14px]">✍️</div>
          <p className="text-[16px] text-gray-500">Select a post to read</p>
        </div>
      </div>
    );
  }

  const post = getBlogPostById(activeId!);
  if (!post) return null;

  return (
    <div className="flex flex-col h-full">

      <div className="flex items-center gap-3 mb-[28px] flex-wrap">
        <span className="text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full bg-black/5 text-gray-500">
          {post.tag}
        </span>
        <span className="text-[12px] text-gray-400">{post.date}</span>
        <span className="text-[12px] text-gray-400">⏱ {post.readTime}</span>
      </div>

      <div className="text-[40px] font-bold text-gray-900 tracking-[-0.02em] leading-[1.15] mb-[28px]">
        {post.title}
      </div>

      <div
        className="text-[15px] text-gray-600 leading-[1.85] flex-1 [&_p]:mb-[18px] [&_p:last-child]:mb-0 [&_h4]:text-[15px] [&_h4]:font-bold [&_h4]:text-gray-900 [&_h4]:mt-6 [&_h4]:mb-[10px] [&_code]:font-mono [&_code]:text-[13px] [&_code]:bg-black/5 [&_code]:px-[7px] [&_code]:py-[2px] [&_code]:rounded-[5px] [&_code]:text-gray-700 [&_pre]:bg-black/[0.03] [&_pre]:border [&_pre]:border-black/10 [&_pre]:rounded-[10px] [&_pre]:p-4 [&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[13px] [&_pre_code]:leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }}
      />

    </div>
  );
}
