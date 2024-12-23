export function stageOneHash(password: string): Promise<string> {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
    .then(hashBuffer => {
      return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    });
}

// Stage 2: Salt + Hash
export function stageTwoHash(password: string): Promise<{ hash: string; salt: string }> {
  const salt = crypto.randomUUID();
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(password + salt))
    .then(hashBuffer => {
      const hash = Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
      return { hash, salt };
    });
}

export function validatePassword(password: string): boolean {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChar
  );
}