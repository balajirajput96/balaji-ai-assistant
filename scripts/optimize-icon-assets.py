"""Create checkpoint-safe Expo icon copies from the preserved high-resolution source."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path("/home/ubuntu/webdev-static-assets/balaji-ai-assistant-icon.png")
DESTINATIONS = (
    ROOT / "assets/images/icon.png",
    ROOT / "assets/images/splash-icon.png",
    ROOT / "assets/images/favicon.png",
    ROOT / "assets/images/android-icon-foreground.png",
)


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Generated source not found: {SOURCE}")
    with Image.open(SOURCE) as source:
        image = source.convert("RGB")
        image.thumbnail((512, 512), Image.Resampling.LANCZOS)
        optimized = image.quantize(colors=256, method=Image.Quantize.MEDIANCUT)
        for destination in DESTINATIONS:
            optimized.save(destination, format="PNG", optimize=True)


if __name__ == "__main__":
    main()
