import React, { useState, useEffect } from 'react';
import { stageOneHash, stageTwoHash, validatePassword } from '../utils/passwordHash';
import { Check, X } from 'lucide-react';

interface AuthFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => Promise<void>;
}

interface PasswordRequirement {
  test: (password: string) => boolean;
  message: string;
}

const passwordRequirements: PasswordRequirement[] = [
  { test: (p) => p.length >= 8, message: 'At least 8 characters' },
  { test: (p) => /[A-Z]/.test(p), message: 'One uppercase letter' },
  { test: (p) => /[a-z]/.test(p), message: 'One lowercase letter' },
  { test: (p) => /\d/.test(p), message: 'One number' },
  { test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p), message: 'One special character' },
];

export function AuthForm({ onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [showRequirements, setShowRequirements] = useState(false);
  const [requirements, setRequirements] = useState<boolean[]>(
    new Array(passwordRequirements.length).fill(false)
  );

  useEffect(() => {
    if (password) {
      const newRequirements = passwordRequirements.map(req => req.test(password));
      setRequirements(newRequirements);
    }
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validatePassword(password)) {
      setError('Password does not meet all requirements');
      return;
    }

    try {
      const stage1Hash = await stageOneHash(password);
      const { hash: stage2Hash } = await stageTwoHash(stage1Hash);
      await onSubmit(email, stage2Hash, rememberMe);
      
      // Clear form after successful submission
      setEmail('');
      setPassword('');
      setRememberMe(false);
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setShowRequirements(true)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </label>
        {showRequirements && (
          <div className="mt-2 space-y-2">
            {passwordRequirements.map((req, index) => (
              <div key={req.message} className="flex items-center space-x-2 text-sm">
                {requirements[index] ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
                <span className={requirements[index] ? 'text-green-600' : 'text-red-600'}>
                  {req.message}
                </span>
              </div>
            ))}
          </div>
        )}
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
  );
}