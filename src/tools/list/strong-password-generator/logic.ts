const WORD_LIST = [
  'ability', 'about', 'above', 'actor', 'acute', 'admit', 'adopt', 'adult', 'agent', 'agony',
  'agree', 'ahead', 'alarm', 'album', 'alert', 'alike', 'alive', 'allow', 'alone', 'along',
  'alter', 'among', 'anger', 'angle', 'angry', 'apart', 'apple', 'apply', 'arena', 'argue',
  'arise', 'array', 'arrow', 'aside', 'asset', 'audio', 'audit', 'avoid', 'award', 'aware',
  'awful', 'bacon', 'badge', 'badly', 'baker', 'basic', 'basin', 'basis', 'beach', 'beast',
  'begin', 'being', 'below', 'bench', 'berry', 'bible', 'birth', 'black', 'blade', 'blame',
  'blind', 'block', 'blood', 'board', 'boast', 'bonus', 'boost', 'bound', 'brain', 'brand',
  'brave', 'bread', 'break', 'brick', 'bride', 'brief', 'bring', 'broad', 'broke', 'brown',
  'brush', 'build', 'built', 'bunch', 'buyer', 'cabin', 'cable', 'camel', 'camera', 'camp',
  'canal', 'candy', 'canon', 'cargo', 'carry', 'carve', 'catch', 'cause', 'cedar', 'chain',
  'chair', 'chalk', 'champ', 'chaos', 'charm', 'chart', 'chase', 'cheap', 'check', 'cheek',
  'cheer', 'chef', 'chest', 'chief', 'child', 'chili', 'chill', 'china', 'chips', 'choir',
  'chose', 'chunk', 'cigar', 'claim', 'class', 'clerk', 'click', 'cliff', 'climb', 'clock',
  'close', 'cloth', 'cloud', 'coach', 'coast', 'cobra', 'cocoa', 'coder', 'color', 'colt',
  'comet', 'comic', 'coral', 'couch', 'cough', 'count', 'court', 'cover', 'craft', 'crane',
  'crash', 'crater', 'crawl', 'crazy', 'cream', 'crime', 'cross', 'crowd', 'crown', 'crude',
  'cruel', 'crust', 'cubic', 'curly', 'cycle', 'daily', 'dairy', 'daisy', 'dance', 'daring',
  'dark', 'darling', 'database', 'dating', 'dawn', 'deadly', 'dealer', 'debate', 'debris',
  'debt', 'decade', 'decay', 'decor', 'decoy', 'deeply', 'defeat', 'defend', 'define', 'degree',
  'delay', 'delete', 'demand', 'demise', 'denial', 'dense', 'depart', 'depend', 'depict', 'deploy',
  'depth', 'deputy', 'derive', 'desert', 'design', 'desire', 'desk', 'detail', 'detect', 'device',
  'devil', 'devote', 'dialog', 'diary', 'diesel', 'differ', 'digest', 'digital', 'dining', 'dinner',
  'direct', 'dirt', 'disaster', 'disc', 'discuss', 'disease', 'dish', 'dismiss', 'disorder', 'display',
  'dispose', 'dispute', 'disrupt', 'distant', 'distort', 'distract', 'distress', 'district', 'diverse', 'divide',
  'divine', 'divorce', 'doctor', 'doctrine', 'document', 'dogma', 'doll', 'domain', 'domestic', 'dominant',
  'donate', 'donor', 'doom', 'door', 'dosage', 'double', 'doubt', 'down', 'dozen', 'draft',
  'drag', 'drain', 'drama', 'drastic', 'draw', 'dread', 'dream', 'drift', 'drill', 'drink'
];

export interface StrongPwdOptions {
  mode: 'random' | 'passphrase';
  length: number; // For random: char length. For passphrase: word count.
  separator: string; // Separator for passphrase: '-', ' ', '.', etc.
  capitalize: boolean; // For passphrase: capitalize words
  includeNumber: boolean; // For passphrase: add number at end
}

/**
 * Generates a single highly secure password.
 */
export function generateStrongPassword(options: StrongPwdOptions): string {
  const { mode, length, separator, capitalize, includeNumber } = options;

  const getSecureRandom = (): number => {
    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
      const arr = new Uint32Array(1);
      globalThis.crypto.getRandomValues(arr);
      return arr[0] / (0xffffffff + 1);
    }
    return Math.random();
  };

  if (mode === 'passphrase') {
    const pickedWords: string[] = [];
    for (let i = 0; i < length; i++) {
      let word = WORD_LIST[Math.floor(getSecureRandom() * WORD_LIST.length)];
      if (capitalize) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      pickedWords.push(word);
    }
    let passphrase = pickedWords.join(separator);
    if (includeNumber) {
      passphrase += Math.floor(getSecureRandom() * 10);
    }
    return passphrase;
  } else {
    // Highly secure random characters
    const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let pwd = '';
    for (let i = 0; i < length; i++) {
      pwd += pool[Math.floor(getSecureRandom() * pool.length)];
    }
    return pwd;
  }
}

export interface PasswordStrength {
  entropy: number; // Bits of entropy
  label: 'Very Weak' | 'Weak' | 'Medium' | 'Strong' | 'Very Strong';
  color: string; // CSS color string (e.g. hex or CSS var)
  percent: number; // Progress value (0 to 100)
  crackTime: string;
}

/**
 * Calculates entropy and time to crack.
 */
export function calculateStrength(pwd: string): PasswordStrength {
  if (!pwd) {
    return { entropy: 0, label: 'Very Weak', color: 'var(--error)', percent: 0, crackTime: 'instantly' };
  }

  // Determine pool size
  let poolSize = 0;
  if (/[a-z]/.test(pwd)) poolSize += 26;
  if (/[A-Z]/.test(pwd)) poolSize += 26;
  if (/[0-9]/.test(pwd)) poolSize += 10;
  // Non-alphanumeric chars
  if (/[^a-zA-Z0-9]/.test(pwd)) poolSize += 32;

  if (poolSize === 0) poolSize = 26; // Fallback

  const entropy = Math.round(pwd.length * Math.log2(poolSize));

  let label: PasswordStrength['label'] = 'Very Weak';
  let color = 'var(--error)';
  let percent = 10;
  let crackTime = 'instantly';

  if (entropy >= 80) {
    label = 'Very Strong';
    color = 'var(--success)';
    percent = 100;
    crackTime = 'billions of years';
  } else if (entropy >= 60) {
    label = 'Strong';
    color = 'var(--success)';
    percent = 80;
    crackTime = 'centuries';
  } else if (entropy >= 40) {
    label = 'Medium';
    color = 'var(--accent)';
    percent = 50;
    crackTime = 'days';
  } else if (entropy >= 25) {
    label = 'Weak';
    color = 'var(--error)';
    percent = 30;
    crackTime = 'minutes';
  }

  return { entropy, label, color, percent, crackTime };
}
