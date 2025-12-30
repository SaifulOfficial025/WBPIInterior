# API Integration Documentation

## Overview

This document explains the API integration implemented for the Project Details page with local storage caching for seamless user experience.

## Files Modified

### 1. **src/ContextAPI/ProjectDetails.jsx**

Created a React Context Provider for managing project details data:

- **Features:**

  - Fetches project details from API: `GET projects/{id}/`
  - Caches data in browser localStorage for 1 hour
  - Automatic fallback to cached data if API fails
  - Loading and error state management

- **Methods:**
  - `fetchProjectDetails(projectId)` - Fetches and caches project data
  - `clearProjectCache(projectId)` - Clears cache for specific project
  - `clearAllCache()` - Clears all project caches

### 2. **src/Pages/Projects/CollapsingProjectDetails.jsx/RootPage.jsx**

Updated the main component to:

- Use the `useProjectDetails` hook to fetch data
- Display loading spinner while fetching
- Show error message with retry button on failure
- Pass API data to child components
- Use cached data from localStorage for instant loading

### 3. **Child Components Updated:**

#### **Hero.jsx**

- Now accepts `galleryImages` prop for photo gallery
- Uses API data for all project information

#### **Furniture.jsx**

- Accepts `ffeList` and `projectImages` props
- Dynamically displays furniture items from API
- Shows description and dimensions for each item
- Image error handling with fallbacks

#### **LookFeel.jsx**

- Accepts props: `title`, `description`, `fitOutPrice`, `ffePrice`, `image`, `paletteImage`
- Dynamically renders content from API
- Image error handling with fallbacks

#### **MoodImages.jsx**

- Accepts `moodImages` array prop
- Dynamically renders all mood images from API
- Image error handling with fallbacks

### 4. **src/main.jsx**

Wrapped the application with `ProjectDetailsProvider` for global state access.

## API Response Structure

The API endpoint `GET projects/5/` returns:

```json
{
  "success": true,
  "message": "Project details retrieved successfully",
  "data": {
    "id": 5,
    "title": "Property Finder",
    "project_cover_image": "...",
    "project_year": 2015,
    "category": "COMMERCIAL",
    "client": "...",
    "design": "...",
    "fit_out": "...",
    "contact": "...",
    "description": "...",
    "project": "...",
    "address": "...",
    "time_frame": "...",
    "area_type": "...",
    "featuring": "...",
    "area": "...",
    "look_n_feel_title": "...",
    "look_n_feel_description": "...",
    "look_n_feel_fit_out_price": "...",
    "look_n_feel_ffe_price": "...",
    "look_n_feel_image": "...",
    "look_n_feel_pallete_image": "...",
    "project_images": { ... },
    "gallery_images": { ... },
    "ffe_list": [ ... ],
    "mood_images": { ... }
  }
}
```

## Local Storage Caching

### Cache Keys:

- `project_{id}` - Stores project data
- `project_{id}_timestamp` - Stores cache timestamp

### Cache Duration:

- 1 hour (3600000 milliseconds)
- Automatically refreshes after expiration

### Cache Benefits:

- **Instant Loading**: Previously viewed projects load instantly
- **Offline Support**: Works without internet if data was cached
- **Reduced API Calls**: Minimizes server load
- **Better UX**: No loading delays for returning users

## Usage Example

```jsx
// In any component within ProjectDetailsProvider
import { useProjectDetails } from "../ContextAPI/ProjectDetails";

function MyComponent() {
  const { projectData, loading, error, fetchProjectDetails } =
    useProjectDetails();

  useEffect(() => {
    fetchProjectDetails(5); // Fetch project with ID 5
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{projectData.title}</div>;
}
```

## Error Handling

1. **Network Errors**: Falls back to cached data if available
2. **Image Load Errors**: Uses fallback placeholder images
3. **Missing Data**: Components use default values
4. **API Errors**: Displays retry button

## Testing

To test the implementation:

1. **First Load**: Check network tab to see API call
2. **Cached Load**: Refresh page and verify no new API call
3. **Cache Expiry**: Wait 1 hour or clear cache manually
4. **Offline Mode**: Disable network and verify cached data loads
5. **Error Handling**: Block API endpoint and verify error message

## Future Enhancements

1. Add project ID from URL params for dynamic routing
2. Implement cache invalidation strategies
3. Add loading skeletons instead of spinner
4. Implement optimistic UI updates
5. Add cache size management to prevent storage overflow
