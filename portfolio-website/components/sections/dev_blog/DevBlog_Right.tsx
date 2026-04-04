import { getBlogPostById } from '@/data/blog';

interface DevBlogRightProps {
  selectedId: string | null;
}

export default function DevBlogRight({ selectedId }: DevBlogRightProps) {
  if (!selectedId) {
    return (
      <div className="h-full flex items-center justify-center text-center opacity-50">
        <div>
          <div className="text-[56px] mb-[14px]">✍️</div>
          <p className="text-[16px] text-white/70">Select a post to read</p>
        </div>
      </div>
    );
  }

  const post = getBlogPostById(selectedId);

  if (!post) return null;

  return (
    <div className="flex flex-col h-full">

      <div className="flex items-center gap-3 mb-[28px] flex-wrap">
        <span className="text-[10px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full bg-white/20 text-white/70">
          {post.tag}
        </span>
        <span className="text-[12px] text-white/40">{post.date}</span>
        <span className="text-[12px] text-white/40">⏱ {post.readTime}</span>
      </div>

      <div
        className="text-[40px] font-bold text-white/90 tracking-[-0.02em] leading-[1.15] mb-[28px]"
      >
        {post.title}
      </div>

      <div
        className="text-[15px] text-white/70 leading-[1.85] flex-1 [&_p]:mb-[18px] [&_p:last-child]:mb-0 [&_h4]:text-[15px] [&_h4]:font-bold [&_h4]:text-white/90 [&_h4]:mt-6 [&_h4]:mb-[10px] [&_code]:font-mono [&_code]:text-[13px] [&_code]:bg-white/10 [&_code]:px-[7px] [&_code]:py-[2px] [&_code]:rounded-[5px] [&_code]:text-white/80 [&_pre]:bg-white/[0.05] [&_pre]:border [&_pre]:border-white/20 [&_pre]:rounded-[10px] [&_pre]:p-4 [&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[13px] [&_pre_code]:leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />

    </div>
  );
}