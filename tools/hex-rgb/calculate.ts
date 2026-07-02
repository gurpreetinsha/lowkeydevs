export function calculate(inputs: Record<string, any>): Record<string, any> {
  let hex = inputs.hex || "#3b82f6";
  
  // Format clean hex
  hex = hex.trim();
  if (hex.startsWith("#")) {
    hex = hex.substring(1);
  }

  // Expand shorthand (e.g. "FFF" -> "FFFFFF")
  if (hex.length === 3) {
    hex = hex.split("").map((c: string) => c + c).join("");
  }

  // Validate expanded hex length
  const isValidHex = /^[a-fA-F0-9]{6}$/.test(hex);
  if (!isValidHex) {
    return {
      rgb: "Invalid Hex Code",
      rgba: "Invalid Hex Code",
      hsl: "Invalid Hex Code",
      colorPreview: `<div class="w-full h-16 rounded-xl border border-destructive/20 bg-destructive/5 flex items-center justify-center text-xs text-destructive font-bold">Please enter a valid hex color code.</div>`,
    };
  }

  // Parse RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const rgb = `rgb(${r}, ${g}, ${b})`;
  const rgba = `rgba(${r}, ${g}, ${b}, 1)`;

  // Parse HSL
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / d + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / d + 4;
        break;
    }
    h = h / 6;
  }

  const hDeg = Math.round(h * 360);
  const sPct = Math.round(s * 100);
  const lPct = Math.round(l * 100);
  const hsl = `hsl(${hDeg}, ${sPct}%, ${lPct}%)`;

  // Swatch HTML preview
  const colorPreview = `
    <div class="flex items-center gap-4 p-2 rounded-xl bg-card border border-border/50">
      <div class="w-16 h-16 rounded-lg border border-border/40 shadow-sm shrink-0 transition-transform duration-300 hover:scale-105" style="background-color: #${hex};"></div>
      <div class="space-y-1 overflow-hidden">
        <p class="text-xs font-bold text-foreground">Color Preview swatch</p>
        <p class="text-[10px] text-muted-foreground font-mono truncate">HEX: #${hex.toUpperCase()}</p>
        <p class="text-[10px] text-muted-foreground font-mono truncate">RGB: ${r}, ${g}, ${b}</p>
      </div>
    </div>
  `;

  return {
    rgb,
    rgba,
    hsl,
    colorPreview,
  };
}
