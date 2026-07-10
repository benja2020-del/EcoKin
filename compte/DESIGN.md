---
name: EcoKin
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 16px
  gutter-mobile: 12px
---

## Brand & Style

The design system is built to foster civic pride and environmental responsibility. The brand personality is **reliable, proactive, and community-centric**, positioning the app as a vital utility rather than just a reporting tool. 

The aesthetic follows a **Corporate / Modern** style with a focus on high clarity and approachable professionalism. It utilizes a "Soft Minimalism" approach—generous white space, subtle depth, and a refined color palette that signals environmental health. The goal is to evoke a sense of organized efficiency, making the complex task of waste management feel manageable and rewarding for the average citizen.

## Colors

The palette is anchored in environmental vitality and civic trust.

*   **Primary (Emerald Green):** Represents growth and cleanliness. Used for primary actions, success states, and key branding moments.
*   **Secondary (Civic Blue):** Used for information, educational content, and map-related UI elements to distinguish utility from action.
*   **Urgent (Signal Red):** Reserved strictly for high-priority hazard reports or missed collection alerts.
*   **Neutrals:** A range of earthy grays and off-whites are used to maintain a grounded, professional feel, ensuring the vibrant greens don't overwhelm the user.
*   **Surface:** A soft, cool-toned white background reduces eye strain during outdoor use and provides a clean canvas for high-contrast text.

## Typography

This design system uses a dual-font approach to balance personality with high-utility legibility.

*   **Plus Jakarta Sans** is used for headlines. Its soft, rounded terminals feel welcoming and modern, aligning with the "community-driven" aspect of the brand.
*   **Inter** is the workhorse for body copy and data. Its neutral, systematic nature ensures that schedules, report details, and instructions are extremely readable even in bright outdoor conditions.
*   **Scaling:** On mobile devices, headlines scale down to prevent excessive line-breaking, while body text remains at a comfortable 16px base to ensure accessibility for all age groups in the community.

## Layout & Spacing

The layout utilizes a **Fluid Grid** model optimized for touch-first interaction.

*   **Mobile Grid:** A 4-column fluid grid with 16px outer margins and 12px gutters.
*   **Spacing Rhythm:** A strict 4px/8px baseline grid is used to ensure vertical harmony. All component heights and internal padding should be multiples of 4.
*   **Safe Areas:** Bottom navigation and primary action buttons (like "Report") must respect OS safe areas, typically maintaining a 24px clearance from the device edge.
*   **Touch Targets:** Interactive elements (buttons, chips, toggles) must maintain a minimum hit area of 44x44px.

## Elevation & Depth

To maintain a "clean" and "professional" aesthetic, this design system uses **Tonal Layers** and **Ambient Shadows** rather than heavy borders.

*   **Level 0 (Background):** Solid `#F9FAFB`.
*   **Level 1 (Cards/Surface):** Pure white surface with a very soft, diffused shadow (0px 2px 8px rgba(0,0,0,0.05)). This is used for waste collection cards and list items.
*   **Level 2 (Active/Floating):** Higher elevation with a more pronounced shadow (0px 8px 20px rgba(0,0,0,0.08)). Used for the "Report" Floating Action Button (FAB) and interactive map markers.
*   **Backdrop Blurs:** Used sparingly on top navigation bars (Glassmorphism) to maintain context of the content scrolling beneath while keeping text legible.

## Shapes

The design system employs **Rounded** geometry to evoke a friendly, approachable feel. 

*   **Standard Components:** Buttons, input fields, and status badges use a 0.5rem (8px) corner radius.
*   **Containers:** Large cards for waste info or community announcements use `rounded-lg` (1rem / 16px) to clearly define content blocks.
*   **Interactive Accents:** Map markers and specific iconography may use circular or pill-shaped containers to stand out from the grid-based layout.

## Components

### Buttons & Chips
*   **Primary Button:** Solid Emerald Green with white text. High-contrast and center-aligned for main actions.
*   **Secondary/Ghost Button:** Outlined in Gray-200 with Green text for less critical actions.
*   **Filter Chips:** Used for waste categories (Organic, Plastic, Glass). Use a light tinted background of the category color with a darker text label.

### Status Badges
*   Used for report tracking (e.g., "Pending", "In Progress", "Resolved").
*   Use a "Pill" shape with low-saturation background tints and high-saturation text for immediate scannability.

### Waste Info Cards
*   White cards with Level 1 elevation.
*   Feature a prominent icon on the left, a bold title, and a sub-text line for "Next Collection Date."
*   Right-aligned "chevron" to indicate drill-down capability.

### Map Elements
*   **Markers:** Use a "Drop" shape with a white inner circle containing a category icon. 
*   **Cluster Icons:** Circular, using the Primary Green with a white number indicating the density of reports in an area.

### Input Fields
*   Soft-gray borders (`#E5E7EB`) that transition to Emerald Green on focus.
*   Label text is always visible (not floating) to ensure clarity during the stress of reporting a hazard.