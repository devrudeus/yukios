# Video Assets

## Required File

Place your cinematic video file here:
- **Filename**: `Make_cinematic_style.mp4`
- **Location**: `/public/videos/Make_cinematic_style.mp4`

## Video Specifications

### Recommended Settings:
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 16:9
- **Format**: MP4 (H.264 codec)
- **Duration**: 10-30 seconds (loops automatically)
- **File Size**: Optimize to < 10MB for web performance
- **Frame Rate**: 30fps or 60fps

### Optimization Tips:

1. **Compress the video** using tools like:
   - HandBrake (free)
   - FFmpeg command:
     ```bash
     ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -vf scale=1920:1080 -c:a aac -b:a 128k Make_cinematic_style.mp4
     ```

2. **Use web-optimized settings**:
   - Lower bitrate for smaller file size
   - H.264 codec for browser compatibility
   - Add keyframes every 2 seconds

3. **Consider creating multiple versions**:
   - Full HD (1920x1080) for desktop
   - HD (1280x720) for mobile
   - Use responsive video loading

## Current Implementation

The video is displayed in the hero section with:
- ✅ Auto-play on page load
- ✅ Loop infinitely
- ✅ Muted by default (required for autoplay)
- ✅ Cinematic overlay effects
- ✅ Play/Pause toggle button
- ✅ Auto-pause when out of viewport
- ✅ Scanline CRT effects
- ✅ Holographic overlay
- ✅ Gradient overlays
- ✅ Random glitch effects
- ✅ Responsive aspect ratio (16:9)

## Fallback

If the video file is not found, the page will:
- Show "Your browser does not support the video tag" message
- Display the hero section with gradient background only
- All cinematic effects will still work

## Usage in Code

The video is referenced in `src/pages/index.astro`:
```astro
<video
  id="hero-video"
  class="size-full object-cover"
  autoplay
  loop
  muted
  playsinline
>
  <source src="/videos/Make_cinematic_style.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Testing

After adding your video file:
1. Restart the dev server: `npm run dev`
2. Open http://localhost:1234
3. Video should auto-play in hero section
4. Test play/pause button
5. Scroll down to test auto-pause feature
6. Check mobile responsiveness

---

*Created: 2026-01-12*
