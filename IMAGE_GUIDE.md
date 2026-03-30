# Image Placement Guide

This document explains where to place images for the Auditorium Trade Centre website.

## 📁 Image Folder Structure

All images should be placed in the `public/images/` folder:

```
public/
└── images/
    ├── gallery/          # Gallery images
    ├── hero/             # Hero banner
    ├── events/           # Event-specific images
    └── venues/           # Venue/floor plan images
```

---

## 📷 Images Required by Page

### 1. **Gallery Page** (`/app/gallery/page.tsx`)

Location: `public/images/gallery/`

Required images:

- `conference-hall.jpeg` (800×600px recommended)
- `grand-ballroom.jpeg`
- `exhibition-area.jpeg`
- `dining-hall.jpeg`
- `outdoor-venue.jpeg`
- `green-room.jpeg`

**Purpose**: Showcase venue spaces

---

### 2. **Homepage Hero Section** (`/components/Hero.tsx`)

Location: `public/images/hero/`

Required images:

- `hero-banner.jpeg` (1920×600px recommended, Large file)

**Purpose**: Background image for hero section (shows with 40% opacity)

---

### 3. **Homepage Event Types** (`/app/page.tsx`)

Location: `public/images/events/`

Required images (for event type cards):

- `business-conference.jpeg` (400×300px recommended)
- `entertainment.jpeg`
- `sports.jpeg`
- `motor-shows.jpeg`
- `trade-exhibition.jpeg`
- `wedding.jpeg`

**Purpose**: Show example images for each event type

---

### 4. **Events Calendar Page** (`/app/events/page.tsx`)

Location: `public/images/events/`

Required images:

- `tech-conference.jpeg` (400×300px)
- `trade-expo.jpeg`
- `entertainment-gala.jpeg`
- `sports-championship.jpeg`

**Purpose**: Display event images on calendar page

---

### 5. **Floor Plan Page** (`/app/floor-plan/page.tsx`)

Location: `public/images/venues/`

Required images:

- `floor-plan.jpeg` (1200×800px or larger, aspect ratio flexible)

**Purpose**: Show floor plan layout

---

### 6. **Homepage Venue Preview** (`/app/page.tsx`)

Location: `public/images/venues/`

Required images:

- `venue-preview.jpeg` (1200×600px)

**Purpose**: Show venue layout on homepage

---

## 🎯 Image Specifications

### Size Recommendations:

- **Hero Banner**: 1920×600px (Large file okay, will be optimized)
- **Event Cards**: 400×300px (JPEG, ~80-150KB)
- **Gallery Images**: 800×600px (JPEG, ~100-200KB)
- **Floor Plan**: 1200×800px or larger (PNG/JPEG)
- **Venue Preview**: 1200×600px (JPEG, ~150-250KB)

### Format:

- **JPEG** - For photos (best compression)
- **PNG** - For graphics/floor plans (lossless)
- **WebP** - For modern browsers (optional, Next.js will optimize)

### File Size:

- Keep images under 500KB for fast loading
- Larger images (1920px) can be 300-400KB
- Medium images (800px) should be 100-200KB
- Small images (400px) should be 50-100KB

### Quality:

- Export at 85-90% quality for JPEG
- Use tools like TinyPNG, ImageOptim for compression
- Maintain aspect ratios shown above

---

## 🚀 How to Add Images

### Step 1: Prepare Your Images

1. Resize images to recommended dimensions
2. Compress using online tools (TinyPNG, Compress.com)
3. Save as JPEG or PNG

### Step 2: Place Images

1. Navigate to `c:\auditorium\public\images\`
2. Create subfolders if not exists: `gallery`, `hero`, `events`, `venues`
3. Drag and drop images into appropriate folders

### Step 3: Name Correctly

Make sure filenames match exactly what's in the code:

- `conference-hall.jpeg` (not `Conference Hall.jpeg`)
- Use lowercase with hyphens, no spaces

### Step 4: Test Locally

```bash
cd c:\auditorium
npm run dev
# Visit http://localhost:3000
# Check if all images load
```

### Step 5: Build & Deploy

```bash
npm run build
git add public/images/
git commit -m "Add venue images"
git push
```

---

## 📋 Checklist for Complete Image Setup

Gallery Images:

- [ ] conference-hall.jpg
- [ ] grand-ballroom.jpg
- [ ] exhibition-area.jpg
- [ ] dining-hall.jpg
- [ ] outdoor-venue.jpg
- [ ] green-room.jpg

Event Type Images:

- [ ] business-conference.jpg
- [ ] entertainment.jpg
- [ ] sports.jpg
- [ ] motor-shows.jpg
- [ ] trade-exhibition.jpg
- [ ] wedding.jpg

Events Calendar Images:

- [ ] tech-conference.jpg
- [ ] trade-expo.jpg
- [ ] entertainment-gala.jpg
- [ ] sports-championship.jpg

Hero & Venue Images:

- [ ] hero-banner.jpg
- [ ] floor-plan.jpg
- [ ] venue-preview.jpg

---

## 🔧 Troubleshooting

### Images Not Showing

1. Check filename matches code (case-sensitive)
2. Check image path in code starts with `/images/`
3. Verify image file exists in correct folder
4. Check browser console for 404 errors

### Image Quality Issues

1. Resize to recommended dimensions first
2. Compress before uploading
3. Use JPEG for photos, PNG for graphics
4. Check original image quality

### Performance Issues

1. Verify image file sizes are under recommendations
2. Use compression tools (TinyPNG)
3. Run `npm run build` to check optimization

---

## 📌 Important Notes

- Images are served from `/public/` folder
- Never edit file paths in code - add images with matching names instead
- All image paths in code use lowercase with hyphens
- Next.js optimizes images automatically on build
- GitHub Pages will host images fine (just like any static files)
- Recommended to commit images smaller than 100MB total

---

## 🎨 Design Tips

**Gallery Images**: Show actual venue spaces at different angles and times
**Hero Banner**: Use high-quality, professional image (event setup or venue exterior)
**Event Cards**: Show examples of similar events happening in your venue
**Floor Plan**: Clear diagram showing room layout and capacity
**Venue Preview**: Overall shot of main event space

---

**Total Images Needed**: 19 images  
**Recommended Total Size**: ~2-5MB  
**Estimated Setup Time**: 15-30 minutes
