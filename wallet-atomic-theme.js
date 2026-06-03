/**
 * ============================================================
 * WALLET THEME - Borderless Atomic Design System v3.0.0
 * ============================================================
 * 
 * CORE PRINCIPLE: BORDERLESS FIRST
 * - Default: No backgrounds, no borders, no shadows
 * - Sections separated by spacing and subtle dividers
 * - White surfaces ONLY for interactive elements or special cases
 * - Cards ONLY for: modals, bottom sheets, elevated promotions
 * 
 * @version 3.0.0
 * @license MIT
 * 
 * ============================================================
 */

// ============================================================
// DESIGN TOKENS
// ============================================================

const WalletTheme = {
  version: '3.0.0',
  
  // ==================== COLORS ====================
  colors: {
    primary: {
      DEFAULT: '#0052CC',
      50: '#E9F2FF',
      100: '#CCE0FF',
      500: '#0052CC',
      600: '#003D99',
      700: '#002966'
    },
    
    // Borderless design uses background as primary canvas
    background: {
      DEFAULT: '#F4F5F7',      // Main app background
      alt: '#FAFBFC',           // Alternate subtle background
      inverted: '#172B4D'       // Dark background for special cases
    },
    
    // Surfaces - ONLY for interactive elements
    surface: {
      DEFAULT: '#FFFFFF',        // White surface - USE SPARINGLY
      elevated: '#FFFFFF',       // For cards/modals
      transparent: 'transparent' // DEFAULT for most elements
    },
    
    text: {
      primary: '#172B4D',
      secondary: '#42526E',
      muted: '#5E6C84',
      disabled: '#A1ACB8',
      inverse: '#FFFFFF'
    },
    
    border: {
      light: '#EBECF0',          // Subtle dividers
      DEFAULT: '#DFE5EF',
      bold: '#B3BAC5'
    },
    
    semantic: {
      success: '#00875A',
      successLight: '#E3FCEF',
      warning: '#FF991F',
      warningLight: '#FFF8E6',
      danger: '#DE350B',
      dangerLight: '#FFEBE6',
      info: '#2684FF',
      infoLight: '#E9F2FF'
    },
    
    // Crypto / Fintech
    crypto: {
      btc: '#F7931A',
      eth: '#627EEA',
      sol: '#00FFA3'
    }
  },
  
  // ==================== SPACING ====================
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    section: '28px'      // Consistent section spacing
  },
  
  // ==================== BORDER RADIUS ====================
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    button: '12px',      // ROUND RECTANGLE - NOT FULL
    search: '12px',      // ROUND RECTANGLE - NOT FULL
    squircle: '24px',
    full: '9999px'       // ONLY avatars, badges, pills
  },
  
  // ==================== SHADOWS ====================
  // IMPORTANT: Shadows ONLY for cards, modals, overlays
  shadows: {
    none: 'none',
    card: '0px 4px 12px rgba(9, 30, 66, 0.12)',      // ONLY for cards
    modal: '0px 8px 24px rgba(9, 30, 66, 0.16)',     // ONLY for modals
    focus: '0px 0px 0px 2px rgba(0, 82, 204, 0.2)'
  },
  
  // ==================== TRANSITIONS ====================
  transitions: {
    fast: '100ms',
    base: '200ms',
    slow: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

// ============================================================
// ATOMS - Smallest building blocks (borderless by default)
// ============================================================

const Atoms = {
  // Text atoms
  text: {
    h1: 'font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em;',
    h2: 'font-size: 24px; font-weight: 700; line-height: 1.25; letter-spacing: -0.01em;',
    h3: 'font-size: 20px; font-weight: 600; line-height: 1.3;',
    h4: 'font-size: 18px; font-weight: 600; line-height: 1.35;',
    body: 'font-size: 14px; font-weight: 400; line-height: 1.5;',
    bodySmall: 'font-size: 12px; font-weight: 400; line-height: 1.5;',
    caption: 'font-size: 11px; font-weight: 400; line-height: 1.4;'
  },
  
  // Icon atom
  icon: {
    base: 'display: inline-flex; align-items: center; justify-content: center;',
    sizes: { xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '24px' },
    colors: { 
      default: '#6B778C', 
      primary: '#0052CC',
      success: '#00875A',
      warning: '#FF991F',
      danger: '#DE350B'
    }
  },
  
  // Divider atom - for separating sections
  divider: {
    horizontal: 'height: 1px; background: #EBECF0; margin: 16px 0;',
    vertical: 'width: 1px; height: 20px; background: #EBECF0; margin: 0 16px;'
  },
  
  // Badge atom (small, uses full radius)
  badge: {
    base: 'display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; font-size: 10px; font-weight: 600; border-radius: 9999px;',
    variants: {
      hot: 'background: #FFEBE6; color: #DE350B;',
      new: 'background: #E9F2FF; color: #0052CC;',
      success: 'background: #E3FCEF; color: #00875A;',
      default: 'background: #F4F5F7; color: #42526E;'
    }
  }
};

// ============================================================
// MOLECULES - Combinations of atoms (borderless by default)
// ============================================================

const Molecules = {
  // Button - BORDERLESS except primary
  button: {
    base: `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 12px;
      cursor: pointer;
      transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
      border: none;
    `,
    variants: {
      // BORDERLESS - Default state
      ghost: `
        background: transparent;
        color: #42526E;
      `,
      // WITH SURFACE - For primary actions
      primary: `
        background: #0052CC;
        color: white;
      `,
      // BORDERED - Only when needed
      outline: `
        background: transparent;
        border: 1px solid #DFE5EF;
        color: #42526E;
      `
    },
    feedback: 'transform: scale(0.97);'  // Press feedback
  },
  
  // Search Input - BORDERLESS (only border on focus)
  search: {
    container: 'position: relative; width: 100%;',
    input: `
      width: 100%;
      padding: 12px 16px 12px 44px;
      font-size: 15px;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 12px;
      transition: all 200ms ease;
      outline: none;
    `,
    inputFocused: `
      border-color: #0052CC;
      background: white;
      box-shadow: 0px 0px 0px 2px rgba(0, 82, 204, 0.1);
    `,
    icon: 'position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #6B778C;'
  },
  
  // Feature Item - BORDERLESS (only icon background)
  featureItem: {
    container: 'display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer;',
    icon: `
      width: 56px;
      height: 56px;
      background: #E9F2FF;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #0052CC;
      transition: all 200ms ease;
    `,
    label: 'font-size: 12px; font-weight: 500; color: #42526E;',
    feedback: 'transform: scale(0.95);'
  },
  
  // Service Grid Item - BORDERLESS (separated by spacing)
  serviceItem: {
    container: `
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      cursor: pointer;
      transition: all 200ms ease;
      border-radius: 12px;
    `,
    containerHover: 'background: rgba(0, 82, 204, 0.04);',
    icon: `
      width: 48px;
      height: 48px;
      background: #E9F2FF;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      color: #0052CC;
    `,
    title: 'font-weight: 500; font-size: 14px;',
    subtitle: 'font-size: 12px; color: #5E6C84;'
  },
  
  // List Item - BORDERLESS (only bottom divider)
  listItem: {
    container: `
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 0;
      border-bottom: 1px solid #EBECF0;
      cursor: pointer;
    `,
    icon: 'width: 44px; height: 44px; background: #F4F5F7; border-radius: 9999px; display: flex; align-items: center; justify-content: center;',
    content: 'flex: 1;',
    title: 'font-weight: 500; font-size: 14px;',
    subtitle: 'font-size: 11px; color: #5E6C84; margin-top: 2px;'
  },
  
  // Section Header - BORDERLESS
  sectionHeader: {
    container: 'display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px;',
    title: 'font-size: 18px; font-weight: 600;',
    link: 'font-size: 13px; color: #0052CC; font-weight: 500; cursor: pointer;'
  }
};

// ============================================================
// ORGANISMS - Page sections (borderless, full width)
// ============================================================

const Organisms = {
  // Full Section - BORDERLESS (just spacing)
  section: {
    container: 'margin-top: 28px;',
    first: 'margin-top: 0;'
  },
  
  // Balance Display - WITH surface (special case - needs visibility)
  balanceCard: {
    container: `
      background: linear-gradient(135deg, #0052CC, #003D99);
      border-radius: 16px;
      padding: 20px;
      color: white;
      margin: 8px 0 24px 0;
    `,
    label: 'font-size: 14px; opacity: 0.8;',
    amount: 'font-size: 40px; font-weight: 700; letter-spacing: -0.02em; margin: 8px 0;',
    sub: 'font-size: 12px; opacity: 0.8; display: flex; justify-content: space-between;'
  },
  
  // Quick Features Grid - BORDERLESS
  quickFeatures: {
    grid: 'display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px;',
    item: Molecules.featureItem
  },
  
  // Services Grid - 4x2 expandable, BORDERLESS
  servicesGrid: {
    grid: 'display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;',
    item: Molecules.serviceItem,
    moreButton: `
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 12px;
      padding: 12px;
      color: #0052CC;
      font-weight: 500;
      cursor: pointer;
      border-radius: 12px;
    `
  },
  
  // Transaction List - BORDERLESS
  transactionList: {
    container: 'margin-top: 8px;',
    item: Molecules.listItem
  },
  
  // Promo Banner - WITH surface (special case)
  promoBanner: {
    container: `
      background: linear-gradient(98deg, #E9F2FF, #FFFFFF);
      border-radius: 12px;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 24px 0;
    `
  },
  
  // Bottom Navigation - WITH surface (fixed)
  bottomNav: {
    container: `
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-top: 1px solid #EBECF0;
      display: flex;
      justify-content: space-around;
      padding: 8px 16px 20px;
    `,
    item: 'display: flex; flex-direction: column; align-items: center; gap: 4px; cursor: pointer;',
    icon: 'font-size: 22px;',
    label: 'font-size: 11px;',
    active: 'color: #0052CC;'
  }
};

// ============================================================
// WHEN TO USE SURFACES / CARDS (SPECIAL CASES ONLY)
// ============================================================

const SpecialCases = {
  // ✅ USE WHITE SURFACE FOR:
  useSurface: [
    'Balance card (needs visibility)',
    'Promo banners (for emphasis)',
    'Modals and bottom sheets',
    'Bottom navigation bar',
    'Active input fields (on focus)',
    'Toast notifications'
  ],
  
  // ✅ USE CARD WITH SHADOW FOR:
  useCard: [
    'Modal dialogs',
    'Bottom sheets',
    'Floating action buttons',
    'Highlighted promotions',
    'QR code display'
  ],
  
  // ❌ NEVER USE SURFACE/CARD FOR:
  noSurface: [
    'Regular list items (use border-bottom only)',
    'Section backgrounds',
    'Quick feature icons (only icon has background)',
    'Service grid items',
    'Transaction history items',
    'Settings items',
    'Form fields (borderless until focus)'
  ],
  
  // ✅ DEFAULT STATE - BORDERLESS:
  defaultBorderless: [
    'Screen backgrounds: #F4F5F7',
    'Sections separated by margin-top: 28px',
    'Dividers for separation (1px #EBECF0)',
    'Text on transparent background',
    'Icons on transparent background'
  ]
};

// ============================================================
// MICRO-INTERACTIONS (Borderless friendly)
// ============================================================

const MicroInteractions = {
  // Scale feedback - MUST HAVE for all clickable elements
  scalePress: `
    .scale-press {
      transition: transform 150ms cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
    }
    .scale-press:active {
      transform: scale(0.96);
    }
  `,
  
  // Subtle background change on hover/tap
  subtleBg: `
    .subtle-bg {
      transition: background 150ms ease;
      cursor: pointer;
      border-radius: 12px;
    }
    .subtle-bg:active {
      background: rgba(0, 82, 204, 0.04);
    }
  `,
  
  // Ripple effect for buttons
  ripple: `
    .ripple {
      position: relative;
      overflow: hidden;
    }
    .ripple:active::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(0,82,204,0.1) 0%, transparent 80%);
      transform: translate(-50%, -50%);
      animation: rippleExpand 0.4s ease-out;
    }
    @keyframes rippleExpand {
      from { opacity: 0.5; transform: translate(-50%, -50%) scale(0); }
      to { opacity: 0; transform: translate(-50%, -50%) scale(1); }
    }
  `,
  
  // Skeleton loading
  skeleton: `
    .skeleton {
      background: linear-gradient(90deg, #EBECF0 25%, #F4F5F7 50%, #EBECF0 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s infinite;
      border-radius: 6px;
    }
    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `,
  
  // Slide in animation for new content
  slideIn: `
    .slide-in {
      animation: slideInUp 300ms ease-out;
    }
    @keyframes slideInUp {
      from { transform: translateY(10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `
};

// ============================================================
// CSS VARIABLES (Borderless-first)
// ============================================================

function generateCSSVariables() {
  return `
    :root {
      /* Colors */
      --color-primary: #0052CC;
      --color-primary-dark: #003D99;
      --color-primary-light: #E9F2FF;
      --color-background: #F4F5F7;
      --color-background-alt: #FAFBFC;
      --color-surface: #FFFFFF;
      --color-text: #172B4D;
      --color-text-secondary: #42526E;
      --color-text-muted: #5E6C84;
      --color-border: #DFE5EF;
      --color-border-light: #EBECF0;
      --color-success: #00875A;
      --color-danger: #DE350B;
      --color-warning: #FF991F;
      
      /* Spacing */
      --spacing-xs: 4px;
      --spacing-sm: 8px;
      --spacing-md: 16px;
      --spacing-lg: 24px;
      --spacing-xl: 32px;
      --spacing-section: 28px;
      
      /* Border Radius */
      --radius-sm: 6px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-button: 12px;
      --radius-search: 12px;
      --radius-squircle: 24px;
      --radius-full: 9999px;
      
      /* Shadows - ONLY for special cases */
      --shadow-card: 0px 4px 12px rgba(9, 30, 66, 0.12);
      --shadow-modal: 0px 8px 24px rgba(9, 30, 66, 0.16);
      
      /* Transitions */
      --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
      
      /* Container */
      --container-max: 600px;
    }
    
    body {
      background-color: var(--color-background);
      font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
      color: var(--color-text);
      line-height: 1.5;
    }
    
    /* Container - BORDERLESS */
    .container {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--spacing-md);
    }
    
    /* Section spacing - BORDERLESS */
    .section {
      margin-top: var(--spacing-section);
    }
    
    .section:first-child {
      margin-top: 0;
    }
    
    /* Divider - BORDERLESS */
    .divider {
      height: 1px;
      background: var(--color-border-light);
      margin: var(--spacing-md) 0;
    }
    
    /* Utility classes */
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-sm { gap: var(--spacing-sm); }
    .gap-md { gap: var(--spacing-md); }
    .w-full { width: 100%; }
    .text-center { text-align: center; }
    
    /* Typography */
    .text-h1 { font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; }
    .text-h2 { font-size: 24px; font-weight: 700; line-height: 1.25; }
    .text-h3 { font-size: 20px; font-weight: 600; line-height: 1.3; }
    .text-body { font-size: 14px; font-weight: 400; line-height: 1.5; }
    .text-caption { font-size: 12px; font-weight: 400; color: var(--color-text-muted); }
    
    /* Colors */
    .text-primary { color: var(--color-primary); }
    .text-success { color: var(--color-success); }
    .text-danger { color: var(--color-danger); }
    .text-muted { color: var(--color-text-muted); }
    
    ${MicroInteractions.scalePress}
    ${MicroInteractions.subtleBg}
    ${MicroInteractions.ripple}
    ${MicroInteractions.skeleton}
    ${MicroInteractions.slideIn}
  `;
}

// ============================================================
// QUICK REFERENCE CARD
// ============================================================

const QuickReference = {
  borderless: {
    description: 'Default state - no background, no border, no shadow',
    examples: [
      'Screen background: #F4F5F7',
      'Sections: separated by margin-top: 28px',
      'Dividers: 1px #EBECF0 between items',
      'Text: on transparent background',
      'Icons: on transparent background'
    ]
  },
  
  withSurface: {
    description: 'USE SPARINGLY - white background for emphasis',
    when: [
      'Balance card (needs visibility)',
      'Promo banners',
      'Bottom navigation bar',
      'Active input fields'
    ]
  },
  
  withCard: {
    description: 'RARE - only for overlays and modals',
    when: [
      'Modal dialogs',
      'Bottom sheets',
      'Floating action buttons',
      'QR code display'
    ]
  },
  
  borderRadiusRules: {
    button: '12px - ROUND RECTANGLE (NOT full round)',
    search: '12px - ROUND RECTANGLE (NOT full round)',
    squircle: '24px - for quick feature icons',
    full: '9999px - ONLY for avatars, badges, pills'
  }
};

// ============================================================
// EXPORTS
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    WalletTheme,
    Atoms,
    Molecules,
    Organisms,
    SpecialCases,
    MicroInteractions,
    QuickReference,
    generateCSSVariables
  };
}

if (typeof window !== 'undefined') {
  window.WalletTheme = WalletTheme;
  window.Atoms = Atoms;
  window.Molecules = Molecules;
  window.Organisms = Organisms;
  window.SpecialCases = SpecialCases;
  window.WalletMicroInteractions = MicroInteractions;
  window.WalletQuickRef = QuickReference;
  
  document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = generateCSSVariables();
    document.head.appendChild(style);
  });
}

console.log('🎨 Borderless Atomic Wallet Theme v3.0.0 loaded');
console.log('📖 Quick Reference:', QuickReference);
console.log('✅ Default: BORDERLESS | 🎯 Surface: SPARINGLY | 💳 Cards: RARE');