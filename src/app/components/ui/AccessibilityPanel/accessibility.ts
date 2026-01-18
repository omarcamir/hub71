export function setFontScale(scale: number) {
  document.documentElement.style.fontSize = `${scale * 100}%`;
}

export function toggleGrayscale(enabled: boolean) {
  document.documentElement.style.filter = enabled ? "grayscale(100%)" : "";
}
