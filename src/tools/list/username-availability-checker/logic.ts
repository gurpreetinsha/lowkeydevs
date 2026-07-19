export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates a username based on general rules:
 * - Length between 1 and 30 characters
 * - Only letters, numbers, underscores, hyphens, and dots allowed
 * - No spaces
 */
export function validateUsername(username: string): ValidationResult {
  const trimmed = username.trim();
  
  if (trimmed.length === 0) {
    return { isValid: false, error: 'Username cannot be empty.' };
  }
  
  if (trimmed.length < 2) {
    return { isValid: false, error: 'Username must be at least 2 characters.' };
  }
  
  if (trimmed.length > 30) {
    return { isValid: false, error: 'Username cannot exceed 30 characters.' };
  }
  
  const invalidCharRegex = /[^a-zA-Z0-9_\-\.]/;
  if (invalidCharRegex.test(trimmed)) {
    return { 
      isValid: false, 
      error: 'Username can only contain letters, numbers, underscores, hyphens, and periods.' 
    };
  }
  
  return { isValid: true };
}
