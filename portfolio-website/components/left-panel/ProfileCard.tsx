export default function ProfileCard() {
  return (
    <div className="mb-8 flex items-end justify-between gap-6">
      
      {/* Left side - Name and Title */}
      <div className="flex-1 px-10">
        {/* Name */}
        <h1 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">
          Vincent Agra
        </h1>

        {/* Title */}
        <p className="text-xl text-gray-600 font-medium">
          Software Developer
        </p>
      </div>



      {/* Right side - Profile Image (Circular) */}
      <div className="w-32 h-32 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg mr-20">
        {/* Placeholder Icon */}
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>

    </div>
  );
}
