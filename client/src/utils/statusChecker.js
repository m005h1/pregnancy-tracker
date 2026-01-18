// utils/statusChecker.js

export function determineStatus(value, readingType) {
    switch (readingType) {
      case 'fasting':
        if (value < 70) return 'low';
        if (value > 100) return 'high'; // normal fasting: 70–100 mg/dL
        return 'normal';
  
      case 'postBreakfast1hr':
      case 'postLunch1hr':
      case 'postDinner1hr':
        if (value < 70) return 'low';
        if (value > 180) return 'high'; // 1-hr post-meal: under 180 mg/dL
        return 'normal';
  
      case 'postBreakfast2hr':
      case 'postLunch2hr':
      case 'postDinner2hr':
        if (value < 70) return 'low';
        if (value > 140) return 'high'; // 2-hr post-meal: under 140 mg/dL
        return 'normal';
  
      case 'bedtime':
        if (value < 100) return 'low';
        if (value > 140) return 'high'; // bedtime target range: 100–140 mg/dL
        return 'normal';
  
      default:
        if (value < 70) return 'low';
        if (value > 180) return 'high'; // fallback general threshold
        return 'normal';
    }
  }
  