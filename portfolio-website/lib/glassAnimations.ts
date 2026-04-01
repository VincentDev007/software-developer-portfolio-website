export function calculateSpecularHighlight(
  mouseX: number,
  mouseY: number,
  elementRect: DOMRect
) {
  const x = mouseX - elementRect.left;
  const y = mouseY - elementRect.top;

  const xPercent = (x / elementRect.width) * 100;
  const yPercent = (y / elementRect.height) * 100;

  return { xPercent, yPercent };
}
