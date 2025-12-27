// components/layout/MeshBackground.tsx
export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gray-300" />
  );
} 



/* components/layout/MeshBackground.tsx
export default function MeshBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
} */



/* components/layout/MeshBackground.tsx
export default function MeshBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(ellipse at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(124, 58, 237, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
        `
      }}
    />
  );
} */

