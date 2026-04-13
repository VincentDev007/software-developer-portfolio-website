import Image from 'next/image';

export default function ProfileCard({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="mb-5 px-10 mt-6 flex items-center gap-3">
        <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden bg-white">
          <Image
            src="/avatar.png"
            alt="Vincent Agra"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Vincent Agra
        </h2>
      </div>
    );
  }

  return (
    <div className="mb-20 flex items-end justify-between gap-6 pt-16">

      <div className="flex-1 px-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">
          Vincent Agra
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Software Developer
        </p>
      </div>

      <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden shadow-lg mr-20 bg-white">
        <Image
          src="/avatar.png"
          alt="Vincent Agra"
          width={128}
          height={128}
          priority
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
