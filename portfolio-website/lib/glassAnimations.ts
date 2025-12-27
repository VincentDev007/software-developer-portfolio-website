// Function to calculate specular highlight position based on mouse
export function calculateSpecularHighlight(
  mouseX: number,
  mouseY: number,
  elementRect: DOMRect
) {
  // Calculate mouse position relative to element
  const x = mouseX - elementRect.left;
  const y = mouseY - elementRect.top;
  
  // Calculate percentage position (0-100)
  const xPercent = (x / elementRect.width) * 100;
  const yPercent = (y / elementRect.height) * 100;
  
  return { xPercent, yPercent };
}
